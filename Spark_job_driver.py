from pyspark.sql import SparkSession
from pyspark.sql import Row

# Initialize Spark session with Hive support
spark = SparkSession.builder.enableHiveSupport().getOrCreate()

# New sample data structure
data = [ ] #place data here from
row_data = [
    Row(
        track_name=item["name"],
        track_artists=item["artists"]
    )
    for item in data
]


df = spark.createDataFrame(row_data)
df.write.mode("overwrite").saveAsTable("music_tracks")
print("Data saved to Hive table 'music_tracks'")


