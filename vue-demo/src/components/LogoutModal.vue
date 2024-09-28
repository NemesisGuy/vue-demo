<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-content">
      <h3>Confirm Logout</h3>
      <p>Are you sure you want to logout?</p>
      <button @click="logout">Yes, Logout</button>
      <router-link to="/"> <button>Cancel</button></router-link>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios';

// Reactive variable to control the modal visibility
const isOpen = ref(true); // Modal is open when this component is loaded

// Vue Router instance
const router = useRouter();

// Logout function to send the request to the backend
const logout = async () => {
  try {
    // Send a POST request to the server to log the user out
    const response = await axios.post('http://localhost:8089/api/users/logout', {}, {withCredentials: true});

    // On successful logout, remove any local session info (like token) and redirect to login page
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  } catch (error) {
    // Handle errors from the logout request
    if (error.response) {
      // Server responded with a status outside the 2xx range
      console.error("Logout failed:", error.response.data);
      alert("Logout failed: " + (error.response.data.message || "Unknown error."));
    } else {
      // Network error or the server did not respond
      console.error("Network Error:", error);
      alert("Logout failed: Network error. Please try again.");
    }
  }
};
</script>

<style scoped>

</style>
