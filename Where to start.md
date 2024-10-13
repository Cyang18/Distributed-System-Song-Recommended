# To Start: 

1. Go to the codefile section and read the readme
2. Then go into soptify_rec and read the readme, and excute the programs if necessary
3. Go to getdata section and get your data
4. Place data into Spark_job_driver.py
5. Open Google Cloud Platfrom
6. Open Dataproc
7. Make a Cluster and Bucket
8. Add the Spark_job_driver.py into the bucket location
9. On the cluster run a Job
10. In the job configuration selection select pyspark
11. Attach the driver file location with the Job configuration, where it asks to add python file
12. Excute the Job, and make sure it's successful.
13. Run another Job through Hive, now in the configuration make sure to select Hive Text.
14. Attach the table name, such as select * from "table name" to the Hive Text command section
15. Excute
16. Get user song recommendation


# Optional:

For step 9-15 you can run these line commands on the terminal:
1. gcloud dataproc jobs submit pyspark gs://your-bucket/path/to/your_script.py \
2. gcloud dataproc jobs submit hive --file gs://your-bucket/path/to/your_query.hql \
3. gcloud dataproc jobs wait "pyspark job name" --project "project name" --region "region of project"
4. gcloud dataproc jobs wait "hive job name" --project "project name" --region "region of project"
