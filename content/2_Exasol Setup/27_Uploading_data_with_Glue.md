---
title: "Uploading Data with AWS Glue" # MODIFY THIS TITLE
chapter: true
weight: 7 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES
---

## Uploading Data with AWS Glue (Optional Task)

AWS Glue is Amazons ETL Solution for **E**xtraction, **T**ransformation and **L**oad of data between different data instances, e.g. S3 Buckets or databases. It works serverless, so you have only to define the ETL job and Amazon AWS does the rest of the work for you. 

We need to grant AWS Glue some permissions in order to act on your behalf. Follow the steps at 

[Setting up IAM permisssions for AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/set-up-iam.html)
	
for the set up of the policies and roles required.


Also, before we can start to use AWS Glue, we need to deal with the Exasol connector, which is not in the default list for data sources or targets. To prepare for the Exasol AWS Glue Connector follow the steps outlined on Exasol’s Github repository

[Exasol AWS Glue Connector User Guide](https://github.com/exasol/glue-connector/blob/main/doc/user_guide/user_guide.md)
[Exasol AWS Glue Connector on AWS](https://aws.amazon.com/marketplace/pp/prodview-2mlebkenfsg7o)


until the step _Creating a Job_, which we will do differently.

We are aiming for uploading the _CITIES_ table into our database. Before we start the design of the ETL job, we will empty the table _CITIES_ with the help of your favor SQL client:

	TRUNCATE TABLE RETAIL.CITIES;


Now, go to the AWS Glue homepage:

[Amazon AWS Glue](https://eu-central-1.console.aws.amazon.com/glue/home?region=eu-central-1#/v2/getting-started)

which should look like the screenshot below:

![AWS Glue Homepage](/images/exasol/01_10_aws_glue_homepage.png)


In the left pane click _Visual ETL_, and in the following page click _Create_ with the option _Visual with a blank canvas_ – see the screenshot below:

![C4 pAWS Glue Studio](/images/exasol/01_11_aws_glue_studio.png)

  
You will get into the Visual editor for creating an ETL job – with a clean canvas for designing out ETL job and a selection window for adding the first node.

![Default Canvas](/images/exasol/01_12_glue_default_canvas.png)

First, rename this ETL job and give it meaningful name e.g. S3_2_CITIES. Then select from the _ Add Nodes_ window _Amazon S3 (source)_, it is the upper left button. 

As a result, there should be only the _S3 Bucket (source)_. Let’s start configuring the source node for our _CITIES_
Table. Select the node and within the right _Settings_ pane, press “Browse S3”, select your S3 Bucket containing all source files and select “CITIES.csv”. Select CSV for the data format, uncheck _First line of source file contains column header_, press the _Infer schema_ button and leave all the other options as displayed. Your form should look similar to the screenshot below:

![S3 Source Settings](/images/exasol/01_13_glue_s3_source_settings.png)
  

Now, click on  _Output Schema_ on the top middle tab - you should see a column listing like below:

![Output Schema Preview - 2](/images/exasol/01_16_output_schema_2.png)

 
Press “Edit” in the upper right corner and enter the correct header names and Data types in the form as outlined below: 

![Final Output Schema](/images/exasol/01_17_output_schema_3.png)
 
{{% notice info %}}
Enter “_AREA_SHORT_” before “_AREA_, but keep the order! Otherwise, Glue will present you a _duplicate_ error in the form.
{{% /notice %}}

We have finished the source part of our ETL job. Let’s create the target part. In the canvas, press in the upper left corner the white plus sign. A new selection box opens and offers you a lot of different transformation options. Select the “Data” tab, scroll down to the “targets” section and select the _Exasol Connector for AWS Glue_. 


~![Selecting Target - Step 1](/images/exasol/01_18_select_target_1.png#float-start)
~![Selecting Target - Step 2](/images/exasol/01_19_select_target_2.png#float-end)

Your canvas should look now like the below screenshot:

![Desired Canvas](/images/exasol/01_20_desired_canvas.png)


Next, we need to configure the database settings. The Exasol connector is the end point of our ETL job, therefore we do not need to set an output schema or preview data. In the right pane set the connection to the one you have created during setup of the prerequisites for the _Exasol AWS Glue Connector_. Furthermore, we need to define some options to make the node working. _Press add new option_ and enter the following options as outlined in the screenshot below. Also, set the _Node Parent_, which in this case is our _S3 Source Bucket_.

Be aware: awsAccessKeyId, awsSecretAccessKey, S3Bucket are your individual settings. The password is the CCC_PLAY_DB_PASSWORD you have specified in “~/.ccc/config” and the IP address and the fingerprint is individual to your deployment. Here you must specify the host as:

	jdbc:exa:<IP Address>/<Fingerprint>
	
![Target Settings](/images/exasol/01_21_exasol_target_settings.png)

Finally, we need to entitle the ETL job to act on our behalf. Go to _Job Details_ and under <I>IAM Role_ select the role you have created in the prerequistes for AWS Glue:
	
![Setting the IAM Role](/images/exasol/01_23_aws_glue_setting_iam_role.png)

We have now a simple data upload job defined. Click in the upper row of the Visual Editor “Runs” and the press the orange button “Run”. AWS Glue now starts building up the ETL process and eventually uploads the data into the _CITIES_ table in our database. You will see some runtime statistics as well as the log.

![Run Details](/images/exasol/01_22_run_details.png)

Finally, we are done with Module 1, including the optional AWS Glue data upload.
