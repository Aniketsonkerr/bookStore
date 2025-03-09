import { getBooks } from "../models/bookModel.js";

export async function fetchBooks(req, res) {
  try {
    const books = await getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
