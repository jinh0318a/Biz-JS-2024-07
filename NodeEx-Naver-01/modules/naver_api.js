// confing/naver_secret.js 에 선언한 변수를 import 하기
import {
  NAVER_BOOK_URL,
  NAVER_CLIENT_ID,
  NAVER_CLIENT_SECRET,
} from "../config/naver_secret.js";

const getBooks = async (search) => {
  const naverFetchOption = {
    method: "get",
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };

  const queryString = `${NAVER_BOOK_URL}?query=${search}&display=1`;
  const response = await fetch(queryString, naverFetchOption);
  const json = await response.json();

  return json.items;
};

export { getBooks };
