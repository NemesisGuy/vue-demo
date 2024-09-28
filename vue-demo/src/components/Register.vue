<template>
  <div class="form-container">
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" v-model="user.username" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="user.email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="user.password" id="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const user = ref({
  username: '',
  email: '',
  password: ''
})
const message = ref('')

const registerUser = async () => {
  try {
    // Access the raw object from the ref
    const response = await axios.post('http://localhost:8089/api/users/register', user.value)
    message.value = `User registered successfully! ID: ${response.data.id}`
    console.log(response.data)
  } catch (error) {
    message.value = 'Error registering user.'
    console.error(error)
  }
}

</script>

<style scoped>
/* Additional styles if needed */
</style>
