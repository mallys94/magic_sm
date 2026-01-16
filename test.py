import os
import psycopg2

connection = psycopg2.connect(
    host=os.getenv("DB_HOST", "localhost"),
    port=os.getenv("DB_PORT", "5432"),
    database=os.getenv("DB_NAME", "magic_mallys"),
    user=os.getenv("DB_USER", "postgres"),
    password=os.getenv("DB_PASSWORD", "if#MS@.1")  # Default password if env var not set
)

print (f'Data find in : {dir(connection)}')
