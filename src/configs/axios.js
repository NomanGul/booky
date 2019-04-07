import Axios from "axios";
import { API_KEY } from "../constant/API_KEY";

export const axios = Axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  headers: {
    "X-Android-Package": "com.booky",
    "X-Android-Cert": "228a451245483f2cfa8b8831b055d91e169f375b"
  },
  params: {
    key: API_KEY
  }
});
