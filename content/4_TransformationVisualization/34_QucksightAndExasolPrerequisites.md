---
title: "Prerequisites"
chapter: true
weight: 1
---

# Prerequisites

In case you are jumping directly to this chapter without doing the previous steps, please keep the following points in mind. If you have followed this tutorial
step by step then you are just fine and can continue with the next steps.

Before diving into QuickSight, a powerful data visualization tool, it is vital to meet the following prerequisites to guarantee a seamless and successful experience:

-    An active AWS Account: Ensure you have access to an Amazon Web Services (AWS) account, as QuickSight is an AWS service.

-    A running Exasol Database: QuickSight requires a functional Exasol database to connect and analyze data.

-    Database connection details (Host and Port): Gather the necessary connection information for your Exasol database, including the host address and port number.

-    Connection Credentials to the Exasol Database: Obtain the appropriate credentials (username and password) to establish a secure connection between Quicksight and your Exasol database.

-    A sample table with data: Prepare a sample table with data in your Exasol database to test and explore QuickSight's visualization capabilities.

By fulfilling these prerequisites, you'll be well-equipped to unleash the power of QuickSight and transform raw data into valuable insights for your business or analytical needs. Let's make sure everything is in place before we embark on this exciting journey!

{{% notice info %}}
AWS QuickSight allows two types of connections, unencrypted and encrypted ones. However, when using an encrypted connection, QuickSight cannot check self-signed certificates! There is simply no way to disable such a check, nor can you use so-called fingerprints. By default, Exasol Version 8 accepts TLS secured connections only, where self-signed certificates will be used if the customer does not specify an official certificate. However, for the purpose of this workshop (not dealing with certificates) we have deployed the Exasol database in a way that it accepts unencrypted connections. This is <b>not</b> recommended for a productive environment!
{{% /notice %}}