from fastapi import APIRouter, Form

router = APIRouter()

@router.post("/tailor-resume/")
async def tailor_resume(resume_text: str = Form(...), job_keywords: str = Form(...)):
    job_keywords_list = job_keywords.split(",")
    highlighted_resume = resume_text

    for kw in job_keywords_list:
        kw_clean = kw.strip()
        if kw_clean and kw_clean.lower() in highlighted_resume.lower():
            highlighted_resume = highlighted_resume.replace(kw_clean, f"**{kw_clean}**")

    return {"tailored_resume": highlighted_resume}
