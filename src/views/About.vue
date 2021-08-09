<template>
    <div class="wrapper">
        <div class="title">
            <h1>About</h1>
        </div>
        <div class="container">
            <div class="side-img">
                <img src="../assets/about002.jpg" alt="">
                <img src="../assets/about001.jpg" alt="">
                <img src="../assets/banner-shop.jpg" alt="">
            </div>
            <div class="care-tips">
                <div class="care-tip">
                    <h3>About me</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda eos recusandae natus doloribus eum ab repudiandae, fugiat ipsum quas repellendus! Officiis nostrum fugiat esse eius incidunt delectus voluptate! Ea, ab.</p>
                </div>
                <div class="care-tip">
                    <h3>Why Terraria</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam aut, hic harum fugit vero nihil tempore dolor sed provident distinctio eum, possimus placeat earum quis repellat officiis similique recusandae.</p>
                </div>
                <div class="care-tip">
                    <h3>inspirations</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam aut, hic harum fugit vero nihil tempore dolor sed provident distinctio eum, possimus placeat earum quis repellat officiis similique recusandae.</p>
                </div>
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
    .wrapper{
        margin: 25px auto;
        background-color: #97a8975b;
        width: 75%;
    }
    .title{
        width: 20%;
        padding-top: 25px;
        margin: auto;
    }
    .container{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-bottom: 50px;
    }
    .side-img{
        width: 30%;
    }
    .side-img img{
        width: auto;
        height:200px;
    }
    .care-tips{
        width: 60%;
        text-align: justify;
    }
    .care-tip{
        margin: 50px 0px;
    }
</style>