---
title: "Creating Connections to AWS"
chapter: true
weight: 3 
---

## Create Connection to AWS


In order to work work with AWS SageMaker you need to provide your <b>own</b> S3 bucket. Do <b>not</b> attempt to use the public S3 Bucket <i>s3-aws-modernization-workshop</i> we are providing for the various content of this workshop it is in a <i>read-only</i> mode. 

The Exasol SageMaker Extension needs to connect to AWS SageMaker and your AWS S3 bucket. For that, it needs AWS credentials that has AWS Sagemaker Execution permissions. The required credentials are AWS Access Key, here is the link on how to create anAWS Access Key in case you should not have one:

[Creating Amazon AWS Access Key](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?icmpid=docs_iam_console#Using_CreateAccessKey)

{{% notice info %}}
In case you are not following the steps in the given order, you had to create an AWS Access Key in Module 2, too. It is the same key, we are using.
{{% /notice %}}

In order for the SageMaker-Extension to use the Access Key, you need to create an Exasol <i>CONNECTION</i> object which securely stores your keys. 
For more information about Exasol connections, please have a look at:

[Creating a Connection](https://docs.exasol.com/db/latest/sql/create_connection.htm)


The Exasol <i>connection</i> object object is created as follows:

	CREATE OR REPLACE  CONNECTION <your S3 bucket name>
    TO 'https://<your S3 bucket name>.s3-<region of your S3 bucket.amazonaws.com/'
    USER '<your aws key id>'
    IDENTIFIED BY '<your aws access key>'