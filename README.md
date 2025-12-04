# Face Detection RTSP Inference System  
Real-time face detection using **PyTorch**, **FastAPI**, **React/TypeScript**, and **PostgreSQL**, with camera streaming via **RTSP**.

---

## 📚 Table of Contents
- [Overview](#overview)  
- [Technologies](#technologies)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Demo](#demo)  
- [Backend Usage](#backend-usage)  
- [Frontend Usage](#frontend-usage)  
- [Environment Variables](#environment-variables)  
- [Installation](#installation)  
- [Running the Project](#running-the-project)  
- [License](#license)

---

## 🌐 Overview
This project provides an end-to-end solution for performing **real-time face detection** from camera streams using RTSP.  
A PyTorch model is loaded by FastAPI for inference and returns detection results to the React frontend, enabling live monitoring through a modern web interface.  

The backend manages:
- Model loading and inference  
- RTSP video streaming  
- WebSocket real-time communication  
- User and detection logs stored in PostgreSQL  

The frontend displays:
- Real-time video  
- Detected faces with bounding boxes  
- Historical logs and activity panels  

---

## 🛠 Technologies

### **Backend**
- FastAPI  
- Python 3.x  
- PyTorch  
- OpenCV (RTSP streaming)  
- PostgreSQL  
- SQLAlchemy  
- Pydantic  
- JWT Authentication  

### **Frontend**
- React  
- TypeScript  
- Vite or CRA  
- Axios  
- WebSockets  

### **DevOps**
- Docker  
- Docker Compose  
- Git  

---

## ✨ Features
- 🔍 **Real-time face detection** using a PyTorch deep learning model  
- 🎥 **RTSP camera ingestion** and processing  
- ⚡ **Live video inference streamed to frontend via WebSocket**  
- 🔐 **User authentication (JWT)**  
- 🗄️ **PostgreSQL storage for logs and user data**  
- 🧩 **Modular API structure with CRUD layers**  
- 🧪 **Unit and integration tests**  
- 🖥 **Modern React dashboard with live camera feed**  

---

## 📁 Project Structure

### **Backend (`face_detection_backend/`)**
```
face_detection_backend/
├── .env                        # Environment variables (DB URL, secret key, RTSP URL)
├── requirements.txt            # Dependencies
├── main.py                     # Application entry point
├── Dockerfile                  # Backend Dockerfile
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI app, routes mounting, events
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py           # Pydantic settings
│   │   ├── database.py         # SQLAlchemy engine & session
│   │   └── security.py         # Auth, JWT, password hashing
│   ├── api/
│   │   ├── __init__.py
│   │   ├── deps.py             # API dependencies
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── users.py        # User endpoints
│   │   │   ├── detections.py   # Face detection endpoints (RTSP, WebSocket)
│   │   │   └── auth.py         # Auth endpoints
│   ├── crud/
│   │   ├── __init__.py
│   │   ├── users.py            # CRUD operations for users
│   │   └── detections.py       # CRUD operations for detection logs
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── users.py            # Pydantic models for users
│   │   └── detections.py       # Pydantic models for detections
│   ├── models/
│   │   ├── __init__.py
│   │   ├── users.py            # User ORM model
│   │   └── detections.py       # Detection logs ORM model
│   ├── services/
│   │   ├── __init__.py
│   │   ├── rtsp_reader.py      # RTSP frame capture with OpenCV
│   │   ├── inference.py        # PyTorch model loading & inference
│   │   └── websocket.py        # Streaming frames to frontend
│   └── tests/
│       ├── __init__.py
│       ├── test_users.py
│       └── test_detections.py
```

---

### **Frontend (`face_detection_frontend/`)**
```
face_detection_frontend/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── index.html
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── api/
    │   └── apiClient.ts        # Axios config
    ├── components/
    │   ├── LiveStream.tsx      # WebSocket video stream component
    │   ├── DetectionBox.tsx    # Face bounding boxes
    │   └── LoginForm.tsx
    ├── pages/
    │   ├── Dashboard.tsx
    │   └── Login.tsx
    ├── hooks/
    │   └── useWebSocket.ts     # WebSocket wrapper
    └── styles/
        └── global.css
```

---

## 🎬 Demo
Add a preview video, GIF, or screenshot here:

```
![Demo](demo.gif)
```

---

## 🚀 Backend Usage

### **Start the server**
```bash
uvicorn main:app --reload
```

### **API Endpoints**
| Endpoint | Method | Description |
|---------|--------|-------------|
| `/auth/login` | POST | Authenticate user & return JWT |
| `/users/` | POST/GET | Create or list users |
| `/detections/stream` | WS | Real-time detection WebSocket |
| `/detections/logs` | GET | Fetch historical logs |

### Sample Request
```python
import requests
resp = requests.get("http://localhost:8000/detections/logs")
print(resp.json())
```

---

## 💻 Frontend Usage

### Install dependencies
```bash
npm install
```

### Start frontend
```bash
npm run dev
```

---

## 🔧 Environment Variables

### Backend `.env`
```
DATABASE_URL=postgresql://user:password@localhost:5432/face_detection
SECRET_KEY=your_secret_key
RTSP_URL=rtsp://your_camera_url
MODEL_PATH=models/face_model.pth
```

### Frontend `.env`
```
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
```

---

## 🧩 Installation

### Clone repo
```bash
git clone https://github.com/your/repo.git
cd repo
```

### Backend setup
```bash
pip install -r requirements.txt
```

### Frontend setup
```bash
cd face_detection_frontend
npm install
```

---

## ▶️ Running the Project with Docker

### Run using Docker Compose
```bash
docker-compose up --build
```

This starts:
- FastAPI backend  
- PostgreSQL database  
- React frontend  

---

## 📄 License
MIT License — free to use and modify.

---

