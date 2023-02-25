<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
        remember: false,
      },
    };
  },
  methods: {
    login() {
      let route = "http://127.0.0.4:8000/api/v1/user/login";
      this.axios
        .post(route, {
          email: this.user.email,
          password: this.user.password,
        })
        .then((response) => {
          if (response.success) {
            console.log(response);
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <h4>Login</h4>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            id="email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            id="password"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            v-model="user.remember"
            type="checkbox"
            class="form-check-input"
            id="remember"
          />
          <label class="form-check-label" for="remember">Remember Me</label>
        </div>
        <button @click="login()" type="button" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
