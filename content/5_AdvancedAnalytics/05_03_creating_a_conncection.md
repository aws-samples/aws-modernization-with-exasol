---
title: "Creating Connections to AWS"
chapter: true
weight: 3 
---

## Create Connection to AWS


In order to work work with AWS SageMaker you need to provide your **own** S3 bucket. Do **not** attempt to use the public S3 Bucket _s3-aws-modernization-workshop_ we are providing for the various content of this workshop it is in a _read-only_ mode. 

The Exasol SageMaker Extension needs to connect to AWS SageMaker and your AWS S3 bucket. For that, it needs AWS credentials that has AWS Sagemaker Execution permissions. The required credentials are AWS Access Key, here is the link on how to create anAWS Access Key in case you should not have one:

[Creating Amazon AWS Access Key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?icmpid=docs_iam_console#Using_CreateAccessKey)

{{% notice info %}}
In case you are not following the steps in the given order, you had to create an AWS Access Key in Module 2, too. It is the same key, we are using.
{{% /notice %}}

In order for the SageMaker-Extension to use the Access Key, you need to create an Exasol _CONNECTION_ object which securely stores your keys. 
For more information about Exasol connections, please have a look at:

[Creating a Connection](https://docs.exasol.com/db/latest/sql/create_connection.htm)


The Exasol _connection_ object object is created as follows:

	CREATE OR REPLACE  CONNECTION <your S3 bucket name>
    TO 'https://<your S3 bucket name>.s3-<region of your S3 bucket.amazonaws.com/'
    USER '<your aws key id>'
    IDENTIFIED BY '<your aws access key>'