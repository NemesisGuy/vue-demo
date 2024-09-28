import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Import the router
import './assets/Styles/styles.css';
 import 'fontawesome'
import axios from "axios"; // Add this line

// Set up the interceptor
axios.interceptors.request.use((config) => {
 const cookie_token = localStorage.getItem('NEMESIS_SESSION_COOKIE'); // Or wherever you're storing it

 return config;
});
// Create the Vue app
const app = createApp(App)

// Use the router in the app
app.use(router)

// Mount the app to the DOM
app.mount('#app')
