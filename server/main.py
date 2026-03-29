from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.database import engine
from app.routers.users import router as users_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    await engine.dispose()


app = FastAPI(title="Teal Care API", lifespan=lifespan)

app.include_router(users_router, prefix="/users")


@app.get("/")
def root():
    return {"message": "Hello World", "service": "Teal Care Health Tracker API"}
