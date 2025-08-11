import { ref, computed } from 'vue'

// Global authentication state
const isAuthenticated = ref(false)
const currentUser = ref(null)

export function useAuth() {
  const login = (user = { username: 'admin' }) => {
    isAuthenticated.value = true
    currentUser.value = user
    // Store in localStorage for persistence
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  const logout = () => {
    isAuthenticated.value = false
    currentUser.value = null
    // Remove from localStorage
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('currentUser')
  }

  const checkAuth = () => {
    // Check localStorage on app initialization
    const stored = localStorage.getItem('isAuthenticated')
    const storedUser = localStorage.getItem('currentUser')
    
    if (stored === 'true' && storedUser) {
      isAuthenticated.value = true
      currentUser.value = JSON.parse(storedUser)
    }
  }

  const isLoggedIn = computed(() => isAuthenticated.value)

  return {
    isAuthenticated: isLoggedIn,
    currentUser: computed(() => currentUser.value),
    login,
    logout,
    checkAuth
  }
}
