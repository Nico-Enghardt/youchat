<template>
        <center>
            <div class="unchecked" :class="{'checked':user.selected}">
                <input style="border: 2px;" type="checkbox" v-on:change="markComplete">
                {{user.name}}
            </div>
        </center>
</template>

<script>
module.exports = {
    name: 'Person',
    props: ["user"],
    data() {
        return {
            users: [
            ]
        }
    },
    methods: {
        markComplete(){
            this.user.selected = !this.user.selected;
        }
    }
}
</script>

<style scoped>
    .checked{
        text-decoration: underline; 
    }
</style>