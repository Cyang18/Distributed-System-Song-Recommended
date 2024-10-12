from pyspark.sql import SparkSession
from pyspark.sql import Row

spark = SparkSession.builder.enableHiveSupport().getOrCreate()

# optional: reading in the data file
# json_file_path = 'path_to_your_json_file.json'
# data = spark.read.json(json_file_path)

data = [ ] #place data here from or in bucket
row_data = [
    Row(
        track_name=item["name"],
        track_artists=item["artists"]
    )
    for item in data
]


df = spark.createDataFrame(row_data)
df.write.mode("overwrite").saveAsTable("music_tracks") # Change the name of the table to ur choice
print("Data saved to Hive table 'music_tracks'")


