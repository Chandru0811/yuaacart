import axios from "axios";

const api = axios.create({
  baseURL: "https://sgitjobs.com/ShoppingCart/public/api/",
});

export default api;
