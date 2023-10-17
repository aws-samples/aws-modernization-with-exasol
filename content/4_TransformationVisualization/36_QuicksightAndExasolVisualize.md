---
title: "Analyze & Visualize your Datasets"
chapter: true
weight: 4
---

# Analyze and Visualize your Dataset

To create an analysis from the newly created _V_SIMPLE_SALES_ dataset navigate to the _Datasets_ page. Locate the _V_SIMPLE_SALES_ dataset and click on the three dots and select "Create analysis".

![QS_create_analysis](/images/quicksight/15_QS_create_analysis.PNG)

Once you click on "Create analysis", QuickSight will redirect you to a new page, where you will have to choose what sheet you want to create. 
Choose the "Interactive sheet" option and click "Create". 

![QS_create_sheet](/images/quicksight/16_QS_create_sheet.PNG)


For this tutorial, as we start, we will query over the entire data set, "leaving date and time out of the equation." In principal, using date and/or time is not different from what we will prepare now.

First select _Pivot Table_ visual from the icons menu in the lower left corner, then select _area_, _city_name_ _PRICE_
from the list. You will see that QuickSight is assigning dimensional data to the rows section and metrics to the values section. Click in the upper right corner
onto the three vertical dots and select _Show Subtotals for Rows_ and _Show Totals for Rows_.


![First Query](/images/quicksight/16a_QS_create_sheet.png)


Whenever you add or remove a field from the selection list, the view will update itself automatically, as long as the view is selected. Perform a mouse click 
outside of the active pane to deselect the active view.


{{% notice info %}}
If you wonder for the slower than expected query response time, please remember that the _CITIES_ table is residing as a textual file in a S3 bucket and
not in the database itself. Querying this table requires an additional overhead, compared to querying a table stored in the database.
{{% /notice %}}


Again, select the same fields as before and click and the left side on _Insights_. QuickSight will take a few moments and offer you adequate
first analytical queries based on the selected fields.

![Insights](/images/quicksight/16b_QS_insights.png)

If you hover with the mouse over the suggestions a "plus" sign appears. Press it to add this suggestion to your canvas.

![Insights](/images/quicksight/16c_QS_insights.png)


Finally, select the new visual which shows the result of your selected _Insights_ suggestion. Click on the left side into filters and then
_Add Filter_. Select the _area_short_ field and fill the form as shown below:

![Insights](/images/quicksight/16d_QS_filter.png)

You will see that the result of the _Insights_ visual will change and adapt to the select area. The way we created this filter was that the filter only
influences this single visual. Let's change this to _All Visuals of this Dataset_. Apply the filter again and all visuals will adapt the results accordingly.
Also, each visual now offers a _funnel icon_ which represents one or more filters:


![Insights](/images/quicksight/16e_QS_funnel_for_filter.png)

Also, in the filters menu you can place the filter onto the canvas, so it is visble in the future dashboard att all times.

Each visual, when selected, can be re-sized or moved freely around for an individual layout. Also, you can change the type of visualization at any time. Try it yourself.

 
We want to extend the dashboard with the _ARTICLES_ dimension. Therefore we need to modify our view on the database. Execute the following SQL
statement on the database to modify our view:

	CREATE OR REPLACE VIEW V_SIMPLE_SALES AS( 
		SELECT 	C."city_id",
       			C."country_code",
       	 		C."city_name",
       	 		C."area",
       	 		C."area_short",
       	 		S."PRICE",
       	 		A."PRODUCT_GROUP",
       	 		A."PRODUCT_CLASS",
       	 		A."DESCRIPTION",
       	 		SP."AMOUNT"

		FROM VS_ATHENA_WORKSHOP."cities" C JOIN 
		     RETAIL.MARKETS M          ON C."city_id" = M.CITY_ID JOIN 
			 RETAIL.SALES S            ON S.MARKET_ID = M.MARKET_ID JOIN 
			 RETAIL.SALES_POSITIONS SP ON S.SALES_ID = SP.SALES_ID JOIN 
			 ARTICLE A                 ON SP.ARTICLE_ID = A.ARTICLE_ID
			 

If you are wondering why we added two tables instead of one, the _RETAIL.SALES_POSITIONS_ table acts as a linking table to the _RETAIL.ARTICLE_ table.
In case you decide to query the _CITIES_ table direct from the database instead from the virtual schema, execute the following SQL statement:

	CREATE OR REPLACE VIEW V_SIMPLE_SALES AS( 
		SELECT 	C."city_id",
       			C."country_code",
       	 		C."city_name",
       	 		C."area",
       	 		C."area_short",
       	 		S."PRICE",
       	 		A."PRODUCT_GROUP",
       	 		A."PRODUCT_CLASS",
       	 		A."DESCRIPTION",
       	 		SP."AMOUNT"

		FROM RETAIL.CITIES C JOIN 
		     RETAIL.MARKETS M          ON C."city_id" = M.CITY_ID JOIN 
			 RETAIL.SALES S            ON S.MARKET_ID = M.MARKET_ID JOIN 
			 RETAIL.SALES_POSITIONS SP ON S.SALES_ID = SP.SALES_ID JOIN 
			 ARTICLE A                 ON SP.ARTICLE_ID = A.ARTICLE_ID
			 

Both views will produce the same results, the second view should show a much improved query response time.


Go back to QuickSight in our _Analysis_ and click onto the pencil right next to our dataset name we are working on. On the pop-up press the
the dots and click _Edit_.

![Edit the Dataset](/images/quicksight/40_QS_edit_dataset.png)

You will see that the fields list has been augmented as our underlying view has been modified. Press _Save and Publish_ and return to our Analysis.
Once again, this is exactly the reason why we assign dataset definitions to the database side, not to the client side - keep this in mind as a general rule 
when designing Data Warehouses.

Now select a _Heatmap_ as a new visual and select _PRODUCT_GROUP_ for the _Group By_ and _PRICE_ and _AMOUNT_ for the
size and color metrics. Re-organize the visuals on the canvas and save it again as a new version. However, if you want to stay with the current version,
analysis has been autosaved - nothing to do. Click on the _Share_ icon in the upper right corner to publish our Analysis as a Dashboard. It should
look similar to the one below:

![Insights](/images/quicksight/16f_QS_final_dashboard.png)


Congratulations, you have created your first anaylsis in AWS QuickSight with different visualizations, filters and insights. You should see the benefit
from defining datasets on the database instead of defining them within the client tool, regardless of the vendor. 
While we defined the _CITIES_ table as a remote one using AWS Athena, we are using the _CITIES_ table on the database when we augmented our 
analysis. Feel free to create other visuals based on our simple sales model. If you have finished your work with AWS QuickSight let's continue to the next
section and see how we can use an autmated _Machine Learning_ approach with AWS SageMaker.


{{% notice warning%}}
Do not forget to unsubscribe from the AWS QuickSight service, otherwise you will be charged for the service.
{{% /notice %}}