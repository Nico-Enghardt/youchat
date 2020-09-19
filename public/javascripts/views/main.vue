<template>
  <div id="app">
      <div class="auswahl">
          <chat/>
          <div class="spalt"/>
          <newChat/>
      </div>
  </div>
</template>

<script>
var chat = require("../components/from main/chat.vue");
var newChat = require("../components/from main/newChat.vue");

module.exports = {
  name: "main",
  components: {
      chat,
      newChat
  },
  data() {
    return {
    };
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
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    overflow-x: hidden;
    background: linear-gradient(to bottom, rgb(1, 81, 255), rgb(1, 182, 255));
    } 

    .auswahl{
        width: 100%;
        display: flex;
    }

    .spalt{
        width: 5px;
        height: 100%;
        background: white;
    }
</style>