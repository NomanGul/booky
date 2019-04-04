import Axios from "axios";
import { API_KEY } from "../constant/API_KEY";

export const fetchBooks = async () => {
  const req = await Axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5&filter=paid-ebooks&projection=lite&key=${API_KEY}`
  );
  return console.log(req);
};
