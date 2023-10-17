---
title: "Connecting to the Cluster" # MODIFY THIS TITLE
chapter: true
weight: 5 # MODIFY THIS VALUE TO REFLECT THE ORDERING OF THE MODULES
---

## Connecting to the Cluster

There are many SQL clients available you can use to establish a connection to the Exasol database. We will use DBVisualizer in this workshop, which is available for Windows, Linux and macOS. There is a free version available which suits our requirements. You can download a version of DBVisualizer at:

	
[Download DBVisualizer Trial](https://www.dbvis.com/download/)


Start the application and create a new database connection to Exasol. Enter the public IP address or the TCP/IPv4 DNS name for the “Database Server”, leave the “Database Port” as given (by default it is 8563). The username is “sys”, and the password is the one you have provided in the “c4” config files with the key “CCC_PLAY_DB_PASSWORD”.  Most likely, the first attempt will produce an error, stating that it cannot connect – see screenshot below:

![Error message while connectiong to Exasol](/images/exasol/01_05_error_connection_to_db.png)

The error message instructs you to change the hostname to a version with a lengthy fingerprint. Optionally, copy the “fingerprint” string after “your server's IP address or fully qualified hostname” followed by a "/"; or paste it into the “Certificate Fingerprint” field and try to connect again (without the __:__ and the port number, which both is also not part of the fingerprint). 

![Adding fingerprint to connection settings](/images/exasol/01_06_adding_fingerprint.png)

{{% notice info %}}
We receive this error due to a self signed certificate, where the database client tool cannot check the validity / chain of trust of the certificate. Some tools
allow the usage of the so-called fingerprint, other tools allow to disable the certicicate's check. Consult the documentation of your favourite database client
tool how it deals with self-signed certificates.
{{% /notice %}}
  

You should be able to connect now…

![Successful Connection](/images/exasol/01_07_successful_connection.png)

 

Additionally, you will see on in the left pane of DBVisualizer a tree structure outlining the objects / object groups of the database e.g. Schemas, Virtual Schemas, System Schemas or DBA.

![Error message while connectiongcto Exasol](/images/exasol/01_08_dbvisualizer_browser.png)

It should look similar within your SQL client of choice. Great, you have now a working environment of the Exasol Analytical Database.