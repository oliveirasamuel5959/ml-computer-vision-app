import psycopg

conn = psycopg.connect(
    host="ep-round-cloud-ah0gcrh8-pooler.c-3.us-east-1.aws.neon.tech",
    port=5432,
    dbname="ml_app",
    user="neondb_owner",
    password="npg_aim09SxjpyvV",
    sslmode="require",
    channel_binding="disable"
)
print("CONNECTED")
conn.close()