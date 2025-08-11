<template>
  <div class="login">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card">
            <div class="card-header">
              <h3 class="text-center">Login to Library</h3>
            </div>
            <div class="card-body">
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="loginForm.username"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="loginForm.password"
                    required
                  />
                </div>
                <div v-if="errorMessage" class="alert alert-danger">
                  {{ errorMessage }}
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>
              </form>
              <div class="mt-3 text-center">
                <small class="text-muted">
                  Demo credentials: admin / password123
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { login } = useAuth()

const loginForm = ref({
  username: '',
  password: ''
})

const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''
  
  // Hardcoded credentials for demo
  const validCredentials = {
    username: 'admin',
    password: 'password123'
  }
  
  if (
    loginForm.value.username === validCredentials.username &&
    loginForm.value.password === validCredentials.password
  ) {
    // Login successful
    login()
    router.push('/')
  } else {
    // Login failed
    errorMessage.value = 'Invalid username or password'
  }
}
</script>

<style scoped>
.login {
  min-height: 70vh;
  display: flex;
  align-items: center;
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275fda;
  color: white;
}
</style>
