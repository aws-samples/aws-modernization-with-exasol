---
title: "Working with Exasol Cluster" # MODIFY THIS TITLE IF APPLICABLE
chapter: true
weight: 2
---

# Working with Exasol Cluster 

Now, we will take all required steps required to deploy and operate a Exasol Database Cluster with two nodes. We will start to work on the cluster
while fullfiling different tasks. See below for a description of tasks to ensure we have an operational cluster and capable to work with AWS services.

{{% notice info %}}
The examples and sample code provided in this workshop are intended to be consumed as instructional content. These will help you understand how various 
AWS services can be architected to build a solution while demonstrating best practices along the way. These examples are not intended for use in 
production environments. Also, the Exasol Database deployment strictly follows a simplified approach and does not follow best practices in certain
areas e.g., hardening a deployment.
{{% /notice %}}

## Overview of Required Steps

The successful deployment of an Exasol Database deployment includes several steps including basic tests, which we will fullfil by a 
not too complex SQL statement: 


- Install the Exasol Deployment Tool
- Deploy an Exasol two-node cluster environment
- Loading data into Exasol database natively-
- Testing the Deployment
- Loading data into Exasol database with AWS Glue (optionally)
- Troubleshooting (if required)
