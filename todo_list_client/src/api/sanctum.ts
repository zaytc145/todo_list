import todoApi from "./todoApi";

export const fetchCsrfToken = async () => {
  await todoApi.get("/sanctum/csrf-cookie", {
    baseURL: "http://localhost:8000",
  });
};
