---
title: "Setup Exasol Virtual Schema V7"
chapter: true
weight: 3
---

# Exasol Virtual Schema V7

Virtual Schemas allow access to remote data sources as if they were local objects inside Exasol, instead of having to IMPORT these objects. You can also join a virtual table with a real table in Exasol, or with another virtual table. The only thing that's not possible are insert, update and deletions. Virtual schemas are read only. With virtual schemas, you can have a quick access to all your data in foreign databases. You can integrate them in your analytical queries and get more insight out of your data. SELECT can then be used for access, as well as for non-relational data sources.

A Virtual Schema installation consists of these general steps:

1.  Download Athena JDBC driver from aws website
2.  Register the Athena JDBC driver in EXAOperation
3.  Setup Athena JDBC connection inside Exasol
4.  Create Adapter Script and upload the associated drivers to Exasol's BucketFS
5.  Create Virtual Schema using Adapter script

### Download Athena JDBC driver

The Athena JDBC driver is provided by AWS and can be downloaded from the following page. 

https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html

The JDBC driver requires the Java Runtime environment. After you download the version you need, read the release notes, and review the License Agreement and Notices.

### Register the JDBC Athena driver in EXAoperation

Exasol Virtual Schema requires to upload the JDBC driver in two different locations, one in EXAoperation and the other in the specified Exasol BucketFS. Both the adapter script and the Exasol database itself need the driver to the source database. The adapter script needs it for making the meta data requests and the Exasol database needs it to execute the `SELECT IMPORT` command.

The Athena JDBC driver needs to be uploaded & registered in EXAoperation. Login to EXAoperation, go to the branch Software and click on the JDBC Drivers tab.

![EXAoperation](/images/athena/33_1_Virtual_Schema.png)

Click on “Add” button and fill in the necessary fields.

![JDBC driver properties](/images/athena/33_2_Virtual_Schema.png)

|Parameter|Value|
|--------|--------|
|Driver Name|ATHENA|
|Main Class|com.simba.athena.jdbc.Driver|
|Prefix|jdbc:awsathena:|
|Disable Security Manager|true|

Select the appropriate JDBC driver file (AthenaJDBC42.jar) and click the "Upload" button.

https://docs.exasol.com/db/latest/administration/aws/manage_software/manage_jdbc.htm

{{% notice info %}}
The latest Athena driver requires to Disable Security Manager because JDBC driver requires Java permissions which we do not grant by default.
{{% /notice %}}

### Setup Athena JDBC connection inside Exasol

In the next step we will create a connection object in the Exasol database.

    CREATE OR REPLACE CONNECTION ATHENA_CONNECTION
      TO 'jdbc:awsathena://AwsRegion=eu-central-1;S3OutputLocation=s3://aws-athena-query-results-output-bucket/'
      USER '<AWS_ACCESS_KEY_ID>'
      IDENTIFIED BY '<AWS_SECRET_ACCESS_KEY>';

The JDBC parameter AwsRegion specifies the region in which the Athena service has been created in aws. The further parameter S3OutputLocation specifies the location in which bucket the Athens results should be stored. To make this work without issues, the appropriate permissions and roles for the aws ACCESS_KEY must be set as well.

![Create JDBC connection](/images/athena/33_3_Virtual_Schema.png)

Exasol's Virtual Schema already uses the `IMPORT` statement in the background to retrieve the data from the source database. However, this method is less comfortable and does not map the different data types to the Exasol data types. But with this method it is easy to check if the JDBC connection is working correctly.

    SELECT *
    FROM (
      IMPORT FROM JDBC AT ATHENA_CONNECTION
      STATEMENT 'SELECT * FROM exasol_workshop.dim_country LIMIT 10'
    );

![Import statement](/images/athena/33_4_Virtual_Schema.png)

### Create Adapter Script and upload the associated drivers to Exasol's BucketFS

The next task will be to add a new BucketFS service in EXAOperation, under EXABuckets.
BucketFS is a synchronous file system and can be used to store data available in the Exasol cluster. Exasol provides a default BucketFS service preinstalled for the configured data disk.

https://docs.exasol.com/db/latest/database_concepts/bucketfs/bucketfs_setup.htm


![EXABucketFS Service](/images/athena/33_5_Virtual_Schema.png)

You can name it “jars”, check the Public Readable checkbox, and provide a read and write password, even with it being publicly readable. We have created a new bucket. 

The corresponding adapter Jar file for Athena can be found on Exasol's Github repository.

https://github.com/exasol/athena-virtual-schema/releases

![Github assets](/images/athena/33_6_Virtual_Schema.png)

Next step we'll upload the adapter file with the jar driver using CURL.

    curl -k --user w:<PASSWD> -X PUT -T /<PATH_TO_JDBC>/AthenaJDBC42_2.0.8.jar https://<EXASOL_HOST>:<BUCKET_FS_PORT>/jars/AthenaJDBC42_2.0.8.jar

![Github assets](/images/athena/33_7_Virtual_Schema.png)

    ~ curl -k --user r:<PASSWORD> https://<EXASOL_HOST>:<BUCKETFS_PORT>/jars/@
    587877 virtual-schema-dist-9.0.3-athena-2.0.0.jar
    8159428 AthenaJDBC42_2.0.8.jar

To check if the data was uploaded correctly, you can use the corresponding UDF script. This shows you the content of the different BucketFS folders on the Exasol server.

    CREATE SCHEMA ADAPTER;

    --/
    CREATE OR REPLACE PYTHON SCALAR SCRIPT ADAPTER.LS ("my_path" VARCHAR(100)) EMITS ("FILES" VARCHAR(100)) AS
    import subprocess
    def run(ctx):
     try:
      p = subprocess.Popen('ls '+ctx.my_path,
       stdout = subprocess.PIPE, stderr = subprocess.STDOUT,
       close_fds = True, shell = True)
      out, err = p.communicate()
      for line in out.strip().split('\n'): ctx.emit(line)
     finally:
      if p is not None:
       try: p.kill()
       except: pass
    /


This should confirm that the files in the jars bucket can be accessed by UDF scripts.

![SCRIPT ADAPTER.LS](/images/athena/33_8_Virtual_Schema.png)

### Create Virtual Schema using Adapter Script

Now we are ready to generate the Adapter script, but first we need to adjust the appropriate paths from BucketFS.

    --/
    CREATE OR REPLACE JAVA ADAPTER SCRIPT ADAPTER.JDBC_ATHENA_ADAPTER AS
      %scriptclass com.exasol.adapter.RequestDispatcher;
      %jar /buckets/bfsdefault/jars/virtual-schema-dist-9.0.3-athena-2.0.0.jar;
      %jar /buckets/bfsdefault/jars/AthenaJDBC42_2.0.8.jar;
    /

![SCRIPT ADAPTER.LS](/images/athena/33_9_Virtual_Schema.png)

The script is now available, in the last and final step we need to execute the `CREATE VIRTUAL SCHEMA` statement.

https://docs.exasol.com/db/latest/database_concepts/virtual_schema/user_guide.htm

    CREATE VIRTUAL SCHEMA VS_ATHENA_WORKSHOP
     USING ADAPTER.JDBC_ATHENA_ADAPTER
     WITH
     CONNECTION_NAME = 'ATHENA_CONNECTION'
     SCHEMA_NAME = 'exasol_workshop';

The Exasol Virtual Schema is now created and can be used like a native schema within Exasol.

    SELECT * FROM VS_ATHENA_WORKSHOP."dim_country" LIMIT 10;

![SCRIPT ADAPTER.LS](/images/athena/33_10_Virtual_Schema.png)

### Limitations of Exasol Virtual Schema

Once the virtual schema has been created, users can be granted access to it. You cannot grant access to certain tables within the schema, but you can exclude tables from the Virtual Schema. If we would like to limit access to only certain tables, we can use the `TABLE_FILTER` property of the virtual schema.

    ALTER VIRTUAL SCHEMA VS_ATHENA_WORKSHOP 
    SET TABLE_FILTER = 'sales';

![SCRIPT ADAPTER.LS](/images/athena/33_11_Virtual_Schema.png)

![SCRIPT ADAPTER.LS](/images/athena/33_12_Virtual_Schema.png)

Setting the `TABLE_FILTER` to NULL removes that limitation again.

    ALTER VIRTUAL SCHEMA VS_ATHENA_WORKSHOP 
    SET TABLE_FILTER = null;

DML is not allowed, the `UPDATE` command will fail with an error message.

![SCRIPT ADAPTER.LS](/images/athena/33_13_Virtual_Schema.png)

A `REFRESH` statement is also required after objects have been added to the remote schema or if existing table structures were changed.

    ALTER VIRTUAL SCHEMA VS_ATHENA_WORKSHOP REFRESH;

A `DROP VIRTUAL SCHEMA` statement will only remove the declaration of the virtual schema from Exasol. The tables residing on the remote source will not be affected.

    DROP VIRTUAL SCHEMA VS_ATHENA_WORKSHOP CASCADE;
