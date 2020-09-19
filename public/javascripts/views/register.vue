<template>
  <div class="app">
    <center>
      <img src="../../images/Logo.svg" class="logo" />
      <div v-if="error" class="error">{{msg}}</div>
      <p></p>
      <Inputfield v-on:create-user="createUser" />
    </center>
  </div>
</template>

<script>
var Inputfield = require("../components/from register/inputfield_register.vue");
var axios = require("axios");

// const axios = require('axios');

module.exports = {
  name: "Registrieren",
  components: {
    Inputfield,
  },
  data() {
    return {
      msg: "",
      error: false,
    };
  },
  methods: {
    createUser(newUser) {
      const { name, password, wdhpass } = newUser;
      if (password.length > 7) {
        if (password.length > 2) {
          if (password == wdhpass) {
            axios
              .post("http://localhost:4343/benutzer", {
                name,
                password,
              })
              .catch((err) => console.log(err));
            this.msg = "";
            this.error = false;
          } else {
            this.msg = "!!!Passwörter stimmen nicht überein!!!";
            this.error = true;
          }
        } else {
          this.msg = "!!!Benutzername zu kurz!!!";
          this.error = true;
        }
      } else {
        this.msg = "!!!Passwort zu kurz!!!";
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-image: linear-gradient(
    to bottom,
    rgb(1, 81, 255),
    rgb(1, 182, 255)
  );
  height: 100%;
  width: 100%;
  position: absolute;
}

body {
  margin: 0px;
}

.logo {
  margin-top: 100px;
  margin-bottom: 100px;
  width: 350px;
  background: none;
}

.error {
  background: rgba(202, 67, 67, 0.726);
  border: none;
  border-radius: 20px;
  color: white;
  padding: 10px;
  margin-top: -50px;
  margin-bottom: 30px;
  width: max-content;
}
</style>