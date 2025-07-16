from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import sessionmaker
import sqlite3

DATABASE_URL = "sqlite:///./myeshop.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
    image = Column(String, index=False)


Base.metadata.create_all(bind=engine)

def seed_products():
    db = SessionLocal()
    if db.query(Product).count() == 0:
        demo_products = [
            Product(
                name="iPad",
                description="",
                image="/static/ipad.png"
            ),
            Product(
                name="iPhone",
                description="",
                image="/static/iphone.png"
            ),
            Product(
                name="MacBook",
                description="",
                image="/static/laptop.png"
            ),
        ]
        db.add_all(demo_products)
        db.commit()
    db.close()

seed_products()


app = FastAPI()

# Serve static files
from fastapi.staticfiles import StaticFiles
app.mount("/static", StaticFiles(directory="static"), name="static")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"] ,
    allow_headers=["*"]
)

@app.get("/products")
def read_products():
    db = SessionLocal()
    products = db.query(Product).all()
    db.close()
    return [
        {
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "image": p.image
        } for p in products
    ]

@app.post("/products")
def create_product(product: dict):
    db = SessionLocal()
    db_product = Product(
        name=product["name"],
        description=product["description"],
        image=product.get("image", "")
    )
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    db.close()
    return {
        "id": db_product.id,
        "name": db_product.name,
        "description": db_product.description,
        "image": db_product.image
    }
