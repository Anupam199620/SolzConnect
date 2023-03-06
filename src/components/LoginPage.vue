<script>
import { useInitialStore } from '@/stores/counter';

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        remember: false,
      },
      loading: false
    };
  },
  methods: {
    login() {
      let route = `${this.store.apiHost}/user/login`;
      this.loading = true;
      fetch(route, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      })
      .then((response) => response.json())
        .then((data) => {
        if (data.success && ('token' in data)) {
          localStorage.setItem('isAuthenticated', true);
          setTimeout(() => {
            this.$router.push('/home');
          }, 2000);
        }
        else {
    
        }
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
      });
    },
  },
  setup() {
    const store = useInitialStore();
    return { store };
  }
};
</script>

<template>
    <div class="position-relative vh-100">
      <div class="position-absolute top-50 start-50 translate-middle">
        <div class="shadow-lg p-4 bg-body rounded login-div-width">
          <h4 class="text-center">Login</h4>
          <form>
            <div class="mb-3 row">
              <label for="email" class="form-label col-sm-2 col-form-label">Email</label>
              <input
                v-model="user.email"
                type="email"
                class="form-control col-sm-10 border border-warning"
                id="email"
              />
            </div>
            <div class="mb-3 row">
              <label for="password" class="form-label col-sm-2 col-form-label">Password</label>
              <input
                v-model="user.password"
                type="password"
                class="form-control col-sm-10 border border-warning"
                id="password"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                v-model="user.remember"
                type="checkbox"
                class="form-check-input border border-warning"
                id="remember"
              />
              <label class="form-check-label" for="remember">Remember Me</label>
            </div>
            <div class="d-flex align-items-center gap-2">
              <button @click="login()" type="button" class="btn btn-primary">
                Login
              </button>
              <div v-if="loading" class="spinner-border text-primary" role="status">
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
<style scoped>
  .form-control:focus, .form-check-input:focus {
    border-color: #EFDF17;
    box-shadow: 0 0 0 0.2rem rgba(230, 241, 18, 0.951);
  }
  .login-div-width {
    width:300px;
  }
</style>