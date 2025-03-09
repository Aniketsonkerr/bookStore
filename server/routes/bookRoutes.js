import express from "express";
import { fetchBooks } from "../controllers/bookcontroller.js";

const router = express.Router();

router.get("/books", fetchBooks);

export default router;
