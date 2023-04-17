import axios from "axios";

const todoApi = axios.create({
  baseURL: `${import.meta.env.TODO_API_BASE_URL}/api`,
  withCredentials: true,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
  },
});

export default todoApi;
