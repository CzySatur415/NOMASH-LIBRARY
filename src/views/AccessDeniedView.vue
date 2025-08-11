<template>
  <div class="access-denied">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center">
          <div class="card">
            <div class="card-body">
              <h1 class="display-1">🚫</h1>
              <h2 class="card-title">Access Denied</h2>
              <p class="card-text">
                You need to be logged in to access this page.
              </p>
              <router-link to="/login" class="btn btn-primary me-2">
                Login
              </router-link>
              <router-link to="/" class="btn btn-secondary">
                Go Home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
.access-denied {
  margin-top: 50px;
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.display-1 {
  font-size: 4rem;
}
</style>
