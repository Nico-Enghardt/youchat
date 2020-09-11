<template>
    <div>
      <img src="../../images/Bezierkurve.svg" class="kurve">
      <input type="text" :v-model="save" :placeholder="ph">
    </div>
</template>

<script>
var uuid =require('uuid');

module.exports = {
  name: "Inputfield",
  props: ["ph", "save"],
  data(){
    return {
      save: ''
    }
  },
  methods: {
    CreateUser(e) {
      const user = {
        save: this.save,
      }
      //Send up to parent
      this.$emit('create-user', newUser);
      e.preventDefault();
    }
  }
}
</script>

<style>
  input{
    background-color: rgb(1, 81, 255, 0);
    border: none;
    color: #fff;
    height: 50px;
    font-size: 25px;
    margin-bottom: 30px;
    width: 310px;
  }

  input:focus {
    outline: none;
  }

  ::placeholder {
    color: rgb(179, 207, 255);
  }

  .kurve {
    margin-right: -300px;
    margin-bottom: -10px;
    margin-top: 10px;
  }
</style>
