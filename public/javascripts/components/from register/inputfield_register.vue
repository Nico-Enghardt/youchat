<template>
  <div>
    <form @submit="CreateUser">
      <p class="register">Registrieren</p>
      <img src="../../images/Bezierkurve.svg" class="kurve" />
      <input type="text" v-model="user" placeholder="Benutzername" class="input">
      <p></p>
      <img src="../../images/Bezierkurve.svg" class="kurve"/>
      <input :type="type" v-model="pass" placeholder="Passwort" class="input">
      <input type="checkbox" v-on:change="show">
      <p></p>
      <img src="../../images/Bezierkurve.svg" class="kurve" />
      <input :type="type2" v-model="wdhpass" placeholder="Passwort wiederhohlen" class="input">
      <input type="checkbox" v-on:change="show2">
      <p></p>
      <button type="submit">Registrieren</button>
    </form>
  </div>
</template>

<script>
var uuid = require("uuid");
module.exports = {
  name: "Inputfield",
  data() {
    return {
      user: "",
      pass: "",
      wdhpass: "",
      type: "password",
      type2: "password"
    };
  },
  methods: {
    CreateUser(e) {
      const user = {
        name: this.user,
        password: this.pass,
        wdhpass: this.wdhpass,
      };
      //Send up to parent
      this.$emit("create-user", user);
      e.preventDefault();
    },
    show(){
      if(this.type=="password") {
        this.type="text"
      } else {
        this.type="password"
      }
    },
    show2(){
      if(this.type2=="password") {
        this.type2="text"
      } else {
        this.type2="password"
      }
    }
  }
}
</script>

<style>
.input {
  background-color: rgb(1, 81, 255, 0);
  border: none;
  color: #fff;
  height: 50px;
  font-size: 25px;
  margin-bottom: 30px;
  width: 275px;
}

.input:focus {
  outline: none;
}

::placeholder {
  color: rgb(179, 207, 255);
}

input[type="checkbox"] {
  width: max-content;
  height: max-content;
}

.kurve {
  margin-right: -300px;
  margin-bottom: -10px;
  margin-top: 10px;
}

button {
  background: rgb(255, 0, 0);
  color: #fff;
  border-radius: 13px;
  border: none;
  padding: 7px 14px;
  outline: none;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
}
button:hover {
  background: #ff5555ff;
}
button:focus {
  border: solid black;
  box-sizing: content-box;
  margin-top: -2px;
  margin-right: 2px;
}

.register {
  margin-top: -20px;
  margin-right: 500px;
  margin-bottom: -54px;
  font-size: 35px;
  color: #fff;
  padding-right: 100px;
}
</style>
