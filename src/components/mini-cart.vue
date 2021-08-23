<template>
    <div class="dropdown">
        <div class="items" v-for="(product, index) in cart" v-bind:item="product" v-bind:index="index" v-bind:key="product.id">
            <div class="item">
                <img :src="require(`../assets/terrarium00${product.id}.jpg`)" alt="item_title" class="align-left">
                <div class="item-info">
                    <p>{{ product.name }}</p>
                    <p class="priceDelete">1x € {{ product.price}}<button v-on:click="removeElement(index)"><fa icon="trash-alt"></fa></button></p>
                </div>
            </div>
        </div>
        <div class="total">
            <p>Total : € {{ total }}</p>
            <router-link to="/Cart">go to cart</router-link>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { computed } from 'vue';

export default {
    name: 'mini-cart',
    setup() {
        const store = useStore();
        const cart = computed(() => store.state.Cart.cart);
        // var images = "../assets/terrarium00" . {{product.id}} . ".jpg";

        return{
            cart,
        }
        
    },
     data() {
        
    },
    computed: {
        total () {//https://forum.vuejs.org/t/v-for-total-sum-cant-get-it-right/26986
            return this.cart.reduce( (sum, product) => {
            return sum + (product.price)
            }, 0)
        },
    },
    methods:{
        removeElement: function(index){
            if(confirm("Do you really want to delete?")){
                // https://stackoverflow.com/questions/54156534/how-to-create-alert-confirm-box-in-vue
                this.cart.splice(index, 1);
                // https://stackoverflow.com/questions/35459010/vuejs-remove-element-from-lists
            }
        },
    }
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