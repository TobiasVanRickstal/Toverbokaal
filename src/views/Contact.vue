<template>
    <div class="contact">
        <div>
            <h1>Contact</h1>
            <h2>Don't hesitate to contact me, doesn't mather what you want to know</h2>
        </div>
        <div class="form">
            <form action="">
                <div class="input">
                    <label for="">Name</label><br>
                    <input type="text" id="name" placeholder="name">
                </div>
                <div class="input">
                    <label for="">Last name</label><br>
                    <input type="text" id="lastName" placeholder="Last Name">
                </div>
                <div class="input">
                    <label for="">E-mail</label><br>
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
                <p>E-mail: contact@toverbokaal.com</p>      
                <p>Phone: 04/12345678</p>   
                <p>Instagram: https://www.instagram.com/toverbokaal/</p>   
                <p>Facebook: https://www.facebook.com/toverbokaal/</p>
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
    }
    .textarea textarea{
        width: 30%;
        margin: 10px;
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
    }
    .extraInfo{
        width: 75%;
        margin: auto;
        margin-top: 100px;
        margin-bottom: 50px;
    }
    .table{
        width: 50%;
        margin: auto;
        margin-top: 50px;
        text-align: left;
    }
</style>