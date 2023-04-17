<template>
  <div class="registration-view">
    <form @submit.prevent="submit">
      <div>
        <label for="">Name</label>
        <input type="text" v-model="form.name" />
      </div>
      <div>
        <label for="">Email</label>
        <input type="email" v-model="form.email" />
      </div>
      <div>
        <label for="">Password</label>
        <input type="password" v-model="form.password" />
      </div>
      <div>
        <label for="">Confirm Password</label>
        <input type="password" v-model="form.password_confirmation" />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";
import RegisterForm from "@/types/RegisterForm";
import { useAuthStore } from "@/stores/auth";

const { register } = useAuthStore();

const form: Ref<RegisterForm> = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const submit = () => {
  register(form.value);
};
</script>
