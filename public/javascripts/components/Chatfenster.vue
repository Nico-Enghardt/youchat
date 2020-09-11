<template>
    <div>
      <div class ="allmessages">
        <div :key="nachricht.id" v-for="nachricht in messages" >
          <Nachricht :message="nachricht.message" :absender="nachricht.absender" :benutzer="benutzer"/>    
        </div>
      </div>
    </div>
</template>

<script>
var Nachricht = require('.//Nachricht.vue');

module.exports = {
  name: "Chatfenster",
  props: ["messages", "benutzer"],
  components: {
    Nachricht,
  }, 
}
</script>

<style>
  .allmessages{
    padding: 20px 0px;
    height:100%;
  }
</style>
