---
title: "Deployment of the Database Cluster" # MODIFY THIS TITLE
chapter: true
weight: 3 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES
---

## Deployment of the Database Cluster

Exasol is an <b>M</b>assive <b>P</b>arallel <b>P</b>rocessing (MPP) System, In-Memory database for analytical use cases – therefore we will install a multi-node system, for the purpose of this workshop, consisting of two nodes. With such a deployment you can experience parallelism, too. Also, we do not deploy a so-called <i>Access Node</i> for the Exasol cluster – which is responsible for accepting REST API calls – in this workshop we do not want to connect to the cluster by REST API.

The deployment tool needs several parameters. The first is <i>aws</i> which instructs the deployment tool to run aws commands. The parameter <i>play</i> indicates a new deployment. The number of desired nodes is specified by the parameter “N” and the parameter “T” indicates the Exasol (AWS Cloud Formation) template to be used for the deployment. With every new version available, Exasol adds a new corresponding template to AWS. To check which is the latest version number visit the following web page:

[Release Notes - Latest Version Numbers](https://docs.exasol.com/db/latest/release_notes.htm)

The required template for our deployment is constructed as:

	@exasol-<Desired Exasol-Version as x.y.z>

Start the deployment with the following command, here with version <i>8.22.0</i>:

	c4 aws play -N2 -T @exasol-8.22.0

after a few moments check if the cluster is up and running:

	c4 ps 

You should see a list like shown below. Check that the two nodes show stage “d”, otherwise the database is not ready for a connection and will not accept any incoming request. It is normal when the deployment takes more than 5 minutes, as several items needs to be fulfilled in the background. However, it should not take longer than 15 minutes. There is no direct relationship between time required for the deployment and the number of cluster nodes.


![C4 process list](/images/exasol/01_04_c4_ps_list.png)


Use a <i>public</i> IP address of one of the cluster members for the connection from your SQL client to the database.

{{% notice info %}}

Please keep in mind, that this cluster does not exist anymore and therefore the listed TCP/IP addresses are not valid anymore for this environment. 
</br></br>
In a productive environment with many cluster nodes,  a load balancer is responsible to distribute client connections equally amongst the cluster nodes. There exists no specific cluster node which accepts client requests and distribute it to the cluster itself.
{{% /notice %}}
