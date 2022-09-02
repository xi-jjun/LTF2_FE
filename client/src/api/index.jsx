import axios from "axios";

const BASE_URL = "http://3.39.194.243:8080/";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
