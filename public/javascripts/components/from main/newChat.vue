<template>
    <div class="sidebar">
        <h1>
        Neuen Chat erstellen
        </h1>
        <!-- <h2>Mitglieder:</h2> -->
        <center>
        <input type="text" placeholder="Name des Chat's:" class="name_of_chat" v-model="name">
        <div class="scroll">
            <div v-for="user in users" :key="user.id" class="user" >
                <Person :user="user"/>
            </div>
        </div>
        <form @submit="send">
            <input type="submit" value="Chat erstellen">
        </form>
        </center>
    </div>
</template>

<script>
var axios = require("axios");
var Person =require("./Person.vue")

module.exports = {
    name: 'newChat',
    components: {
        Person,
    },
    data() {
        return {
            name: '',
            users: [
            ]
        }
    },
    methods: {
        markComplete(id) {
            this.users.filter()
        },
        send(i) {
            
            var mitglieder = [];

            for(user of this.users){
                if(user.selected){
                    mitglieder.push(user);
                }
            }

            axios.post("http://localhost:4343/chat/create",{
                participants:mitglieder,
                name: this.name,
                })
                i.preventDefault();
            }
            //Hier müssen jetzt noch alle ausgewählten Nutzer in einen Array eingefügt werden.
    
    },
    mounted: function() {
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

<style scoped>    
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

    .name_of_chat{
        margin-bottom: 20px;
        font-size: 20px;
        background: none;
        text-align: center;
        color: white;
        padding: 1px;
        width: 70%;
        border: none;
    }

    .name_of_chat:focus{
        outline: none;
    }

    ::placeholder {
        text-align: center;
        font-size: 20px;
    }

    h2 {
        font-size: 25px;
        text-align: center;
        margin: 0px;
    }

    .scroll{
        overflow-y: scroll;
        height: 100%
    }

    .user{
        font-size: 20px;
        margin-bottom: 20px;
    }
</style>