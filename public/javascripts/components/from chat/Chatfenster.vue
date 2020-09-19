<template>
    <div>
      <div class ="allmessages">
        <div :key="nachricht.id" v-for="nachricht in messages" >
          <Nachricht :text="nachricht.text" :absender="nachricht.absender" :hour="nachricht.zeit.stunde" :minute="nachricht.zeit.minute" :benutzer="benutzer"/>    
        </div>
      </div>
    </div>
</template>

<script>
var Nachricht = require('./Nachricht.vue');

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
