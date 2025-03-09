"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../types/book";

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Available Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4"
          >
            <img
              src={book.url}
              alt={book.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-4">{book.name}</h3>
            <p className="text-gray-600 text-sm">{book.description}</p>
            <p className="text-gray-800 mt-2 font-semibold">
              📖 {book.pages} pages
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
