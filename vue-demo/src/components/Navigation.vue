<template>
  <nav class="navbar">
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/logout">Logout</router-link>
      <router-link to="/users">User List</router-link>
    </div>
    <div class="toggle-container">
      <span class="toggle-label">🌙</span>
      <label class="toggle">
        <input type="checkbox" v-model="darkMode" @change="toggleDarkMode" />
        <span class="slider"></span>
      </label>
      <span class="toggle-label">☀️</span>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import {ref} from 'vue'

const darkMode = ref(false)

const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode', darkMode.value)
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.toggle-container {
  display: flex;
  align-items: center;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 10px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:checked + .slider:before {
  transform: translateX(20px);
}
</style>
