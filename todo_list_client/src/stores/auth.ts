import { login, logout, register } from "@/api/auth";
import LoginForm from "@/types/LoginForm";
import RegisterForm from "@/types/RegisterForm";
import User from "@/types/User";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

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
      useRouter().push({ name: "profile" });
      // this.user = response;
    },
    async logout() {
      await logout();
      useRouter().push({ name: "login" });
    },
    async register(formData: RegisterForm) {
      const response = await register(formData);
      this.login({ email: formData.email, password: formData.password });
      // this.user = response;
    },
  },
});
