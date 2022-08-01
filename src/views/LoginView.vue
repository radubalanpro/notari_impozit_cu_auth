<template>
  <!-- <div id="loginform" class="card" style="width: 25rem;"> -->

  <div class="container h-100">
    <div class="row align-items-center h-100"><!-- de aici fac centrarea-->
      <div class="col-5 mx-auto"> <!-- de aici se da marimea -->

        <div id="loginform" class="card h-100 border-primary justify-content-center">
          <div class="card-header">Login</div>

          <div class="card-body">
            <form class="form-control form-control-lg">
              <div class="mb-2">
                <label for="username">Username</label>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  id="username"
                  name="username"
                  v-model="input.username"
                  placeholder="Username"
                />
              </div>

              <div class="mb-2">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  v-model="input.password"
                  placeholder="Password"
                  class="form-control form-control-lg"
                />
              </div>

              <div class="mb-1 text-center">
                <button
                  type="button"
                  class="btn btn-success btn-lg text-center"
                  v-on:click="login()"
                >
                  Autentificare
                </button>
              </div>
            </form>
          </div>

          <div class="card-footer text-muted">Pagina autentificare</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        // console.log("username = ", this.input.username);
        // console.log("password = ", this.input.password);

        // This should actually be an api call not a check against this.$parent.mockAccount
        // if(this.input.username == 'radubalanpro@yahoo.com' && this.input.password == 'radusiro') {
        if (
          this.input.username == this.$root.mockAccount.username &&
          this.input.password == this.$root.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("Username si / sau parola nu sunt corecte");
        }
      } else {
        console.log("Trebuie sa introduceti si username si parola !!!");
      }
    },
  },
};
</script>

<style>

</style>
