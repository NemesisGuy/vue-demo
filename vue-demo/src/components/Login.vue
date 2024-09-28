<template>
  <div class="form-container">
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="user.username" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="user.password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const user = ref({
  username: '',
  password: ''
});
const message = ref('');
const router = useRouter();

const loginUser = async () => {
  try {
    const response = await axios.post('http://localhost:8089/api/users/login', user.value, {
      withCredentials: true // Include cookies with the request
    });

    message.value = 'Login successful!';
    console.log('User data:', user.value);
    console.log(response); // Log the response

    // Assuming your backend sends a session cookie
    const sessionId = response.headers['set-cookie']; // Change this if your backend uses a different header

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('NEMESIS_SESSION_COOKIE', sessionId); // Save the session ID or token

    router.push('/');
  } catch (error) {
    message.value = 'Login failed. Please check your credentials.';
    console.error(error); // Log the error
  }
};

</script>

<style scoped>
/* Additional styles if needed */
</style>
