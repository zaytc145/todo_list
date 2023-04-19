import LoginForm from "@/types/LoginForm";
import RegisterForm from "@/types/RegisterForm";
import User from "@/types/User";
import todoApi from "./todoApi";

export const login = async (formData: LoginForm): Promise<User> => {
  const response = await todoApi.post("/login", formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const logout = async () => {
  await todoApi.post("/logout");
};

export const register = async (formData: RegisterForm): Promise<User> => {
  const response = await todoApi.post("/register", formData);
  return response.data;
};
