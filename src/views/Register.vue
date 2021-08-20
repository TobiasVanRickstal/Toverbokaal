<template>
    <div class="register">
        <div>
            <h1>Register</h1>
        </div>
        <div class="form">
            <form action="" v-on:submit.prevent="addNewUser">
                <div class="input">
                    <label for="username">Username</label><br>
                    <input type="text" id="username" placeholder="Username" v-model="userName">
                </div>
                <div class="input">
                    <label for="email">E-mail</label><br>
                    <input type="email" id="email" placeholder="E-mail" v-model="email">
                </div>
                <div class="input">
                    <label for="password">Password</label><br>
                    <input type="password" id="password" placeholder="Password" v-model="password">
                </div>
                <div class="input">
                    <label for="confirmPassword">Confirm Password</label><br>
                    <input type="password" id="confirmPassword" placeholder="Confirm Password">
                </div>
                <!-- <div class="input">
                    <label for="adress">Adress</label><br>
                    <input type="text" id="adress" placeholder="Adress">
                </div>
                <div class="input">
                    <label for="number">Number</label><br>
                    <input type="number" id="number" placeholder="Number">
                </div>
                <div class="input">
                    <label for="capital">capital</label><br>
                    <input type="text" id="capital" placeholder="Capital">
                </div> -->
                <div class="submit">
                    <input type="submit" value="Register">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
    data() {

    },
    setup() {
        const store= useStore();
        const user= computed(() => store.state.User.username);    
        
        return {
            user
        }
    },
    methods() {
        // addNewUser: function() {
            
        //     this.user.push({
        //         username: this.username,    
        //         email: this.email,
        //         password: this.password
        //     });
        // }
    }
}
</script>
<style scoped>
.register{
    width: 75%;
    margin: 25px auto;
    background-color: #97a8975b;
    padding: 25px 0;
}
.form{
    width: 75%;
    margin: auto;
}
.input input{
    width: 30%;
    margin: 10px;
    padding: 5px 0;
    border: none;
}
.submit input{
    margin-top: 25px;
    padding: 5px 10px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
}
.submit input:hover {
    background-color: rgba(5, 5, 5, 0.2);
}
</style>