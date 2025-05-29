from fastapi import APIRouter, Form
from utils.nlp_utils import extract_keywords

router = APIRouter()

@router.post("/extract-keywords/")
async def get_keywords(text: str = Form(...)):
    keywords = extract_keywords(text)
    return {"keywords": keywords}
