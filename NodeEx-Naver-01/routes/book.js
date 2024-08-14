// express framework 를 가져오기
import express from "express";

// express 를 사용하여 router 생성
const router = express.Router();

router.get("/", (req, res) => {
  return res.send("Hello Book");
});

export default router;
