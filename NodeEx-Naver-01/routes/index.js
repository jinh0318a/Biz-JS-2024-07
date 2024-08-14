import express from "express";
import { getBooks } from "../modules/naver_api.js";
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  const search = req.query.search;
  const books = await getBooks(search);
  return res.render("index", { BOOKS: books });
});

export default router;
