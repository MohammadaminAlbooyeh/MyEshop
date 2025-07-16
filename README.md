# MyEshop

MyEshop is a simple e-commerce project with a FastAPI backend and a React (Vite) frontend.

## Folders

- `backend/` — Contains backend code with FastAPI and SQLite database
- `frontend/` — Contains frontend code with React and Vite

## Quick Start

### Backend

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Run the server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the project:
   ```bash
   npm run dev
   ```

## More Information

- The SQLite database is located by default at `backend/myeshop.db`.
- Product images are located in `backend/static/` and `frontend/public/static/`.

---

Created by Amin
