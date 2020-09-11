<template>
  <div id="app">
    <Sidebar v-bind:namen="chatnamen" />
    <div class="window">
      <div class="chatfenster">
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
var Sidebar = require("../components/Sidebar.vue");
var Chatfenster = require("../components/Chatfenster.vue");
var axios = require("axios");

module.exports = {
  name: "Chat",
  components: {
    Sidebar,
    Chatfenster,
  },
  data() {
    return {
      benutzer: "Nico",
      message: "",
      chatnamen: [
        {
          name: "chat 1",
          id: 0,
        },
        {
          name: "chat 2",
          id: 1,
        },
        {
          name: "chat 3",
          id: 2,
        },
      ],
      nachrichten: [
        {
          message: "hi",
          id: 1,
          absender: "Nico",
        }
      ],
    };
  },
  methods: {
    send(e) {
      newMessage = {
        message: this.message,
        absender: this.benutzer,
      };
      newNachricht = {
        id: 1,
        text: this.message,
        absender: this.benutzer,
      };
      axios
      .post("http://localhost:4343/nachrichten", newMessage)
      .catch((err) => console.log(err));
      console.log("hIIII")
    },
  },
  mounted: function () {
    // console.log("Please print my code at the start.");
    axios.get("http://localhost:4343/nachrichten")
    .then((res) => {
      console.log("1234")
      console.log(res.data, "hI");
      console.log(res.data.length);
      for(var i = 0; i<res.data.length; i++){
        console.log(i, res.data[i]);
        this.nachrichten.push(res.data[i]);
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