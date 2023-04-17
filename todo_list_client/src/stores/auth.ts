import { login, register } from "@/api/auth";
import LoginForm from "@/types/LoginForm";
import RegisterForm from "@/types/RegisterForm";
import User from "@/types/User";
import { defineStore } from "pinia";

interface State {
  user: User | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): State => {
    return {
      user: null,
    };
  },
  actions: {
    async login(formData: LoginForm) {
      const response = await login(formData);
      this.user = response;
    },
    // logout(){},
    async register(formData: RegisterForm) {
      const response = await register(formData);
      this.user = response;
    },
  },
});
