<h1>Anotaai - Backend Analyst Candidate Testing</h1>
<h2>Developer: Chrysler Oliveira</h2>

<strong>Routes:</strong>

# Home:
- GET: "/" - Displays an "App online" message.

# Category:
- GET: "/category" - Get all categories.

- POST: "/category" - Create a new category.
  Example (JSON via Postman):
  {
    "title": "cars"
  }

# Product:
- GET: "/products" - Get all products

- POST: "/products" - Create a new product.
  Example (JSON via Postman):
  {
    "title": "Peugeot",
    "description": "Hatch",
    "price": 70,
    "categoryId": "6005de334da9b23e1088cfbc"
  }
  OBS: You can get the categoryId using GET /categories

- PATCH: "/products/:id" - Edit a product by ID (including the producte category).
  Example (JSON via Postman):
  {
    "title": "Citroen",
    "description": "hatch",
    "price": 70,
    "categoryId": "6005de334da9b23e1088cfbc"
  }

- DELETE: "/products/:id" - Delete a product by ID


<strong>Installation guide</strong>
- Download or clone this repository
- Open in your favorite editor
- Open your terminal inside the project folder
- run npm install (or equivalent)
- Set the app port in ./index.js "port" variable
- Setup your MongoDB connection in ./database/database.js file changing the URI and password
- Enjoy