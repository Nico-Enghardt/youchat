<template>
  <div id="app">
    <Sidebar v-bind:namen="chatnamen" />
    <div class="window">
      <div class="chatfenster">
        <input type="text" v-model="benutzer" placeholder="Benutzername" />
        <Chatfenster :messages="nachrichten" :benutzer="benutzer" />
      </div>
      <div class="new_message">
        <form @submit="send">
          <input class="input" v-model="message" placeholder="schreiben..." />
          <button class="btn" type="submit" value="Submit">
            <img src="../../images/Send.svg" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
var Sidebar = require("../components/from chat/Sidebar.vue");
var Chatfenster = require("../components/from chat/Chatfenster.vue");
var axios = require("axios");

module.exports = {
  name: "Chat",
  components: {
    Sidebar,
    Chatfenster,
  },
  data() {
    return {
      chatId: "",
      benutzer: "",
      message: "",
      chatnamen: [],
      nachrichten: [],
    };
  },
  methods: {
    send(e) {
      e.preventDefault();
      const heute = new Date();
      newMessage = {
        text: this.message,
        absender: this.benutzer,
        zeit: {
          jahr: heute.getYear() + 1900,
          monat: heute.getMonth(),
          tag: heute.getDate(),
          stunde: heute.getHours(),
          minute: heute.getMinutes(),
          absolute: Date.now(),
        },
      };
      axios
        .post(
          "http://localhost:4343/chat/nachrichten?id=" + this.chatId,
          newMessage
        )
        .catch((err, res) =>
          console.log("Yo, this is the error here:", err, res)
        )
        .then((res) => {
          this.nachrichten.push(newMessage);
        });
    },
  },
  mounted: function () {
    this.chatId = this.$route.params.chatId;
    axios
      .get("http://localhost:4343/chat/nachrichten?id=" + this.chatId)
      .then((res) => {
        for (message of res.data) {
          this.nachrichten.push(message);
        }
      });
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: white;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: hidden;
}

.window {
  display: unset;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgb(0, 61, 194), rgb(1, 217, 255));
}

.input {
  color: black;
  display: inline-flex;
  height: 100%;
  width: 90%;
  margin-bottom: 0px;
  font-size: 90%;
  float: left;
}

::placeholder {
  font-size: 90%;
}

.input:focus {
  outline: none;
}

.btn {
  margin-top: auto;
  margin-bottom: auto;
  border: none;
  height: 100%;
  float: right;
  background: none;
  width: 10%;
  height: 100%;
  float: left;
}

.btn:focus {
  outline: none;
}

form {
  width: 100%;
  height: 100%;
}

.chatfenster {
  position: relative;
  width: 100%;
  height: 95%;
  overflow-y: scroll;
}

.new_message {
  display: flex;
  height: 5%;
  width: 80%;
  font-size: 35px;
  border-radius: 200px;
  box-sizing: border-box;
  border: none;
  padding: 0px 10px;
  margin-left: auto;
  margin-right: auto;
  background: white;
}
</style>