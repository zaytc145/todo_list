import todoApi from "./todoApi";

export const fetchCsrfToken = async () => {
  await todoApi.get("/sanctum/csrf-cookie", {
    baseURL: import.meta.env.VITE_TODO_API_BASE_URL,
  });
};
