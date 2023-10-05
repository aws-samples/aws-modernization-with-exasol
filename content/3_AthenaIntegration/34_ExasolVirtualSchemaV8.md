---
title: "Setup Exasol Virtual Schema V8"
chapter: true
weight: 3
---

# Exasol Virtual Schema V8

Virtual Schemas allow access to remote data sources as if they were local objects inside Exasol, instead of having to IMPORT these objects. You can also join a virtual table with a real table in Exasol, or with another virtual table. The only thing that's not possible are insert, update and deletions. Virtual schemas are read only. With virtual schemas, you can have a quick access to all your data in foreign databases. You can integrate them in your analytical queries and get more insight out of your data. SELECT can then be used for access, as well as for non-relational data sources.

A Virtual Schema installation consists of these general steps:

1.  Download Athena JDBC driver
2.  Upload the Athena JDBC driver to Exasol's BucketFS
3.  Setup Athena JDBC connection inside Exasol
4.  Create Adapter Script and upload the associated drivers to Exasol's BucketFS
5.  Create Virtual Schema using Adapter script

### Download Athena JDBC driver

The Athena JDBC driver is provided by AWS and can be downloaded from the following page. 

https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html

The JDBC driver requires the Java Runtime environment. After you download the version you need, read the release notes, and review the License Agreement and Notices.

### Upload the Athena JDBC driver to Exasol's BucketFS

Exasol supports loading data from most databases using a JDBC driver. Exasol Virtual Schema requires to upload the JDBC driver in to specified Exasol BucketFS. BucketFS is a synchronous file system and can be used to store data available in the Exasol cluster. Exasol provides a default BucketFS service preinstalled for the configured data disk. Both the adapter script and the Exasol database itself need the driver to the source database. The adapter script needs it for making the meta data requests and the Exasol database needs it to execute the `SELECT IMPORT` command.

By default, the database is configured to use the following path for all JDBC drivers.

    /buckets/bfsdefault/default/drivers/jdbc/

The JDBC driver should be downloaded to your local machine and must consist of one or more jar files. The default bucket is available on port 2581 by default.

Create a configuration file called settings.cfg that specifies the configuration parameters for your driver, using the following format:

|Parameter|Value|
|--------|--------|
|DRIVERNAME|ATHENA|
|JAR|AthenaJDBC42_2.0.8.jar|
|DRIVERMAIN|om.simba.athena.jdbc.Driver|
|PREFIX|jdbc:awsathena:|
|NOSECURITY|YES|

    DRIVERNAME=ATHENA
    JAR=AthenaJDBC42_2.0.8.jar
    DRIVERMAIN=com.simba.athena.jdbc.Driver
    PREFIX=jdbc:awsathena:
    NOSECURITY=YES
    FETCHSIZE=100000
    INSERTSIZE=-1

{{% notice info %}}
Every line in the settings.cfg file must end with a newline character (LF).
{{% /notice %}}

Next step we'll upload the settings.cfg file and the jar driver to the specified bucket path using CURL.

    curl -v -k -X PUT -T /<PATH_TO_FILE>/settings.cfg https://w:<PASSWD>@<EXASOL_HOST>:2581/default/drivers/jdbc/athena/settings.cfg

    curl -v -k -X PUT -T /<PATH_TO_JDBC>/AthenaJDBC42_2.0.8.jar https://w:<PASSWD>@<EXASOL_HOST>:2581/default/drivers/jdbc/athena/AthenaJDBC42_2.0.8.jar

If the files were uploaded correctly to BucketFS, their existence can now be verified again with the following CURL command.

    ~$ curl -k https://r:<PASSWD>@<EXASOL_HOST>:2581/default/@
    95488 EXASolution-8.22.0/nschroot
    155 drivers/jdbc/athena/settings.cfg
    620496 EXASolution-8.22.0/udfplugin_protegrity_rest
    8159428 drivers/jdbc/athena/AthenaJDBC42_2.0.8.jar
    624064 EXASolution-8.22.0/udfplugin_applicationprotector_rest_72_ua
    620496 EXASolution-8.22.0/udfplugin_protegrity_rest_ua
    624064 EXASolution-8.22.0/udfplugin_applicationprotector_rest_72

{{% notice info %}}
The latest Athena driver requires to Disable Security Manager (NOSECURITY) because JDBC driver requires Java permissions which we do not grant by default.
{{% /notice %}}

### Setup Athena JDBC connection inside Exasol

In the next step we will create a connection object in the Exasol database.

    CREATE OR REPLACE CONNECTION ATHENA_CONNECTION
      TO 'jdbc:awsathena://AwsRegion=eu-central-1;S3OutputLocation=s3://aws-athena-query-results-output-bucket/'
      USER '<AWS_ACCESS_KEY_ID>'
      IDENTIFIED BY '<AWS_SECRET_ACCESS_KEY>';

The JDBC parameter AwsRegion specifies the region in which the Athena service has been created in aws. The further parameter S3OutputLocation specifies the location in which bucket the Athens results should be stored. To make this work without issues, the appropriate permissions and roles for the aws ACCESS_KEY must be set as well.

![Create JDBC connection](/images/athena/34_1_Virtual_Schema.png)

Exasol's Virtual Schema already uses the `IMPORT` statement in the background to retrieve the data from the source database. However, this method is less comfortable and does not map the different data types to the Exasol data types. But with this method it is easy to check if the JDBC connection is working correctly.

    SELECT *
    FROM (
      IMPORT FROM JDBC AT ATHENA_CONNECTION
      STATEMENT 'SELECT * FROM exasol_workshop.dim_country LIMIT 10'
    );

![Import statement](/images/athena/34_2_Virtual_Schema.png)

### Create Adapter Script and upload the associated drivers to Exasol's BucketFS

The next task will be to add a new BucketFS service in Exasol V8. A BucketFS service contains a number of buckets, and every bucket stores a number of files.In the new bucket the required drivers for the adapter script are stored. For the creation of the new bucket we use the tool ConfD. ConfD is a low-level API that is used to administer an Exasol database.


https://docs.exasol.com/db/latest/administration/on-premise/bucketfs/bucketfs.htm

To create the additional bucket, we need to get to a node via the Exasol Deployment Tool c4 and run the following command.
You can name it “jars”, set the public parameter to true, and provide a read and write password, even with it being publicly readable.

    ubuntu@ip-172-XXX-X-XXX:~$ c4 ps
         N  PLAY_ID   NODE  MEDIUM  INSTANCE   EXTERNAL_IP    INTERNAL_IP   STAGE  STATE    UPTIME    TTL
         1  2e123456  11    awscf   c5d.large  52.XX.XXX.XXX  192.168.0.11  d      running  00:32:04  +∞

    ubuntu@ip-172-XXX-X-XXX:~$ c4 connect -t 1.11/cos
    [root@n11 ~]# confd_client -c bucket_add -a '{"bucket_name": "jars", "bucketfs_name": "bfsdefault", "public": true, "read_password": "cHc=", "write_password": "cHc=}'

Now we have created a new bucket.

![Import statement](/images/athena/34_3_Virtual_Schema.png)

The corresponding adapter Jar file for Athena can be found on Exasol's Github repository.

https://github.com/exasol/athena-virtual-schema/releases

![Github assets](/images/athena/34_4_Virtual_Schema.png)

Next step we'll upload the adapter file with the jar driver using CURL.

    curl -v -k -X PUT -T /<PATH_TO_FILE>/AthenaJDBC42_2.0.8.jar https://w:<PASSWD>@<EXASOL_HOST>:2581/jars/AthenaJDBC42_2.0.8.jar

    curl -v -k -X PUT -T /<PATH_TO_FILE>/virtual-schema-dist-9.0.3-athena-2.0.0.jar https://w:<PASSWD>@<EXASOL_HOST>:2581/jars/virtual-schema-dist-9.0.3-athena-2.0.0.jar

    ~$ curl -k https://r:<PASSWORD>@<EXASOL_HOST>:2581/jars/@
    8159428 AthenaJDBC42_2.0.8.jar
    587877 virtual-schema-dist-9.0.3-athena-2.0.0.jar

To check if the data was uploaded correctly, you can also use the corresponding UDF script. This shows you the content of the different BucketFS folders on the Exasol server.

    CREATE SCHEMA IF NOT EXISTS EXA_toolbox;

    --/
    CREATE OR REPLACE PYTHON3 SCALAR SCRIPT EXA_toolbox.bucketfs_ls(my_path VARCHAR(256)) EMITS (files VARCHAR(256)) AS
    import os

    def run(ctx):
      for line in os.listdir(ctx.my_path):
        ctx.emit(line)
    /

    SELECT EXA_toolbox.bucketfs_ls('/buckets/bfsdefault/jars');

This should confirm that the files in the jars bucket can be accessed by UDF scripts.

![EXA_toolbox](/images/athena/34_5_Virtual_Schema.png)

### Create Virtual Schema using Adapter script

Now we are ready to generate the Adapter script, but first we need to adjust the appropriate paths from BucketFS.

    CREATE SCHEMA ADAPTER;

    --/
    CREATE OR REPLACE JAVA ADAPTER SCRIPT ADAPTER.JDBC_ATHENA_ADAPTER AS
      %scriptclass com.exasol.adapter.RequestDispatcher;
      %jar /buckets/bfsdefault/jars/virtual-schema-dist-9.0.3-athena-2.0.0.jar;
      %jar /buckets/bfsdefault/jars/AthenaJDBC42_2.0.8.jar;
    /

The script is now available, in the last and final step we need to execute the `CREATE VIRTUAL SCHEMA` statement.

https://docs.exasol.com/db/latest/database_concepts/virtual_schema/user_guide.htm

    CREATE VIRTUAL SCHEMA VS_ATHENA_WORKSHOP
      USING ADAPTER.JDBC_ATHENA_ADAPTER
      WITH
      CONNECTION_NAME = 'ATHENA_CONNECTION'
      SCHEMA_NAME = 'exasol_workshop';

The Exasol Virtual Schema is now created and can be used like a native schema within Exasol.

    SELECT * FROM VS_ATHENA_WORKSHOP."dim_country" LIMIT 10;

![VIRTUAL SCHEMA](/images/athena/34_6_Virtual_Schema.png)

### Limitations of Exasol Virtual Schema

Once the virtual schema has been created, users can be granted access to it. You cannot grant access to certain tables within the schema, but you can exclude tables from the Virtual Schema. If we would like to limit access to only certain tables, we can use the `TABLE_FILTER` property of the virtual schema.

    ALTER VIRTUAL SCHEMA VS_ATHENA_WORKSHOP 
    SET TABLE_FILTER = 'dim_country';

![SCRIPT ADAPTER.LS](/images/athena/34_7_Virtual_Schema.png)

![SCRIPT ADAPTER.LS](/images/athena/34_8_Virtual_Schema.png)

Setting the `TABLE_FILTER` to NULL removes that limitation again.

    ALTER VIRTUAL SCHEMA VS_ATHENA_WORKSHOP 
    SET TABLE_FILTER = null;

DML is not allowed, the `UPDATE` command will fail with an error message.

![SCRIPT ADAPTER.LS](/images/athena/34_9_Virtual_Schema.png)

A `REFRESH` statement is also required after objects have been added to the remote schema or if existing table structures were changed.

    ALTER VIRTUAL SCHEMA VS_ATHENA_WORKSHOP REFRESH;

A `DROP VIRTUAL SCHEMA` statement will only remove the declaration of the virtual schema from Exasol. The tables residing on the remote source will not be affected.

    DROP VIRTUAL SCHEMA VS_ATHENA_WORKSHOP CASCADE;
