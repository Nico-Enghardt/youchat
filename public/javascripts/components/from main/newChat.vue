<template>
    <div class="sidebar">
        <h1>
        Neuen Chat erstellen
        </h1>
        <h2>Mitglieder:</h2>
        <input type="text" placeholder="Name des Chat's" class="name">
        <div >
            <div v-for="user in users" :key="user.id" class="user" >
                <center>
                    <div class="unchecked" :class="{'checked':user.selected}">
                        <form>
                        <input style="border: 2px;" type="checkbox" v-on:change="markComplete">
                        <form>
                        {{user.name}}
                    </div>
                </center>
            </div>
        </div>
    </div>
</template>

<script>
var axios = require("axios");

module.exports = {
    name: 'newChat',
    data() {
        return {
            users: [
            ]
        }
    },
    methods: {
        markComplete() {
            
        } 
    },
    mounted: function () {
    axios.get("http://localhost:4343/benutzer")
    .then((res) => {
      for(var i = 0; i<res.data.length; i++){
        res.data[i].selected = false;
        this.users.push(res.data[i]);
      }
    });
  },
}
</script>

<style>    
    .sidebar {
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        color: white;
    }

    h1 {
        font-size: 40px;
        text-decoration: underline;
        text-align: center;
    }

    .name{
        margin-bottom: 20px
    }

    h2 {
        font-size: 25px;
        text-align: center;
        margin: 0px;
    }

    .scroll{
        overflow-y: scroll;
        height: 100%;
    }

    .user{
        font-size: 20px;
        margin-bottom: 20px;
    }

    .checked{
        text-decoration: line-through; 
    }
</style>