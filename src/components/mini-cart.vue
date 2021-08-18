<template>
    <div class="dropdown">
        <div class="items">
            <div class="item">
                <img src="../assets/terrarium003.jpg" alt="item_title">
                <div>
                   <p>Product title</p>
                    <p class="priceDelete">1x € 10 <a href="" id="delete"><fa icon="trash-alt"></fa></a></p>
                </div>
            </div>
            <hr>
        </div>
        <div class="total">
            <p>Total : €10</p>
            <router-link to="/Cart">go to cart</router-link>
        </div>
        <div v-if="user">{{ user }}</div>

    </div>
</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style scoped>
.item{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.item img{
    width: 50px;
}
.item div p{
    margin: 0;
}
.priceDelete{
    text-align: end;
}
.dropdown{
    background-color: #97a8975b;
    padding: 10px 15px;
    width: 15%;
}
</style>