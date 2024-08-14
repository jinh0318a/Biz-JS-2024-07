// express framework 를 가져오기
import express from "express";
import { getBooks } from "../modules/naver_api.js";
// express 를 사용하여 router 생성
const router = express.Router();

router.get("/", async (req, res) => {
  //   return res.send("Hello Book");
  return res.json(await getBooks("java"));
});

export default router;
