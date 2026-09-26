from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {
        "message": "PrepAI Backend is running!"
    }