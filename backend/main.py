from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.extract import router as extract_router
from routes.keywords import router as keywords_router
from routes.tailor import router as tailor_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(extract_router)
app.include_router(keywords_router)
app.include_router(tailor_router)

@app.get("/")
def root():
    return {"message": "Resume Tailor API is running."}
