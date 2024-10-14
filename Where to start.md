# To Start: 

Sure! Here’s a clearer breakdown of the steps you outlined:

### Step-by-Step Instructions

1. **Access the Code Files**:
   - Go to the code file section of your project.
   - Open and read the `README.md` file to understand the project setup and requirements.

2. **Explore the `spotify_rec` Directory**:
   - Navigate to the `spotify_rec` folder.
   - Read its `README.md` file for specific instructions on executing the programs.
   - Run any necessary programs as described.

3. **Gather Your Data**:
   - Go to the `getdata` section of the project.
   - Follow the instructions to collect the required data for your project.

4. **Prepare Your Data**:
   - Open the `Spark_job_driver.py` file.
   - Insert the data you gathered in Step 3 into this file as required by the script.

5. **Open Google Cloud Platform**:
   - Log in to your Google Cloud Platform (GCP) account.

6. **Navigate to Dataproc**:
   - In the GCP dashboard, locate and select "Dataproc" from the menu.

7. **Create a Cluster and Bucket**:
   - Click on the option to create a new cluster.
   - Also, create a new storage bucket where you'll store your files.

8. **Upload `Spark_job_driver.py` to the Bucket**:
   - Go to the storage bucket you created.
   - Upload the `Spark_job_driver.py` file to the bucket.

9. **Run a Job on the Cluster**:
   - On your Dataproc cluster, select the option to run a new job.

10. **Select Job Configuration**:
    - In the job configuration options, choose "PySpark" as the job type.

11. **Attach the Driver File**:
    - In the job configuration, look for the section to add the Python file.
    - Enter the path to your script in the format: `gs://your-bucket/path/to/Spark_job_driver.py`.

12. **Execute the Job**:
    - Run the job and monitor its progress to ensure it completes successfully.

13. **Run a Hive Job**:
    - After the PySpark job, create another job, but this time select "Hive."

14. **Configure Hive Job**:
    - In the Hive job configuration, make sure to select "Hive Text" as the output format.

15. **Attach the Table Name**:
    - Specify the table name in the command section (e.g., `SELECT * FROM your_table_name`).

16. **Execute the Hive Job**:
    - Run the Hive job and check for successful execution.

17. **Obtain User Song Recommendations**:
    - After the jobs have completed, retrieve the user song recommendations as specified in your project.

Feel free to ask if you need more clarification on any specific step!


# Optional:

For step 9-15 you can run these line commands on the terminal:
1. gcloud dataproc jobs submit pyspark gs://your-bucket/path/to/your_script.py \
2. gcloud dataproc jobs submit hive --file gs://your-bucket/path/to/your_query.hql \
3. gcloud dataproc jobs wait "pyspark job name" --project "project name" --region "region of project"
4. gcloud dataproc jobs wait "hive job name" --project "project name" --region "region of project"
