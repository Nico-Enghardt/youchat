<template>
    <div class="sidebar">
        <h1>
        Chat auswählen
        </h1>
        <input type="text" v-model="search" placeholder="Chat Suchen..."/>
        <div class="scroll">
            <div v-for="name in filteredNames" :key="name.id" class="chat">
                <center>
                    <input type="radio" :id="name.name" name="chat" :value="name.name">
                    {{name.name}}
                </center>
            </div>
        </div>
    </div>
</template>

<script>
module.exports = {
    name: 'chat',
    // props: ["chatnamen"],
    data() {
        return {
            search: '',
            chatnames: [
                {
                    name: "Chat 1",
                    id: 1,
                },
                {
                    name: "Chat 2",
                    id: 2,
                },
                {
                    name: "Chat 3",
                    id: 3,
                },
                {
                    name: "Chat 4",
                    id: 4,
                },
                {
                    name: "Chat 5",
                    id: 5,
                },
                {
                    name: "Chat 6",
                    id: 6,
                },
                {
                    name: "Chat 7",
                    id: 7,
                },
                {
                    name: "Chat 8",
                    id: 8,
                },
                {
                    name: "Chat 9",
                    id: 9,
                },
                {
                    name: "Chat 10",
                    id: 10,
                },
                {
                    name: "Chat 11",
                    id: 11,
                },
                {
                    name: "Chat 12",
                    id: 12,
                },
                {
                    name: "Chat 13",
                    id: 13,
                },
                {
                    name: "Chat 14",
                    id: 14,
                },
                {
                    name: "Chat 15",
                    id: 15,
                },
                {
                    name: "Chat 16",
                    id: 16,
                },
                {
                    name: "Chat 17",
                    id: 17,
                },
                {
                    name: "Chat 18",
                    id: 18,
                },
                {
                    name: "Chat 19",
                    id: 19,
                },
                {
                    name: "Chat 20",
                    id: 20,
                }
            ]
        }
    },
    methods: {
    },
    computed: {
        filteredNames: function() {
            return this.chatnames.filter((chatname) => {
                return chatname.name.match(this.search);
            })
        }
    }
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

    .chat{
        font-size: 20px;
        margin-bottom: 20px;
    }

    .scroll{
        overflow-y: scroll;
        height: 100%;
    }

    input{
        width: 100%;
        text-align: center;
    }

    h1 {
        font-size: 40px;
        text-decoration: underline;
        text-align: center;
    }

    input[type="radio"] {
        width: 20px;
        height: 20px;
    }
</style>