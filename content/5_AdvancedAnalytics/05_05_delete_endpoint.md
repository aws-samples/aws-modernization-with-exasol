---
title: "Delete Sagemaker Endpoint"
chapter: true
weight: 6
---

### Delete Endpoint

It is **important** to **delete** the endpoint created, when you are finished with your predictions job. Otherwise, the endpoint will continue to be charged. You can use the following SQL command to delete the endpoint and associated resources:

	EXECUTE SCRIPT IDA."SME_DELETE_SAGEMAKER_AUTOPILOT_ENDPOINT"(
 		'<ENDPOINT_NAME>', 
  	 	'<AWS_CONNECTION_NAME>', 
  		'<AWS_REGION>'
 	); 
 
 You can double check with the following awscli command:
 
 	aws sagemaker list-endpoints
	
or in case of Multi-Factor-Authentication enabled:

	aws --profile <your profile from ~/.aws/credentials> sagemaker list-endpoints

 
 
{{% notice warning %}}
Please note, that by the execution of the deletion SQL command, the predicted UDF script will not be deleted and will not be able to run until the endpoint is deployed again.
{{% /notice %}}