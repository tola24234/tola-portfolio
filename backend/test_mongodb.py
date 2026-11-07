import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

client = MongoClient(
    os.getenv("MONGODB_URL"),
    serverSelectionTimeoutMS=10000
)

try:
    client.admin.command("ping")
    print("SUCCESS: Connected to MongoDB Atlas!")

    db = client[os.getenv("DATABASE_NAME")]
    print("Database:", db.name)

except Exception as error:
    print("Connection failed:", error)

finally:
    client.close()