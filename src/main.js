// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAuth } from './composables/useAuth'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

// Initialize authentication state from localStorage
const { checkAuth } = useAuth()
checkAuth()

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwX5MmP4ME3zCF4a0q1sFBg8yN1Vdcj3c",
  authDomain: "week7-kezhao-chen.firebaseapp.com",
  projectId: "week7-kezhao-chen",
  storageBucket: "week7-kezhao-chen.firebasestorage.app",
  messagingSenderId: "1044092664397",
  appId: "1:1044092664397:web:65ddc479c321ff1d323a04"
};

// Initialize Firebase
initializeApp(firebaseConfig);
