<template>
    <div class="dropdown">
        <div class="items" v-for="(product, index) in cart" v-bind:item="product" v-bind:index="index" v-bind:key="product.id">
            <div class="item">
                <img src="../assets/terrarium003.jpg" alt="item_title" class="align-left">
                <div class="item-info">
                    <p>{{ product.name }}</p>
                    <p class="priceDelete">1x € {{ product.price}}<a href=""><fa icon="trash-alt"></fa></a></p>
                </div>
            </div>
        </div>
        <div class="total">
            <p>Total : €10</p>
            <router-link to="/Cart">go to cart</router-link>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { computed } from 'vue';

export default {
    name: 'mini-cart',
    data() {

    },
    setup() {
        const store = useStore();
        const cart = computed(() => store.state.Cart.cart);

        return{
            cart,
        }
    },
}
</script>

<style scoped>
.item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 5px auto;
    padding-bottom: 5px;
    border-bottom: 1px solid white;
}
.item-info{
    flex-direction: column;
    padding-bottom: 5px;
    text-align: right;
}
.item hr{
    width: 100%;
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