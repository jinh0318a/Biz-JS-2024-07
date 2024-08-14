import express from "express";
import { getBook, getBooks } from "../modules/naver_api.js";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  const search = req.query.search;
  const books = await getBooks(search);
  return res.render("index", { BOOKS: books });
});

// localhost:3000/detail/isbn값
router.get("/detail/:isbn", async (req, res) => {
  const isbn = req.params.isbn;
  const book = await getBook(isbn);
  return res.render("naver/book_detail", { BOOK: book });
});

export default router;
