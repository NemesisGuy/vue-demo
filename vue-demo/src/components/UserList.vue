<template>
  <div>
    <h1>User List</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.username }}</li>
    </ul>
    <p v-else>No users found.</p>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

// No need to set up an Axios interceptor for the Authorization header when using cookies/sessions

const users = ref([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8089/api/users/all', {
      withCredentials: true  // Include cookies with the request
    });
    users.value = response.data;
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error fetching users:", error.response.status, error.response.data);
    } else {
      console.error("Network Error:", error);
    }
  }
};

onMounted(fetchUsers);
</script>


<style scoped>
/* Add your styles here */
</style>
