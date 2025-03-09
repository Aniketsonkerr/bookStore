This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# **Bookstore Application (Next.js + Express + MySQL)**

## **📌 Project Overview**

This is a **full-stack bookstore application** built with:

- **Frontend:** Next.js with TypeScript (MVC architecture)
- **Backend:** Express.js with MySQL (using stored procedures)
- **Database:** MySQL for data storage

The application displays a **dynamic homepage** that fetches book data from the database via API and renders it using responsive **cards with Tailwind CSS**.

---

## **🚀 Features**

✅ **Next.js Frontend** with TypeScript and Tailwind CSS  
✅ **Express.js Backend** to serve API endpoints  
✅ **MySQL Database** with stored procedures for business logic  
✅ **MVC Architecture** for clean project structure  
✅ **Responsive UI** with header, footer, and book list cards  
✅ **Environment Variables (.env)** for secure database configuration

---

## **🛠️ Setup Instructions**

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/your-username/bookstore-app.git
cd bookstore-app
```

### **2️⃣ Install Dependencies**

#### **Backend (Express + MySQL)**

```sh
cd backend
npm install
```

#### **Frontend (Next.js + TypeScript)**

```sh
cd ../frontend
npm install
```

---

## **📂 Project Structure**

```
📦 bookstore-app
├── 📂 backend (Express.js Server)
│   ├── 📂 config
│   │   ├── db.js  (MySQL Connection)
│   ├── 📂 routes
│   │   ├── books.js (API Routes)
│   ├── 📂 controllers
│   │   ├── bookController.js (Handles API Logic)
│   ├── 📂 models
│   │   ├── bookModel.js (Handles Database Queries)
│   ├── server.js  (Main Express Server)
│   ├── .env  (Database Credentials)
│   ├── package.json
│
├── 📂 frontend (Next.js + TypeScript)
│   ├── 📂 components
│   │   ├── Header.tsx (Navigation Bar)
│   │   ├── Footer.tsx (Footer)
│   │   ├── BookList.tsx (Fetch & Display Books)
│   ├── 📂 pages
│   │   ├── index.tsx (Homepage)
│   ├── 📂 styles
│   │   ├── globals.css (Tailwind CSS Setup)
│   ├── 📂 types
│   │   ├── book.ts (TypeScript Interface for Book)
│   ├── tailwind.config.js
│   ├── package.json
│
├── README.md
```

---

## **⚙️ Configuration**

### **3️⃣ Set Up Environment Variables**

Create a **`.env`** file in the **backend** folder:

```sh
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=bookstore_db
DB_PORT=3306
```

---

## **📌 Database Setup (MySQL)**

### **4️⃣ Create MySQL Database**

Log in to MySQL and create a database:

```sql
CREATE DATABASE bookstore_db;
USE bookstore_db;
```

### **5️⃣ Create `books` Table**

```sql
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    pages INT NOT NULL,
    description TEXT NOT NULL,
    url VARCHAR(255) NOT NULL
);
```

### **6️⃣ Insert Sample Data**

```sql
INSERT INTO books (name, pages, description, url) VALUES
("The Great Gatsby", 180, "A novel set in the Jazz Age...", "https://m.media-amazon.com/images/I/51tyC7s8F+L._SX342_SY445_.jpg"),
("1984", 328, "A dystopian novel about totalitarianism...", "https://m.media-amazon.com/images/I/51PeLo3-n-S._SX342_SY445_.jpg");
```

### **7️⃣ Create Stored Procedure for Fetching Books**

```sql
DELIMITER //
CREATE PROCEDURE GetBooks()
BEGIN
    SELECT * FROM books;
END //
DELIMITER ;
```

---

## **💡 Run the Application**

### **8️⃣ Start Backend (Express Server)**

```sh
cd backend
npm start
```

✅ Server running at: `http://localhost:5000`

### **9️⃣ Start Frontend (Next.js)**

```sh
cd ../frontend
npm run dev
```

✅ Frontend running at: `http://localhost:3000`

---

## **📢 API Endpoints**

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/api/books` | Fetch all books |

---

## **📌 Future Enhancements**

✅ Add book details page  
✅ Implement search & filter functionality  
✅ User authentication & book reviews

---

## **👨‍💻 Author**

Developed by **Aniket** 🚀

Let me know if you need any modifications! 🎯
