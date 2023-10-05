---
title: "Prerequisites" # MODIFY THIS TITLE IF APPLICABLE
chapter: true
weight: 1 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES IF APPLICABLE
---

# Prerequisites

For a succcesful Exasol Cluster deployment and the following steps in workshop we have to fullfil certain requirements. Please finish all the prerequistes before moving on to the workshop itself.

## AWS Access Key


If not already done, we need to fulfill a few prerequisites before we can deploy an Exasol environment. Firstly, ensure that you have a valid Amazon AWS Access Key. If you do not have an Amazon AWS Access Key Access, find here instructions on how to create one:

	https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?icmpid=docs_iam_console#Using_CreateAccessKey
	
If you have configured Multi-Factor-Authentication with your AWS account, have your Authenticator device ready, e.g. your smartphone with a supported 
Authentictor app. Please be aware that when you have an account with <i>Multi Factor Authentication</i> enabled, you have to provide a <i>One Time Token</i>
on a regular basis, especially when you perform this workshop self-paced over a longer period of time.


## Data Sources and support content

We have placed all the required source data, scripts and SQL statements in a publicly available S3 Bucket named

	s3-aws-modernization-workshop
	
in the AWS region "<i>eu-central-1</i>". Please try, if you can access it:

[S3 Bucket for Workshop](https://s3.console.aws.amazon.com/s3/buckets/s3-aws-modernization-workshop?region=eu-central-1&tab=objects)

If you want to work with your own S3 Bucket, please copy the files from the public S3 bucket to your personal S3 bucket.



## Deployment Instance

Deploying an Exasol Analytics Database cluster environment requires a so-called <i>Deployment Server</i> from where you configure and initiate the deplyoment, as well as operate the cluster. This can be a new instance, <i>AWS Cloudshell</i> or an exsting instance you have. We want to avoid any kind of side-effects and opt for a new
AWS instance. When launching a new instance select Ubuntu for version 20.04.1. There exists an Amazon Machine Image (AMI) you can select which is <i>“Free tier eligible”</i>.  The instance type can be a  <i>“t2.micro”</i>. For the remaining settings, just go with the default values and create a key pair for login, if you do not have one in place already. Be sure to check “Allow SSH traffic from” if you want to use your own SSH capable terminal. The private key will be downloaded to your computer, automatically

![Creating Deployment Server](/images/exasol/01_01_Creating_Deployment_Server.png)


You should be able to connect to your new instance with the <b>ssh</b> terminal of your choice or
you connect to the instance with the AWS provided web interface by selecting your instance from the instance’s list and click connect.

![Connect to Deployment Server](/images/exasol/01_02_Connect_to_Deployment_Server.png)


Once the new instance is started, it is it is a good practice to update the system properly:

	sudo apt-get update && sudo apt-get dist-upgrade
	
This will take some minutes until the update process is completed.


## Install Amazon AWS command line interface (aws cli)

Next, we need to check for the Amazon AWS Command Line Interface. Execute 

	aws

If the aws cli is not installed on your instance you can install it according to the following instructions:

[Installing AWS CLI](https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-install.html)
	

If you are following the recommendations and use an Ubuntu Linux Distribution, you may install the AWS Command Line Interface with:

	sudo apt install awscli

After installing you need to configure the AWS Command Line Interface with:

	aws configure
	
# Next Steps

Continue with the next chapter "Deploying an Exasol Cluster".

