import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "f686c6503e7641aaa7847eba34616f56" },
});
