
# 🧩 Full Stack Experiment – Express.js API + React Frontend

## 📌 Overview

This project demonstrates the integration of a **Node.js + Express.js backend** with a **React.js frontend**.
The backend exposes a simple API that returns a list of products, and the frontend fetches and displays them using **Axios** with proper loading and error handling.

---

## ⚙️ Tech Stack

| Layer    | Technology                |
| -------- | ------------------------- |
| Backend  | Node.js, Express.js, CORS |
| Frontend | React.js, Axios           |
| Language | JavaScript (ES6)          |

---

## 🗂️ Project Structure

```
project/
├── express-backend/
│   ├── server.js
│   ├── package.json
│
└── react-frontend/
    ├── src/
    │   ├── App.js
    │   ├── ProductList.js
    ├── package.json
```

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

---

### 2️⃣ Setup the Backend (Express.js)

```bash
cd express-backend
npm install
```

#### Start the backend server:

```bash
node server.js
```

✅ Server will run at:
**[http://localhost:5000](http://localhost:5000)**

You can test it by visiting:
**[http://localhost:5000/api/products](http://localhost:5000/api/products)**

Expected Output:

```json
[
  { "id": 1, "name": "Laptop", "price": 59999 },
  { "id": 2, "name": "Smartphone", "price": 29999 },
  { "id": 3, "name": "Headphones", "price": 2999 },
  { "id": 4, "name": "Keyboard", "price": 1499 }
]
```

---

### 3️⃣ Setup the Frontend (React.js)

In a new terminal:

```bash
cd ../react-frontend
npm install
npm start
```

✅ React app runs at:
**[http://localhost:3000](http://localhost:3000)**

---

## 🧠 Working of the Application

* When the React app loads, the `ProductList` component triggers an Axios request to the Express backend (`/api/products`).
* The backend responds with a list of product objects.
* The frontend dynamically renders each product in a user-friendly card layout.
* The app also handles:

  * Loading state (shows “Loading products…”)
  * Error state (if fetching fails)

---

## 📸 Sample Output (Frontend UI)

```
🛍️ Product List
-----------------------------------
Laptop        💸 ₹59999
Smartphone    💸 ₹29999
Headphones    💸 ₹2999
Keyboard      💸 ₹1499
```

---

## 🧰 Troubleshooting

**Issue:** `Cannot find module 'server.js'`
**Fix:** Make sure you run the command inside the backend folder where `server.js` exists.

```bash
cd express-backend
node server.js
```

**Issue:** React not fetching data
**Fix:** Ensure CORS is enabled in Express:

```js
app.use(require('cors')());
```

and both servers are running.

---

## 💡 Future Improvements

* Add POST/DELETE routes for product management
* Connect to MongoDB for persistent data
* Add routing and product detail pages on the frontend
* Deploy backend (Render/Railway) and frontend (Vercel/Netlify)

---
