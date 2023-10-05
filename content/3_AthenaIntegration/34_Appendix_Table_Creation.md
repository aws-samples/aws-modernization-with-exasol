---
title: "Appendix: Table Creation"
chapter: true
weight: 4
---

# Appendix

Here you can find the two other mentioned methods to create tables for the data catalog.


### Option: Creating data catalog table using AWS Glue Crawler

You can also use a crawler to populate the AWS Glue Data Catalog with tables. This is the primary method used by most AWS Glue users. An [AWS Glue Crawler](https://docs.aws.amazon.com/glue/latest/dg/add-crawler.html "AWS Glue Crawler") can crawl multiple data stores in a single run. Upon completion, the crawler creates or updates one or more tables in your Data Catalog. AWS Glue provides also built-in classifiers to infer schemas from common files with formats that include JSON, CSV, and Apache Avro.

![Crawler Review and update](/images/athena/32_6_Glue_Crawler.png)

You can run an AWS Glue crawler on demand or on a regular schedule. Crawler schedules can be also expressed in cron format.

![Crawler runs](/images/athena/32_7_Glue_Crawler.png)

A crawler accesses your data store, extracts metadata, and creates table definitions in the AWS Glue Data Catalog.

![Crawler Tables](/images/athena/32_8_Glue_Crawler.png)

After you created a table, you can use SELECT statements to query it.

![Athena Tables and views](/images/athena/32_9_Glue_Crawler.png)

### Option: Creating data catalog table using Athena DDL statement

When you [create tables](https://docs.aws.amazon.com/athena/latest/ug/creating-tables.html "create tables") and databases manually, Athena uses HiveQL data definition language (DDL) statements to create tables and databases in the AWS Glue Data Catalog.

![Athena query DDL](/images/athena/32_10_DDL_Statement.png)

To create tables and query data in these formats in Athena, specify a serializer-deserializer class (SerDe) so that Athena knows which format is used and how to parse the data.

https://docs.aws.amazon.com/athena/latest/ug/csv-serde.html

Athena supports creating tables and querying data from CSV, TSV, custom-delimited, and JSON formats; data from Hadoop-related formats: ORC, Apache Avro and Parquet; logs from Logstash, AWS CloudTrail logs, and Apache WebServer logs. In our example we use the simple and widely accepted CSV format.

    CREATE EXTERNAL TABLE IF NOT EXISTS 'exasol_workshop'.'dim_country' (
      'country_id' int,
      'country_iso_code_2' varchar(3),
      'country_iso_code_3' varchar(3),
      'country_name' varchar(255)
    ) ROW FORMAT SERDE 'org.apache.hadoop.hive.serde2.OpenCSVSerde' WITH SERDEPROPERTIES ( 'separatorChar' = ',', 'quoteChar' = '"', 'escapeChar' = '\\'
    ) LOCATION 's3://exasol-workshop-eu-central-1-XXX/dim_country/'
    TBLPROPERTIES ('has_encrypted_data'='false', 'skip.header.line.count'='1');

Before you execute the DDL statement inside the Athens console, the correct database must be selected. Either select the correct database from the left menu or specify the correct database name within the SQL statement.

![Athena query Database](/images/athena/32_11_DDL_Statement.png)


