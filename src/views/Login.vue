<template>
    <div class="contact">
        <div>
            <h1>Login</h1>
        </div>
        <div class="form">
            <form action="">
                <div class="input">
                    <label for="username">Username</label><br>
                    <input type="text" id="username" placeholder="Username">
                </div>
                <div class="input">
                    <label for="password">Password</label><br>
                    <input type="password" id="password" placeholder="Password">
                </div>
                <div class="submit">
                    <input type="submit" value="Login">
                </div>
            </form>
            <p>Don't have an account yet?</p>
            <router-link to="/Register"><button>Register</button></router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.contact{
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
button{
    padding: 5px 10px;
    border: 2px solid white;
    background-color: transparent;
    color: white;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
}
button:hover{
    background-color: rgba(5, 5, 5, 0.2);
}
</style>