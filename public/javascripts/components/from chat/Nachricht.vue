<template>
    <div>
        <div v-if="absender !== this.benutzer" class="message_not_yours">
            <img src="../../images/Ecke.svg" class ="not_yours">
            <div class = "nachricht_not_yours">
                <div class="absender">
                    {{absender}}
                </div>
                {{text}}
                <div class="date">
                    {{hour}}:{{minute}}
                </div>
            </div>
        </div>
        <div v-if="absender === this.benutzer" class="message_yours">
            <div class = "nachricht_yours">
                {{text}}
                <div class="date">
                    {{hour}}:{{minute}}
                </div>
            </div>
            <img src="../../images/Ecke.svg" class ="yours">
        </div>
    </div>
</template>

<script>
module.exports = {
    name: "Nachricht",
    props: ["text", "absender", "hour", "minute", "benutzer"],
}
</script>

<style scoped>
    

    .nachricht_not_yours {
        background: rgba(17, 176, 1, 0.58);
        display: inline-block;
        border: solid 5px;
        border-radius: 20px;
        border-color: white;
        font-size: 35px;
        padding: 5px;
        color: white;
    }

    .nachricht_yours {
        background: rgba(255, 1, 70, 0.45);
        border: solid 5px;
        border-radius: 20px;
        display: inline-block;
        border-color: white;
        font-size: 35px;
        padding: 5px;
        color: white;
    }

    .not_yours{
        position: absolute;
        transform: scale(-1);
        top: 0;
        -ms-user-select: None;
        -moz-user-select: None;
         user-select: None;
    }

    .yours{
        margin: auto 0px 0px -20px;
        position: absolute;
        bottom: 0;
        user-select: None;
    }

    .message_not_yours{
        margin-top: 30px;
        margin-left: 50px;
        display: block;
        width: max-content;
        overflow: auto;
        max-width:60%;
        position: relative;
        
    }

    .message_yours{
        margin-right: 50px;
        margin-left: auto;
        margin-top: 30px;
        display: block;
        width: max-content;
        max-width: 60%;
        position: relative;
    }

    .absender {
        text-decoration: underline;
        font-size: 20px;
    }

    .date {
        margin-left: auto;
        color: rgb(200, 200, 200);
        font-size: 15px;
        width: max-content;
    }
</style>