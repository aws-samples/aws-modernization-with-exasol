---
title: "Integrating Data Sources via Amazon Athena"
chapter: true
weight: 3
---

# Integrating Data Sources via Amazon Athena

Integrating data sources via Amazon Athena, to demonstrate the integration of Exasol with an AWS Data Lake.
We will set up a connection between Exasol and Amazon Athena in order to query data from regular files stored in an Amazon S3 bucket, as if they were part of an Exasol database.

## Learning Objectives

- We will introduce you to Exasol’s Virtual Schema concept and AWS Athena
- You’ll define AWS Glue Data Catalog or setup AWS Glue Crawler 
- You’ll get hands-on experience on Amazon Athena to query data from S3
- And you will set up an Exasol Virtual Schema pointing to Amazon Athena to make data in the Data Lake available in Exasol

{{% notice warning %}}
The examples and sample code provided in this workshop are intended to be consumed as instructional content. These will help you understand how various AWS services can be architected to build a solution while demonstrating best practices along the way. These examples are not intended for use in production environments.
{{% /notice %}}
