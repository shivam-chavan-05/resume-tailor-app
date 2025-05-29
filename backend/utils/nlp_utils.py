import spacy

nlp = spacy.load("en_core_web_sm")

def extract_keywords(text):
    doc = nlp(text.lower())
    keywords = set()
    for token in doc:
        if token.is_stop or token.is_punct or len(token.text) < 3:
            continue
        keywords.add(token.lemma_)
    return list(keywords)
