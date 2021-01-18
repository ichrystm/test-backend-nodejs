<h1>Anotaai - Backend Analyst Candidate Testing</h1>
<h2>Developer: Chrysler Oliveira</h2>

<strong>Routes:</strong>

# Home:
- GET: "/" - Displays an "App online" message.

# Category:
- POST: "/category" - Create a new category.

# Product:
- GET: "/products" - Get all products
- POST: "/products" - Create a new product
- PATCH: "/products/:id" - Edit a product by ID (including the producte category)
- DELETE: "/products/:id" - Delete a product by ID

<strong>Installation guide</strong>
- Download or clone this repository
- Open in your favorite editor
- Open your terminal inside the project folder
- run npm install (or equivalent)
- Set the app port in ./index.js "port" variable
- Setup your MongoDB connection in ./database/database.js file changing the URI and password
- Enjoy