# myEShop Backend

## How to Run the Server
To start the FastAPI server, use the following commands:

```bash
cd backend
/Users/amin/Desktop/MyProjects/MyEshop/.venv/bin/python -m uvicorn main:app --reload
```

## Database
This project uses SQLite as the database. The database file is located at `myeshop.db` in the backend directory.

## API Endpoints
The server provides the following endpoints for managing products:

### GET /products
- Retrieves a list of all products.
- Example response:
```json
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 1200.00
  },
  {
    "id": 2,
    "name": "iPhone",
    "price": 999.99
  }
]
```

### POST /products
- Adds a new product to the database.
- Example request:
```json
{
  "name": "Tablet",
  "price": 499.99
}
```
- Example response:
```json
{
  "id": 3,
  "name": "Tablet",
  "price": 499.99
}
```
