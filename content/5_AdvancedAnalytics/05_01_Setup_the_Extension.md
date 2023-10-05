---
title: "Setup the SageMaker Extension"
chapter: true
weight: 1
---

## Setup the SageMaker Extension

### Installation

The SageMaker Extension for Exasol consists of two parts:

<ol>
	<li> A Python Package, which deploys scripts to the database</li>
	<li> A container file which interfaces with the SageMaker Autopilot</li>
</ol>
	
In order to use the <i>Exasol SageMaker Extension</i>, it is necessary to install the python package of the extension , upload the given <i>SageMaker Extension Container</i> into BucketFS and then activate the uploaded container in Exasol. These pre-packaged releases are available in the Releases of the Github repository.

Before starting the installation, we need to discover some settings from the database. Start a terminal shell on the first cluster node with

	c4 connect -t1/cos
	
and let the database display its settings for the so-called <i>Bucket File System (BucketFS)</i>. The BucketFS is a specific location within the database
for storing supporting files, e.g additional packages for scripting languages (Python, Java, R), extensions or 3rd party jdbc drivers:

	confd_client -c bucketfs_info -a 'bucketfs_name: bfsdefault'
	
The command should return an output similar to the one shown below:
	
![BucketFS Info](/images/exasol/05_02_bucketfs_info.png)

We note the https port for the <i>bfsdefault</i> bucket file system, in our case it is port <i>2581</i> (https_port). Therefore, we use <i>https://</i>
for all future calls to the BucketFS. If the attribute <i>http_port</i> is set we use <i>http://</i>. If both attributes for the port number are set, you have the
choice, which one you want to use. Additionally, we create a new bucket named <i>container</i>:
	
	confd_client -c bucket_add -a '{ bucket_name: container, bucketfs_name: bfsdefault, public: False, read_password: <select_a_read_password>, write_password: <select_a_write_password> }'
		
It is ok, that read and write passwords are the same. See below, how the <i>bucketfs_info</i> now looks alike:

![BucketFS with container bucket](/images/exasol/05_03_bucketfs_info_with_bucket_container.png)

Because the attribute <i>public</i> is set to <i>false</i> you have to specify user and password in every call we do in the next steps:

	https://r:<your selected password>@<server_ip_address>:<portnumer>/<bucket_name> #Read access
	
	or
	
	https://w:<your selected password>@<server_ip_address>:<portnumer>/<bucket_name> # Write access




Note that your chosen passwords are stored encrypted. Now, we need to download the container file and upload it to the freshly created bucket. You will
find it 

	https://github.com/exasol/sagemaker-extension/releases/download/0.5.0/exasol_sagemaker_extension_container-release-CYEVORMGO3X5JZJZTXFLS23FZYKIKDG7MVNUSSJK6FUST5WRPZUQ.tar.gz

For ease of use, rename the downloaded file to 

	exasol_sagemaker_extension_container-release.tar.gz

The sagemaker-extension python package provides a command line tool to deploy the Lua and UDF scripts to the database. It is installed as follows on
the Exasol Deployment Server (The server we used to deploy an Exasol database cluster in Module 2)

	pip install https://github.com/exasol/sagemaker-extension/releases/download/0.5.0/exasol_sagemaker_extension-0.5.0-py3-none-any.whl
	
The required libraries and dependencies of the Exasol SageMaker Extension are distributed into Exasol by uploading the pre-built Exasol SageMaker-Extension Language Container to the BucketFS. You can upload it with any http(s) client that can send files via HTTP-Put requests. For more details about accessing files in BucketFS, please check (optional)

	https://docs.exasol.com/db/latest/database_concepts/bucketfs/file_access.htm

	
The following example uploads the pre-built SageMaker-Extension Container to BucketFS with the curl command, a http(s) client:

	curl -vX PUT -T "exasol_sagemaker_extension_container-release.tar.gz" 
    	"https://w:<your_previously_created_write_password>@<ip address of a cluster node>:<identified_port_number>/container/exasol_sagemaker_extension_container-release.tar.gz"


You need to activate the uploaded container for your session or the whole system through adjusting parameter SCRIPT_LANGUAGES. Please keep in mind, that the name of the language alias is assumed to be <i>PYTHON3_SME</i> in the SageMaker-Extension. For more details about adding new packages to existing script languages check the following web page:

	https://docs.exasol.com/db/latest/database_concepts/udf_scripts/adding_new_packages_script_languages.htm

The following example query activates the container system-wide, which allows us to open several query windows with different sessions:

	ALTER SYSTEM SET SCRIPT_LANGUAGES=\
	'PYTHON3_SME=localzmq+protobuf:///bfsdefault/container/exasol_sagemaker_extension_container-release/?\
        lang=python#buckets/bfsdefault/container/exasol_sagemaker_extension_container-release/\
        exaudf/exaudfclient_py3 PYTHON3=builtin_python3 PYTHON=builtin_python R=builtin_r JAVA=builtin_java'
		
We have finished the setup of the SageMaker extension for Exasol. Let's continue with the deployment.