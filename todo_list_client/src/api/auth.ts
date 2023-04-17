import LoginForm from "@/types/LoginForm";
import User from "@/types/User";
import axios from "axios";

export const login = async ({ email, password }: LoginForm): Promise<User> => {
  const response = await axios.post(
    "/login",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

// export const logout: User = () => {};

// export const registration: User = () => {};
