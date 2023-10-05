---
title: "Create new Datasets"
chapter: true
weight: 3
---

# Create new Datasets

Firstly, navigate to AWS QuickSight via the AWS Management Console. Do so by going to the serach bar on the upper right of the AWS console screen. Type "QuickSight" and select the service.

![QS_Start](/images/quicksight/1_QS_start.PNG)

If you are accessing Quicksight for the first time, you will need to provide an email address to provision a user in the QuickSight Account. This user will have the necessary permissions to access and analyze data within QuickSight. 

![QS_Provisioned_User](/images/quicksight/2_QS_provision_user.PNG)

After successfully logging in, you will be redirected to the QuickSight main page. 
Here, you will find some sample datasets and analyses that are already created by default within QuickSight. These sample analyses are meant to provide you with a glimpse of QuickSight's capabilities.

![QS_first_page](/images/quicksight/3_QS_first_page.PNG)

To utilize data from your Exasol database for a new analysis or dashboard, you need to create a new dataset. On the left pane, select "Datasets". 

![QS_left_pane_datasets](/images/quicksight/4_QS_left_pane_select_datasets.PNG)

A list of existing datasets will be presented.

![QS_list_of_datasets](/images/quicksight/5_QS_list_of_datasets.PNG)

Click on the "New dataset" button located in the upper right corner of the Datasets page. This action will initiate the process of setting up a new dataset using the Exasol database as a source.

Select the "Exasol" data source option. QuickSight provides native integration with Exasol, enabling you to connect directly to your Exasol database without any complex configrations. 

![QS_select_exasol_source](/images/quicksight/6_QS_select_exasol.PNG)

Fill in the required fields to establish a connection to your Exasol database. This includes providing the necessary connection details such as server address, port, and login credentials.
After entering the information, validate the connection to ensure it is established successfully. For the purpose of this workshop, dissable (untick) the "Enable SSL" box. Once the validation is successfull, click on "Create data source" to proceed.

![QS_exasol_connection](/images/quicksight/7_QS_establish_connection.PNG)

With the Exasol data source successfully connected, you will see a list of available schemas and tables from your Exasol database. From the schema dropdown list choose the appropriate schema that contains the tables you want to use for your dashboard. In this example we will use the "AWS_WORKSHOP" schema.

After selecting the appropriate schema (AWS_WORKSHOP), choose the table "SALES" that holds the SALES data we will analyze. Click on "Select" to proceed.

![QS_schema_and_table](/images/quicksight/8_QS_schema_table.PNG)

Select the "Directly query your data" option to build the dataset using a direct query. This option allows you to leverage the power of Exasol's processing capabilities directly for your analyses.

![QS_select_direct_query](/images/quicksight/9_QS_directly_query.PNG)

Clicking on "Edit/Preview Data",  this action will redirect us to a new window where you can do several things: preview table data, rename columns and descriptions, change data types, add filters, exclude fields, create calculated fields, and add parameters to your dataset.

![QS_preview_edit_data](/images/quicksight/10_preview_edit_data.PNG)

Once you have made the desired changes, click on "SAVE & PUBLISH" in the upper right corner.

After saving the modifications, you will see your new dataset, named "SALES," listed on the "Datasets" page.

![QS_new_dataset](/images/quicksight/11_QS_the_new_dataset.PNG)

For this workshop, we will create another dataset that will be a custom SQL. The second dataset will contain enriched SALES data with the DIM_COUNTRY data. 

Repeat the above steps until the step where you choose the Schema/Table of the Dataset, then click on "Use Custom SQL": 

![QS_custom_sql](/images/quicksight/12_QS_custom_sql.PNG)

In the next step, plaste the following SQL statement:

WITH sales_with_random_country AS (
SELECT
sales.*
, CAST(RANDOM(1,20) AS INT) AS random_country_id
FROM AWS_WORKSHOP.SALES sales
WHERE SALES_DATE BETWEEN '2022-01-01' AND '2022-01-07'
LIMIT 10000
)
SELECT
*
FROM sales_with_random_country sales
INNER JOIN AWS_WORKSHOP.DIM_COUNTRY country
ON sales.random_country_id = country.country_id
;

{{% notice warning %}}
Since the SALES and DIM_COUNTRY tables do not contain any columns that would enable joining them, we have "created" a new column named "random_country_id" with values from 1 to 246 to make joining the tables possible.
{{% /notice %}}

Click on "Edit/Preview data"

![QS_custom_query](/images/quicksight/13_QS_custom_query.PNG)


Change the Schema to "AWS_WORKSHOP" and click on "Apply". The dataset should be previewed. Note that now our dataset has been enriched by the DIM_COUNTRY columns.

![QS_data_preview](/images/quicksight/14_QS_data_preview.PNG)

Click on "SAVE & PUBLISH". After the dataset is saved, click on "CANCEL" to return to the "Datasets" page, where you will see the new dataset added to the list of available datasets. 

CONGRATULATIONS! You have now created two new datasets from your Exasol data! 

In the next chapter we will be using these two Datasets to create visualizations.


