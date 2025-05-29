from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse
import io

from utils.extractor import extract_text_from_pdf, extract_text_from_docx


router = APIRouter()

@router.post("/extract-text/")
async def extract_text(file: UploadFile = File(...)):
    contents = await file.read()
    file_like = io.BytesIO(contents)

    filename = file.filename.lower()
    if filename.endswith(".pdf"):
        text = extract_text_from_pdf(file_like)
    elif filename.endswith((".doc", ".docx")):
        text = extract_text_from_docx(file_like)
    else:
        return JSONResponse(status_code=400, content={"error": "Unsupported file type."})
    return {"text": text}
