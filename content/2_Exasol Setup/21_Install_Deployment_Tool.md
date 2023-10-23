---
title: "Exasol Deployment Tool" # MODIFY THIS TITLE
chapter: true
weight: 2 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES
---

<!-- MORE SUBMODULES CAN BE ADDED TO DIVIDE UP THE SETUP INTO SMALLER SECTIONS -->
<!-- COPY AND PASTE THIS SUBMODULE FILE, RENAME, AND CHANGE THE CONTENTS AS NECESSARY -->

# Exasol Deployment Tool

The deployment of an Exasol Database Cluster is a fully automated approach, where you specify installation attributes the deployment tool acts on.
It is nearly the same effort to configure a simple two-node cluster or a powerful 10-node cluster with so-called _StandBy-Nodes_ and _Access-Node_.



## Installing the Deployment Tool

Download and install the _Exasol Deployment Tool (c4)_:

	wget https://x-up.s3.amazonaws.com/releases/c4/linux/x86_64/latest/c4 -O c4

	sudo mv c4 /usr/bin
	
	sudo chmod +x /usr/bin/c4

Start the tool to check if it was installed correctly:

	c4

You should see a help page for the tool.


Before we can test the deployment of _c4_ in conjunction with _aws_ we need to create a deployment config file. Follow the steps
to create the configuration:

	mkdir ~/.ccc 

and check with 

	ls -al

for a successful creation of the directory.

Create a config file named _config_ in the previously created directory as follows:

	CCC_USER_EMAIL=<your email address>
	CCC_PLAY_ACCESS_NODE=false
	CCC_PLAY_ADMIN_PASSWORD=<admin password of your choice>
	CCC_PLAY_DB_PASSWORD=<a DB password of your choice>
	CCC_USER_PASSWORD=<a user password of your choice>
	CCC_AWS_PROFILE=default
	CCC_AWS_REGION=<your desired AWS region>
	CCC_AWS_KEY_PAIR=<name of your key pair>
	CCC_AWS_KEY_PAIR_FILE=<filename of your key pair>
	CCC_PLAY_DB_PARAMS='-tlsConnectionsOnly=0 -forceProtocolEncryption=0'
	CCC_PLAY_LICENSE=@license:v8-byol

There are more options available for this config files, however we do not need to consider for the time being. If you are interested
in further options, have a look at

[Advanced Deployment](https://docs.exasol.com/db/latest/administration/aws/installation/advanced_deployment.htm?Highlight=deploy%20aws)
	
or

[Configure c4 for AWS](https://docs.exasol.com/db/latest/administration/aws/c4/c4_configure.htm)
	
for some more parameters. However, the entire set of possible parameters is too big to present here and is mostly intended for
the developers to create the deplyoment templates.

Before we continue, check if you have set all parameters correctly:

	c4 config
	
you should see a result similar to the one below:

	CCC_AWS_KEY_PAIR=AWS_Modernization_Workshop
	CCC_AWS_KEY_PAIR_FILE=AWS_Modernization_Workshop.pem
	CCC_AWS_PROFILE=default
	CCC_AWS_REGION=eu-central-1
	CCC_PLAY_ACCESS_NODE=false
	CCC_PLAY_ADMIN_PASSWORD=simple\*admin\*password
	CCC_PLAY_DB_PASSWORD=simple\*db\*password
	CCC_PLAY_LICENSE=@license:v8-byol
	CCC_USER_EMAIL=xxx.yyy@zzz.aa
	CCC_PLAY_DB_PARAMS='-tlsConnectionsOnly=0 -forceProtocolEncryption=0'
	CCC_USER_PASSWORD=simple\*user\*password

{{% notice info %}}	
For this workshop, please do <b>not</b> add, change or remove settings to the config file, where not advised to do so.
</br></br>
This configuration automatically installs a license with no expiration date and allows a reasonable number of nodes in a cluster. However, the license
restricts the amount of data stored in the entire cluster to 10Gbytes of raw data. It is comparable to the license of the Exasol image for Docker.
{{% /notice %}}


Next, we need to check the previous steps with

	c4 aws diag 
	
You should receive a response similar to the one shown below:

	OK aws tools are installed
	OK aws version 1.16+
	OK aws tools credentials are set
	OK aws tools credentials are correct
	OK exasol aws account is accessible
	OK Private AWS SSH access key file found
	OK CCC_USER_EMAIL set to '<your email ddress>'


<!-- ![Configuring the c4 Deployment Tool](/images/exasol/01_03_Configure_c4_aws.png) -->

{{% notice warning %}}
Continue to the next step if, and <b>only</b> if all steps show [OK], otherwise the following steps will fail. Try to resolve the problems and check the settings from the previous steps. Typical problems reside around your Amazon key /secret settings and the location of your private key for ssh.
{{% /notice %}}

