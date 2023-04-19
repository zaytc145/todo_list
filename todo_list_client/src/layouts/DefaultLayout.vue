<template>
  <div class="default-layout">
    <div class="default-layout-header">
      <button @click="logoutUser">Logout</button>
    </div>
    <div class="default-layout-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth";

const { logout } = useAuthStore();
const logoutUser = async () => {
  await logout();
};
</script>
