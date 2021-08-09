<template>
    <div class="product-view">
        <h1 class="product-name">{{ state.product_item.name }}</h1>
        <div class="product-container">
            <div class="product-image">
                
                <Carousel
                    :starting-image="0"
                    :images="images"
                ></carousel>
            </div>
            <div class="product-info">
                <h2 class="category">Category</h2>
                <p class="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat recusandae placeat quae perspiciatis quidem minima tempore dicta nemo soluta, culpa quam corrupti sint ut. Dolor sed necessitatibus excepturi fuga molestias?</p>
                <p class="price">€ {{ state.product_item.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive,computed } from 'vue';
import { useRoute} from 'vue-router';
import Carousel from '../components/Carousel.vue';

export default {
  name: 'Product',
  components: {
    Carousel
  },
  
  setup() {

    const route = useRoute();
    const productId = computed(() => route.params.productId);

    const products = [
        {"id": 1, "name": 'Waterfall V 1.0', "price": 70, "available": true},
        {"id": 2, "name": 'Angels from above', "price": 150, "available": true},
        {"id": 3, "name": 'Grow round', "price": 86, "available": true},
        {"id": 4, "name": 'Terrarium (medium)', "price": 25, "available": false}
    ];

    const state = reactive({
        product_item: products[productId.value -1] || products[0]
    })
    return {
        state,
        productId
    }
  }
}
</script>
<style scoped>
    .product-view{
        background-color: #97a8975b;
        width: 75%;
        margin: 25px auto;
        color: white;
    }
    .product-name{
        padding-top: 50px;
    }
    .product-container{
        margin-top: 100px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 100px;
    }
    .product-image{
        margin: 0;
        padding: 0;
        width: 35%;
    }
    .product-image img{
        width: auto;
        height: 450px;
    }
    .product-info{
        width: 50%;
    }
    .category{
        margin: 80px;
    }
    .description{
        text-align: justify;
    }
    .price{
        width: 15%;
        margin: 10% 0;
        padding: 10px 5px;
        border: 2px solid white;
        float: right;
        cursor: pointer;
    }
    .price:hover{
        background-color: rgba(5, 5, 5, 0.1);
    }
</style>