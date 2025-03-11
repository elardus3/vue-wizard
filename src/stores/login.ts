import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', () => {
  const loggedIn = ref(false);
  const admin = ref(false);

  const isLoggedIn = computed(() => loggedIn.value === true);
  const isAdmin = computed(() => admin.value === true);

  function login(user: string, pass: string) {
    if (user === 'a' && pass === 'a') {
      loggedIn.value = true;
      admin.value = true;
    } else if (user === 'e' && pass === 'e') {
      loggedIn.value = true;
    }
  }

  function logout() {
    loggedIn.value = false;
    admin.value = false;
  }

  return { loggedIn, admin, isLoggedIn, isAdmin, login, logout }
})
