<template>
    <div class="contact">
        <div>
            <h1>Contact</h1>
            <h3>Don't hesitate to contact me, it doesn't mather what you want to know</h3>
        </div>
        <div class="form">
            <form action="">
                <div class="input">
                    <label for="name">Name</label><br>
                    <input type="text" id="name" placeholder="Name">
                </div>
                <div class="input">
                    <label for="last-name">Last name</label><br>
                    <input type="text" id="last-name" placeholder="Last Name">
                </div>
                <div class="input">
                    <label for="email">E-mail</label><br>
                    <input type="email" id="email" placeholder="Email">
                </div>
                <div class="textarea">
                    <label for="message">Message</label><br>
                    <textarea name="message" id="message" placeholder="Place text here"></textarea>
                </div>
                <div class="submit">
                    <input type="submit" value="Send">  
                </div>
            </form>
        </div>
        <div class="extraInfo">
            <h2>The form isn't really your style?</h2>
            <h3>Contact information</h3>
            <div class="table">
                <p>E-mail: <a href="mailto:contact@toverbokaal.com">contact@toverbokaal.com</a></p>      
                <p>Phone: 04/12345678</p>   
                <p>Instagram: <a href="https://www.instagram.com/toverbokaal/">https://www.instagram.com/toverbokaal/</a></p>
                <p>Facebook: <a href="https://www.facebook.com/toverbokaal/">https://www.facebook.com/toverbokaal/</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
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
    .textarea textarea{
        width: 30%;
        height: 100px;
        margin: 10px;
        padding: 5px 0;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        border: none;
    }
    .submit{
        width: 75%;
        position: relative;
    }
    .submit input{
        position: relative;
        right: -33%;
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
        background-color: rgba(5, 5, 5, 0.1);
    }
    .extraInfo{
        width: 75%;
        margin: auto;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    .table{
        width: 60%;
        margin: auto;
        margin-top: 50px;
        text-align: left;
    }
</style>