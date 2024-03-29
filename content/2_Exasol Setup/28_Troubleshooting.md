---
title: "Troubleshooting" # MODIFY THIS TITLE
chapter: true
weight: 8 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES
---

## Troubleshooting

When working with the c4 tool or the aws command line interface you may receive a message that your security token is not valid anymore. The easiest fix for this is to issue the following to commands:

	rm ~/.aws/credentials
	aws configure

You should be able to use the **aws** cli and **c4** tool again.

In case you have enabled Multi-Factor-Authentication (MFA), the aws command line interface will ask you to provide a one-time security token from time-to-time, generated by the Authenticator application of your choice when you activated MFA.

If the problems persist, try executing your _aws_ command with the following parameter:

	aws <commands> <parameters> --profile default-mfa
	
The name of the profile can be identified with

	less ~/.aws/credentials	
	
IF AWS is complaining about a missing token, you can requets a new token with

	c4 aws token -f
	
Have your _authenticator_ device / app ready.


