import { login } from "@/api/auth";
import LoginForm from "@/types/LoginForm";
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
    async login(payload: LoginForm) {
      const response = await login(payload);
      this.user = response;
    },
    // logout(){},
    // registration(){},
  },
});
