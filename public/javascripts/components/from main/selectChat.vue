<template>
  <div class="sidebar">
    <h1>Chat auswählen</h1>
    <center>
      <input type="text" v-model="search" placeholder="Chat Suchen..." class="search" />
    </center>
    <div class="scroll">
      <div class="selectChat" v-for="chat in chats" :key="chat.id">
        <router-link :to="{ name: 'Chat', params: { chatId: chat.id }}">{{chat.name}}</router-link>
      </div>
    </div>
    <button v-on:click="addone">Add One to the global state</button>
  </div>
</template>

<script>
var axios = require("axios");

module.exports = {
  name: "selectChat",
  data() {
    return {
      search: "",
      benutzer: "Ich",
      chats: [],
    };
  },
  methods:{
    addone : ()=>{
      console.log(this.$store);
      console.log(this);
      console.log("%c Run Function",'background: white; color: green; display: block');
    }
  },
  mounted: function () {
    var id = {
      id: "488d93df-e05c-4562-a349-882a634255d1",
    };

    axios({
      method: "get",
      url: "http://localhost:4343/benutzer/theirchats",
      params: id,
    })
      .then((res) => {
        this.chats = res.data;
        console.log(this.chats);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>


.selectChat{
  margin: 10px 40px;
  padding: 5px;
  border: white 3px solid;
  border-radius:5px;
  font-size: 25px;
}

.sidebar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  color: white;
}

.chat {
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
}

a {
  color: white;
  text-decoration: none;
}

.scroll {
  overflow-y: scroll;
  height: 100%;
}

.search {
  margin-bottom: 20px;
  font-size: 20px;
  background: none;
  text-align: center;
  color: white;
  width: 70%;
  border: none;
}

.search:focus {
  outline: none;
}

::placeholder {
  text-align: center;
  font-size: 20px;
}

h1 {
  font-size: 40px;
  text-decoration: underline;
  text-align: center;
}

input[type="radio"] {
  width: 17px;
  height: 17px;
}
</style>