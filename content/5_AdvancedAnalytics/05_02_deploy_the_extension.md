---
title: "Deployment of the Sagemaker Extension"
chapter: true
weight: 2
---


## Deployment of the Extension

For our use case, we will use two database schemas, one for training, and one for testing. Create the schemas with the following SQL statements:

	CREATE SCHEMA CREDIT;
	
	CREATE SCHEMA CREDIT_PREDICTION;
	
	
The latter one we are using for storing the automatically generated _Predictor_ user defined function (UDF).

The installed SageMaker extension python package provides a command-line interface (CLI), enabling you to deploy all necessary Lua and UDF scripts into the
_CREDIT_ database schema. The command line is run from the Exasol deployment server as follows:

	python -m exasol_sagemaker_extension.deployment.deploy_cli
    	--host <IP address of 1st node of your database>
    	--port 8563
    	--user sys
    	--pass <your database password>
    	--schema CREDIT


After running this deployment command, you should be able to find all the required Lua and UDF scripts in the specified schema. To check this, you can run the following query:

	SELECT SCRIPT_NAME, 
    	   SCRIPT_TYPE 
		   
	FROM   SYS.EXA_ALL_SCRIPTS 
	
	WHERE  SCRIPT_SCHEMA='CREDIT'
	
	ORDER BY SCRIPT_TYPE ASC, SCRIPT_NAME
	
	
You should receive a result as shown below
		
![Installed Scripts for SageMaker Extension](/images/exasol/05_09_table_with_installed_extension_scripts.png)