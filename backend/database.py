import os
from dotenv import load_dotenv
from pymongo import MongoClient

# Load environment variables from .env
load_dotenv()

MONGODB_URL = os.getenv("MONGODB_URL")
DATABASE_NAME = os.getenv("DATABASE_NAME")

# Validate configuration
if not MONGODB_URL:
    raise ValueError("MONGODB_URL is missing from .env")

if not DATABASE_NAME:
    raise ValueError("DATABASE_NAME is missing from .env")

# Connect to MongoDB Atlas
client = MongoClient(
    MONGODB_URL,
    serverSelectionTimeoutMS=10000
)

db = client[DATABASE_NAME]


def check_database_connection():
    try:
        client.admin.command("ping")
        print("MongoDB Atlas connection successful!")
        return True

    except Exception as error:
        print("MongoDB connection failed:", error)
        return False