<template>
  <div id="app">
    <div id="nav">
      
        <div class="col">
          <router-link
            v-if="authenticated"
            to="/impozit"
            class="btn btn-primary btn-lg btn-block me-5"
            >Impozit</router-link
          >
          <router-link
            v-if="authenticated"
            to="/login"
            v-on:click="logout()"
            class="btn btn-success btn-lg btn-block ml-5"
            replace
            >Logout</router-link
          >
          <router-link
            v-else
            to="/login"
            class="btn btn-success btn-lg btn-block ml-5"
            >Login</router-link
          >
        </div>
      
    </div>
    <router-view @authenticated="setAuthenticated" />
    <!-- asta il urmareste ce face cu emit
    This is a listener. In the login.vue file we are emitting data on an event called authenticated, hence the @authenticated that we use. 
    If we find some data, we’ll call the callback method which will change the authentication status. -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      // this is only for testing purposes no actual app will have this
      // an api call will validate user credentials
      mockAccount: {
        username: "radubalanpro@yahoo.com",
        password: "radusiro",
      },
    };
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #215a92;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  padding-right: 10px;
}

#nav a:not(:first-child) {
  border-left: 1px solid #2c3e50;
  padding-left: 10px;
}

#nav a.router-link-exact-active {
  color: #f3f708;
}
</style>
