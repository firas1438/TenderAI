# Tender AI - CV Matching App

This project is a full‑stack web app that helps recruiters match candidate CVs to job offers/tenders using an AI‑powered ranking pipeline.

![App Preview](https://i.imgur.com/CCj5Iv3.png)


## What It Does

1. You create a job offer or tender with a title and requirements.  
2. You upload one or more candidate CVs as PDF files.  
3. The backend analyzes the job and CVs using AI and scores each candidate.  
4. The frontend shows you ranked candidates, match tiers and skill gaps so you can pick the best fit.


## AI Features & Models

- **Embeddings and semantic search**  
  Uses `BAAI/bge-m3` from SentenceTransformers and `faiss-cpu` to find CVs that are semantically close to the job description.

- **Relevance reranking**  
  Uses a cross‑encoder (`cross-encoder/ms-marco-MiniLM-L-6-v2`) to rerank the most relevant CVs.

- **Deep profile and skills analysis**  
  Uses Groq’s LLM API with `LLaMA 3.1 8B` to extract required skills, domains and experience from the job text and from each CV, then explain matched and missing skills.


## Tech Stack

| Layer | Tool |
|---|---|
| Frontend | Next.js (React, TypeScript) |
| Backend | FastAPI (Python, Uvicorn) |
| Database | SQLite + SQLAlchemy |
| Embeddings & Search | SentenceTransformers + FAISS |
| LLM | Groq API (LLaMA 3.1) |
| PDF Parsing | pdfplumber |


## General Structure

```
backend/
  main.py           # FastAPI entry point
  routers/          # CV upload + matching endpoints
  services/         # PDF parsing, embeddings, AI logic
  models/           # Pydantic schemas, DB models
  data/             # SQLite DB, embeddings, uploaded CVs

frontend/
  src/app/          # Next.js routes 
  src/components/   # UI components 
  src/store/        # Client-side job state
```


## API Endpoints

Simple overview of the main HTTP endpoints exposed by the FastAPI backend:

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Returns a simple status message |
| GET | `/health` | Health check |
| POST | `/cvs/upload` | Upload a CV PDF for a given job id |
| GET | `/cvs/job/{job_id}` | List CVs for a job |
| DELETE | `/cvs/job/{job_id}` | Delete all CVs and embeddings for a job |
| DELETE | `/cvs/{cv_id}` | Delete one CV |
| POST | `/match/` | Run the matching pipeline for a job and its CVs |


## Match Response Structure

```json
{
  "total_cvs_scanned": 3,
  "match_found": true,
  "top_candidates": [
    {
      "candidate_name": "John Doe",
      "final_score": 0.82,
      "match_tier": "Strong Match",
      "matched_skills": ["Docker", "Spring Boot", "PostgreSQL"],
      "missing_skills": ["Kubernetes"]
    }
  ],
  "near_misses": null,
  "suggestions": [
    "You have 1 strong match. We recommend: John Doe.",
    "Most common missing skill: Kubernetes."
  ]
}
```

**Match Tiers:**
- `Strong Match` → final score ≥ 0.65
- `Partial Match` → final score ≥ 0.40
- `Weak Match` → final score < 0.40

> A candidate with `skill_score = 0.0` is never returned, regardless of other scores.


## Setup & Run (Backend)

**1. Install dependencies**
```bash
cd backend
python -m pip install -r requirements.txt
```

**2. Create `.env` file**
```env
GROQ_API_KEY=your_groq_api_key
```
Get a free Groq key at: https://console.groq.com

**3. Start the API server**
```bash
cd backend
python -m uvicorn main:app --reload
```

The interactive docs are available at:

```text
http://localhost:8000/docs
```


## Setup & Run (Frontend)

**1. Install dependencies**
```bash
cd frontend
npm install
```

**2. Run the dev server**
```bash
npm run dev
```

The app is available at:
```text
http://localhost:3000
```

Make sure the backend is running on `http://localhost:8000` so matching and uploads work.

## Contributions

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
