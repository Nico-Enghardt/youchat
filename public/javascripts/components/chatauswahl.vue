<template>
    <div>
        <div>
                {{names.name}}
        </div>
        <!-- <div class = "chatn"> -->
        <!-- {{chatname.name}} -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
  name: 'Chatauswahl',
  props: ["chatname"]
}
</script>

<style>
    .chatn {
        text-align: center;
        color: rgb(0, 0, 0);
        font-size: 40px;
        width: 350px;
        padding: 10px 0px;
        margin-bottom: 5px;
        background-image: linear-gradient(to left, rgb(1, 81, 255), rgb(1, 182, 255));
    }
</style>
