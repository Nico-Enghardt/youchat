<template>
  <div class="app">
    <center>
    <img src="../../images/Logo.svg" class="logo">
    <form>
      <p class="anmelden">Anmeldung</p>
      <Inputfield v-bind:ph="user" />
      <Inputfield v-bind:ph="pass" />
      <button type="Button">Anmelden</button>
      <router-link to="/register" tag="button">Registrieren</router-link>
      <!-- <button type="Button" onclick="/register">Registrieren</button> -->
    </form>
    </center>
  </div>
</template>

<script>
var Inputfield = require('../components/inputfield.vue');
module.exports = {
  name: 'Anmeldung',
  components: {
    Inputfield,
  },
  data() {
    return {
      user: "Benutzername",
      pass: "Passwort"
    }
  }
}
</script>

<style scoped>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    background-image: linear-gradient(to bottom, rgb(1, 81, 255), rgb(1, 182, 255));
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

  button{
    background: rgb(255, 0, 0);
    color: #fff;
    border-radius: 13px;
    border: none;
    padding: 7px 14px;
    outline: none;
    font-size: 20px;
    margin: 15px;
  }

  button:hover {
    background: #ff5555ff;
  }

  button:focus{
    border: solid black;
    box-sizing: content-box;
    margin-top: -2px;
    margin-right: 2px;
  }

  .anmelden{
    margin-top: -20px;
    margin-right: 500px;
    margin-bottom: -54px;
    font-size: 35px;
    color: #fff;
    padding-right: 100px;
}
</style>