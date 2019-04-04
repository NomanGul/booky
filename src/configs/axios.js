import Axios from "axios";
import { API_KEY } from "../constant/API_KEY";

export const axios = Axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
  headers: {
    "X-Android-Package": "com.booky",
    "X-Android-Cert": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  },
  params: {
    key: API_KEY
  }
});
