<template>
    <div class="sidebar">
        <div class = "logo">
                <img src="../../images/Logo.svg" class="youchat">
            </div>
        <div class="down">
            
            <div class = "chatname"><a href="#Chat1" class = "name">Chat 1</a></div>
            <div class = "chatname"><a href="#Chat2" class = "name">Chat 2</a></div>
            <div class = "chatname"><a href="#Chat3" class = "name">Chat 3</a></div>
            <div class = "chatname"><a href="#Chat4" class = "name">Chat 4</a></div>
            <div class = "chatname"><a href="#Chat5" class = "name">Chat 5</a></div>
            <div class = "chatname"><a href="#Chat6" class = "name">Chat 6</a></div>
            <div class = "chatname"><a href="#Chat7" class = "name">Chat 7</a></div>
            <div class = "chatname"><a href="#Chat8" class = "name">Chat 8</a></div>
            <div class = "chatname"><a href="#Chat9" class = "name">Chat 9</a></div>
            <div class = "chatname"><a href="#Chat10" class = "name">Chat 10</a></div>
            <div class = "chatname"><a href="#Chat11" class = "name">Chat 11</a></div>
            <div class = "chatname"><a href="#Chat12" class = "name">Chat 12</a></div>
            <div class = "chatname"><a href="#Chat13" class = "name">Chat 13</a></div>
            <div class = "chatname"><a href="#Chat14" class = "name">Chat 14</a></div>
            <div class = "chatname"><a href="#Chat15" class = "name">Chat 15</a></div>
            <div class = "chatname"><a href="#Chat16" class = "name">Chat 16</a></div>
            <div class = "chatname"><a href="#Chat17" class = "name">Chat 17</a></div>
            <div class = "chatname"><a href="#Chat18" class = "name">Chat 18</a></div>
            <div class = "chatname"><a href="#Chat19" class = "name">Chat 19</a></div>
            <div class = "chatname"><a href="#Chat20" class = "name">Chat 20</a></div>
            <div class = "chatname"><a href="#Chat21" class = "name">Chat 21</a></div>
            <div class = "chatname"><a href="#Chat22" class = "name">Chat 22</a></div>
            <div class = "chatname"><a href="#Chat23" class = "name">Chat 23</a></div>
            <div class = "chatname"><a href="#Chat24" class = "name">Chat 24</a></div>
            <div class = "chatname"><a href="#Chat25" class = "name">Chat 25</a></div>
            <div class = "chatname"><a href="#Chat26" class = "name">Chat 26</a></div>
            <div class = "chatname"><a href="#Chat27" class = "name">Chat 27</a></div>
            <div class = "chatname"><a href="#Chat28" class = "name">Chat 28</a></div>
            <div class = "chatname"><a href="#Chat29" class = "name">Chat 29</a></div>
            <div class = "chatname"><a href="#Chat30" class = "name">Chat 30</a></div>
            <div v-bind:key="name.id" v-for="name in chatnamen">
                <Chatauswahl v-bind:chatname="name" />
            </div>
        </div>
    </div>
</template>

<script>
// import Chatauswahl from './chatauswahl.vue'
module.exports = {
    name: 'Sidebar',
    props: ["chatnamen"],
    // Chatauswahl
}
</script>

<style>

    .chatname {
        text-align: center;
        padding: 10px 0px;
        margin: 5px 0px;
        background: linear-gradient(to left, rgb(1, 81, 255), rgb(1, 182, 255));
    }

    .logo {
        text-align: center;
        padding: 10px 0px;
        margin-bottom: 10px;
        background: linear-gradient(to left, rgb(1, 81, 255), rgb(1, 182, 255));
    }
    
    .youchat{
        width: 90%;
    }

    .name {
        text-align: center;
        color: #fff;
        font-size: 40px;
        text-decoration: none;
    }


    .sidebar {
        height: 100%;
        background: linear-gradient(to left, rgb(1, 81, 255), rgb(1, 182, 255));
        display: flex;
        flex-flow: column;
        min-width: 20%;
        max-width: 500px;
        /* z-index: 1;
        top: 0;
        left: 0;
        position: fixed; */
       
    }

    .down {
        background: white;
        overflow-y: auto;
    }
</style>
