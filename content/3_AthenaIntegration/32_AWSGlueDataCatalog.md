---
title: "Setup AWS Data Catalog"
chapter: true
weight: 2
---

# AWS Glue Data Catalog

The AWS Glue Data Catalog is an index to the location, schema, and runtime metrics of your data; it contains references to the underlying data sources.
Information in the Data Catalog tables are stored as metadata tables, with each table specifying a single data store. Typically, you run a crawler to inventory the data in your data stores.

AWS Glue offers several ways to create a table within the data catalog, using the AWS Console and the "Create Table Wizard", the AWS Glue Crawler, or directly as a DDL statement within Athena Query Editor.

Regardless of how the tables are created, the tables creation process registers the dataset with Athena. This registration occurs in the AWS Glue Data Catalog and enables Athena to run queries on the data.

Whichever option you choose, all three options create a table with which we can later connect to Exasol Virtual Schema.  So, choose one of the three options that suits you the most. But first of all, we need to generate the source for our meta tables, which is a database within the data catalog.

### Creating data catalog database

Sign in again to the AWS Management Console and open the AWS Glue Data Catalog.

![Create a database](/images/athena/32_1_Create_a_database.png)

Choose “Add database”, enter a database name and finally click on the “Create database” button. In the AWS Glue data catalog, the database has now been successfully created.

![Databases](/images/athena/03_03_AWS_Glue_database_list.png)

There exist several options to create a data catalog table in AWS Athena:

- AWS Glue Table Wizard
- AWS Glue Crawler
- AWS Athena DDL Statement

For the purpose of this workshop we will concentrate on using the _Table Wizard_ approach. For the other approaches you will find example steps at the end of this chapters as a reference - in section _Appendix_. Whichever method you choose. Table Wizard offers the easiest way to create tables in the AWS Glue data catalog.


### Creating data catalog table using "Table Wizard"

Just choose “Table” from the left-side menu and follow the instructions. The following screenshots give a small impression of how the creation of a simple CSV table could look like. Give the table the very same name as the file name, except for the _.csv_

![Table Wizard](/images/athena/32_3_Table_Wizard.png)


After specifing a table name you have to add the schema, add the nine rows of the table as shown below.


![Add schema entry](/images/athena/03_04_adding_schema_to_table.png)

Finish the wizard. As a result, you have a new table in the previously created database. If you go back to the tables' list in AWS Glue and click
_Table Data_ for your table, you should see that _AWS Athena_ can query the table and display the table's content.




