<h1>Backend Analyst Candidate Testing</h1>
<h2>Chrysler Oliveira</h2>

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
1 - Download or clone this repositorie
2 - Open in your favorite editor
3 - Open your terminal inside the project folder
4 - run npm install (or equivalent)
5 - Set the app port in ./index.js "port" variable
6 - Setup your MongoDB connection in ./database/database.js file changing the URI and password
7 - Enjoy