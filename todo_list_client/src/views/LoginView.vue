<template>
  <div>
    <form @submit.prevent="submit">
      <div>
        <label for="">email</label>
        <input type="email" v-model="loginForm.email" />
      </div>
      <div>
        <label for="">password</label>
        <input type="password" v-model="loginForm.password" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import LoginForm from "@/types/LoginForm";
import { useAuthStore } from "@/stores/auth";
import { Ref, ref } from "vue";

const { login } = useAuthStore();

const loginForm: Ref<LoginForm> = ref({
  email: "",
  password: "",
});

const submit = () => {
  login(loginForm.value);
};
</script>
