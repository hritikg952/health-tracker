from fastapi import FastAPI

app = FastAPI(title="Teal Care API")


@app.get("/")
def root():
    return {"message": "Hello World", "service": "Teal Care Health Tracker API"}
