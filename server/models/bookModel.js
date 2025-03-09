import pool from "./db.js";

export async function getBooks() {
  try {
    const [rows] = await pool.query("CALL GetBooks()");
    return rows[0]; // Stored procedure returns an array of arrays
  } catch (error) {
    throw new Error("Database query failed: " + error);
  }
}
