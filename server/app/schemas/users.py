import uuid
from datetime import datetime

from pydantic import BaseModel, field_validator


class UserCreate(BaseModel):
    phone: str
    name: str | None = None

    @field_validator("phone")
    @classmethod
    def phone_not_empty(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("phone must not be empty")
        return v


class UserUpdate(BaseModel):
    phone: str | None = None
    name: str | None = None
    is_active: bool | None = None

    @field_validator("phone")
    @classmethod
    def phone_not_empty(cls, v: str | None) -> str | None:
        if v is not None:
            v = v.strip()
            if not v:
                raise ValueError("phone must not be empty")
        return v


class UserResponse(BaseModel):
    id: uuid.UUID
    phone: str
    name: str | None
    is_active: bool
    created_at: datetime
    updated_at: datetime | None

    model_config = {"from_attributes": True}
