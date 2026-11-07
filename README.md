# Tola Feyisa | Full-Stack Developer & Cybersecurity Enthusiast

<p align="center">
  <img src="https://img.shields.io/badge/React-2026-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Python-FastAPI-yellow?logo=python" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb" />
  <img src="https://img.shields.io/badge/Deployment-Vercel%20%7C%20Render-black" />
</p>

<p align="center">
  A modern, responsive, full-stack personal portfolio showcasing my background, technical skills, cybersecurity projects, software development experience, and professional journey.
</p>

<p align="center">
  <a href="https://tola-portfolio-xvp4.vercel.app/"><strong>🌐 Live Portfolio</strong></a> •
  <a href="https://tola-portfolio-api.onrender.com/docs"><strong>⚡ API Documentation</strong></a> •
  <a href="https://github.com/tola24234"><strong>💻 GitHub Profile</strong></a>
</p>

---

## 📌 About the Project

This repository contains my personal portfolio website, developed as a full-stack application to establish my professional online presence.

The portfolio combines a modern React frontend, a Python FastAPI backend, and MongoDB Atlas for cloud database management.

It is designed to present my technical abilities, academic background, cybersecurity projects, software development work, and professional interests in one accessible platform.

## 🌐 Live Deployment

| Component | Platform | Link |
|---|---|---|
| Frontend | Vercel | https://tola-portfolio-xvp4.vercel.app/ |
| Backend API | Render | https://tola-portfolio-api.onrender.com/ |
| API Documentation | FastAPI / Swagger | https://tola-portfolio-api.onrender.com/docs |
| Database | MongoDB Atlas | Cloud-hosted database |
| Source Code | GitHub | https://github.com/tola24234/tola-portfolio |

## ✨ Features

- Responsive and modern portfolio interface.
- Professional introduction and personal profile.
- Education and academic background.
- Technical skills and technology stack.
- Cybersecurity and software development projects.
- Professional experience and achievements.
- Contact and communication section.
- RESTful API powered by FastAPI.
- Cloud database integration using MongoDB Atlas.
- API documentation through Swagger UI.
- Separate frontend and backend deployment.

## 🛠️ Technology Stack

### Frontend
- React
- TypeScript
- JavaScript
- HTML5
- CSS3
- Vite

### Backend
- Python
- FastAPI
- Uvicorn
- PyMongo
- REST API architecture

### Database
- MongoDB Atlas
- MongoDB Database

### Deployment and Development Tools
- Git and GitHub
- Vercel
- Render
- Visual Studio Code / Kiro IDE
- Postman
- PowerShell

## 🏗️ System Architecture

```text
                 VISITORS
                    |
                    v
          REACT + TYPESCRIPT
             FRONTEND
                    |
               HTTPS / API
                    |
                    v
             PYTHON FASTAPI
                BACKEND
                    |
                    v
              PYMongo
                    |
                    v
              MONGODB
                ATLAS
```

### Deployment Architecture

- **Vercel:** Hosts the React frontend.
- **Render:** Hosts the Python FastAPI backend.
- **MongoDB Atlas:** Provides cloud database storage.

## 📂 Project Structure

```text
tola-portfolio/
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── requirements.txt
│   ├── .env.example
│   ├── .gitignore
│   ├── render.yaml
│   └── test_mongodb.py
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

*Note: The structure above is a representative overview. Update it if your actual frontend folders differ.*

## 🚀 Getting Started

Follow these instructions to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/tola24234/tola-portfolio.git
cd tola-portfolio
```

### 2. Frontend Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

### 3. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Create a Python virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend directory using `.env.example` as a template.

```env
MONGODB_URL=your_mongodb_atlas_connection_string
DATABASE_NAME=tola_portfolio
FRONTEND_URL=http://localhost:5173
```

**Security:** Never commit your `.env` file, database credentials, or private API keys to GitHub.

### 5. Run the Backend

```bash
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Backend:

```text
http://127.0.0.1:8000
```

API documentation:

```text
http://127.0.0.1:8000/docs
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API homepage |
| GET | `/api/health` | Backend and database health check |
| GET | `/api/projects` | Retrieve portfolio projects |
| GET | `/docs` | Interactive API documentation |

## 🔐 Security Considerations

Security is an important part of this project.

- Environment variables are used for sensitive configuration.
- MongoDB credentials are kept outside the source code.
- CORS is configured for frontend origins.
- Database communication uses MongoDB Atlas.
- Backend validation and authorization should protect sensitive operations as additional features are implemented.

## ☁️ Deployment

### Frontend — Vercel

1. Import the GitHub repository into Vercel.
2. Configure the frontend project and build settings.
3. Add the production API URL to the frontend environment configuration if required by the application.
4. Deploy the project.

### Backend — Render

1. Connect the GitHub repository to Render.
2. Set the root directory to `backend`.
3. Configure the build command:

```bash
pip install -r requirements.txt
```

4. Configure the start command:

```bash
uvicorn main:app --host 0.0.0.0 --port $PORT
```

5. Configure `MONGODB_URL`, `DATABASE_NAME`, and `FRONTEND_URL` in the Render environment settings.
6. Deploy the backend.

### Database — MongoDB Atlas

1. Create a MongoDB Atlas cluster.
2. Create a dedicated database user with appropriate permissions.
3. Configure network access for the backend deployment.
4. Store the connection string securely in the backend environment variables.

## 🎯 Project Goals

- Establish a professional online portfolio.
- Demonstrate full-stack development skills.
- Showcase practical cybersecurity projects.
- Build and integrate RESTful APIs.
- Practice cloud database management.
- Improve software deployment and maintenance skills.
- Create a professional platform for career opportunities and collaboration.

## 👨‍💻 About Me

I am a Computer Science student at Haramaya University with interests in cybersecurity, ethical hacking, penetration testing, software engineering, and full-stack development.

I enjoy building practical projects, exploring security technologies, solving technical problems, and continuously improving my development and cybersecurity skills.

My goal is to combine secure software development with practical cybersecurity knowledge to build useful, reliable, and secure digital solutions.

## 📬 Connect With Me

- **GitHub:** https://github.com/tola24234
- **Portfolio:** https://tola-portfolio-xvp4.vercel.app/
- **Backend API:** https://tola-portfolio-api.onrender.com/

For professional inquiries, collaboration, internships, or project opportunities, please contact me through my portfolio.

---

<p align="center">
  <strong>Designed and developed by Tola Feyisa</strong>
  <br />
  Building. Securing. Innovating.
</p>
