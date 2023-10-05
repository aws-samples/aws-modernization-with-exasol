---
title: "Operating the Database" # MODIFY THIS TITLE
chapter: true
weight: 4 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES
---

## Operating the Database

As this course is meant to be performed in a self-paced manner, you might want to start or stop the Exasol cluster in order to avoid unnecessary costs – controlling the database cluster is to be performed from the deployment host. To stop the cluster, issue the following command:

	c4 down <play_id>

To start the cluster again:

	c4 up <play_id>

 
You can retrieve the <i>play_id</i> with

	c4 ps
	
as shown below in the 2nd column


![C4 process list](/images/exasol/01_04_c4_ps_list.png)
