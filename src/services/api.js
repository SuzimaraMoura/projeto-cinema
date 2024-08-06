import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "406b4e27cce2f37369a107e96a072549",
    language: "pt-br",
    page: 1,
  },
});
export default api;
