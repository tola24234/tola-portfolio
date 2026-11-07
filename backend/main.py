import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from database import client, db

# Load .env in local development.
# On Render, environment variables are set in the dashboard — load_dotenv()
# is harmless when no .env file is present.
load_dotenv()

# ── Build the CORS origins list ───────────────────────────────────────
# Always allow local dev origins.
# In production, add the deployed Vercel URL via the FRONTEND_URL env var
# (set it in Render's dashboard — no need to hard-code it here).
_local_origins = [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:5175",
    "http://localhost:3000",
]

_frontend_url = os.getenv("FRONTEND_URL", "").strip().rstrip("/")
allowed_origins = _local_origins + ([_frontend_url] if _frontend_url else [])

# ── Application ───────────────────────────────────────────────────────
app = FastAPI(
    title="Tola Feyisa Portfolio API",
    description="Backend API for my personal portfolio",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Endpoints ─────────────────────────────────────────────────────────

@app.get("/")
def home():
    return {
        "message": "Welcome to Tola Feyisa Portfolio API",
        "status": "Running successfully",
    }


@app.get("/api/health")
def health_check():
    try:
        client.admin.command("ping")
        return {
            "status": "healthy",
            "database": "Connected",
            "database_name": db.name,
        }
    except Exception:
        return {
            "status": "unhealthy",
            "database": "Connection failed",
        }


@app.get("/api/projects")
def get_projects():
    projects = list(db.projects.find({}, {"_id": 0}))
    return {
        "total": len(projects),
        "projects": projects,
    }
