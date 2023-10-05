---
title: "CleanUp your Lab Environment" # MODIFY THIS TITLE IF APPLICABLE
chapter: true
weight: 4 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES IF APPLICABLE
---

## Clean-Up


Congratulations, you have walked through a amazing workshop, successfully! Now, at the end you may want to cleanup the workshop environment. First, we need to terminate the Exasol Database cluster:

	c4 rm <play_id>

Again, if you can retrieve the <play_id> with

	c4 ps

The cluster member (nodes) instance will be terminated and shown accordingly as terminated in the EC2 instances overview. Despite the fact, that these instances are terminated, it may some time to disappear from the list.

If you leveraged one of your existing instances and you want to keep it, nothing needs to be done. The aws command line interface and the c4 deployment tool are small and do not harm your instance at all. Otherwise, set the instance status to terminated by clicking the menu item Terminate Instance. Again, it will take some time until the terminated instance will disappear from your list.

The ETL jobs can be deleted from the jobs overview pages by selecting the jobs and “Delete job(s) from the “Action” button:

![Glue Studio showing Jobs](/images/exasol/06_02_Glue_studio_with_jobs.png)

Done!
