---
title: "Analyze & Visualize your Datasets"
chapter: true
weight: 4
---

# Analyze and Visualize your Datasets

To create a analysis from the newly created SALES dataset navigate to the "Datasets" page. Locate the "SALES" dataset and click on the three dots and select "Create analysis".

![QS_create_analysis](/images/quicksight/15_QS_create_analysis.PNG)

Once you click on "Create analysis", QuickSight will redirect you to a new page, where you will have to choose what sheet you want to create. 
Choose the "Interactive sheet" option and click "Create". 

![QS_create_sheet](/images/quicksight/16_QS_create_sheet.PNG)

For this example let us apply a filter to the dataset to focus on sales from the first three months of the year 2022. To create a filter for the dataset, on the left pane select "Filter", and afterwards click the button "ADD FILTER". 
Select the column "SALES_DATE", as we will use this column to filter the data. 

![QS_add_filter](/images/quicksight/17_QS_add_filter.PNG)

Edit the filter details by clicking on the three dots of the "SALES_DATE" filter and choose "Edit". A new view will appear to define the details of the filter as seen below:

![QS_edit_filter](/images/quicksight/18_QS_edit_filter_details.PNG)

Once you have set the filter details to the desired values, click "APPLY". Now, we can add this filter to the sheet (sheet 1) to be able to change the filter dates
after generating the visual, later on this will be helpful to analyse the data. In order to add the filter to the sheet, click on the dotes of the filter and click "Add to sheet".

![QS_add_filter_sheet](/images/quicksight/19_add_to_sheet.PNG)

The result will look like this:
![QS_added_filter](/images/quicksight/20_QS_added_filter.PNG)

After filtering the dataset, we can now create our first visual. Click on the empty visual and in the left pane choose "Visualize". From the fields list choose the "SALES_DATE" column and click the three dots, afterwards choose "Add to visual".

![QS_first_visual](/images/quicksight/21_QS_first_visual.PNG)

Since the "Visual types" on the bottom left corner is set to the "AutoGraph" setting (Lightning Symbol), QuickSight will choose the appropriate graph type to visualize the column(s) we selected, as seen below:

![QS_visual](/images/quicksight/22_QS_visual.PNG)

We can imediately see that during the first quarter the number of sales is usually between 600 to 800 sales a day except on Sundays where the sales fall to as low as 200 per day. 

For the second visual, based on the second dataset (with the custom SQL), we will have to add the dataset "SALES data enriched". 

To add the "SALES data enriched" dataset, click on the pencil symbol on top of the drop down list of the datasets.

![QS_second_dataset](/images/quicksight/23_QS_add_second_dataset.PNG)

Click on "Add dataset" and choose the "SALES data enriched" dataset.

![QS_add_dataset](/images/quicksight/24_QS_add_dataset.PNG)

Select the "SALES Data enriched" dataset and click "Select"

![QS_choose_dataset](/images/quicksight/25_QS_choose_dataset.PNG)

In the Datasets dropdown list, choose the new dataset. The Fields list will now show the columns of the second datset.

![QS_list_of_cols](/images/quicksight/26_QS_column_of_second_dataset.PNG)

Now let us create a heatmap visual with the second dataset, where we will count the quantity sold by each country during a period of six days period.

NOTE: The dataset contains data from '2022-01-01' AND '2022-01-07' (filtered in the Custom SQL).

Add SALES_DATE to the visual and a new visual will appear. Change the visual type to "Heatmap" and afterwards add the "COUNTRY_NAME" column to the visual and add the "QUANTITY" column to the visual.

QuickSight will generate a "Heatmap" visual, that will show us the amount (quantity) sold for each country in a period of 6 days, as shown below:

![QS_second_visual](/images/quicksight/27_QS_the_second_visual.PNG)

On the top of the view, you will see a "Field Wells" section. This section shows us that the column "COUNTRY_NAME" is used as Rows, "SALES_DATE" as columns, and "QUANTITY (sum)" for Values. These values can be changed by clicking on them and removing/changing the columns used from the Fields list.

Since AUTOSAVE is enabled, both of our visuals are saved in the "Analyses" page with their respective dataset name. You can access and manage your analyses from this section.

![QS_saved_analyses](/images/quicksight/28_QS_saved_analyses.PNG)

To publish the analysis to a dashboard, open the analysis and click the "share" symbol on the upper left corner, select the "Publish Dashboard" option. 
Dashboards allow you to bring together multiple visualizations and data insights into a single, consolidated view. 

![QS_share](/images/quicksight/30_QS_share_to_dashboard.PNG)

Give the dashboard a name and publish it. 

![QS_give_name](/images/quicksight/31_QS_give_dashboard_a_name.PNG)

Now, navigate to the "Dashboards" page in QuickSight where you can see your newly created dashboard. 

![QS_dashboard_page](/images/quicksight/32_QS_dashboard_page.PNG)

CONGRATULATIONS! You have created your first interactive dashboard using QuickSight and Exasol!