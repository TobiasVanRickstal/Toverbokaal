<template>
  <h1>Most popular products</h1>
  <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="require(`../assets/terrarium00${product.id}.jpg`)" /><!--https://nuxtjs.org/docs/2.x/directory-structure/assets-->
        <div class="show" v-on:click="GoToProduct">show more</div>
        <div class="available" v-if="!product.available">out of stock</div>
        <div class="caption">
          <h4>{{ product.name }}</h4>
          <p>€ {{ product.price }}</p>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data() {
    return {
      id:1,
      products: [
        {id: 1, name: 'Waterfall V 1.0', price: 70, available: true},
        {id: 2, name: 'Angels from above', price: 150, available: true},
        {id: 3, name: 'Grow round', price: 86, available: true},
        {id: 4, name: 'Terrarium (small)', price: 15, available: true},
        {id: 5, name: 'Terrarium (medium)', price: 25, available: false}
      ]
    }
  },
  methods:{
    GoToProduct(){
      alert("go to this product");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin: 0;
  background-color: #97a89794;
  padding: 25px 0px;
  color: white;
}
.show{
  opacity: 0;
  position: absolute;
  margin-top: -7%;
  margin-left: 1%;
  color: white;
  background-color: rgba(5, 5, 5, 0.1);
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 600;
  border: 2px solid white;
  padding: 10px;
  transition: ease-in 0.2s;
  cursor: pointer;
}
img:hover + .show, .show:hover{
  opacity: 1;
}
.available{
  opacity: 1;
  position: absolute;
  margin-top: -11%;
  margin-left: 3%;
  color: white;
  background-color: rgba(80, 11, 11, 0.63);
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 5px;
}
.products{
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
  background-color: #97a89794;
  width: 75%;
  height: 300px;
  padding: 0% 12.5%;
}
.product{
  max-width: 200px;
  align-self: center;
  margin: 0;
}
.caption{
  color: white;
  border: 2px solid white;
  background-color: rgba(5, 5, 5, 0.1);
  padding: 5px 0px;
}

img{
  width:  200px;
  height: 200px;
  object-fit: cover;
  /*https://stackoverflow.com/questions/19414856/how-can-i-make-all-images-of-different-height-and-width-the-same-via-css*/
  margin-bottom: 10px;
  cursor: pointer;
}
h4, p{
  margin: 0;
  padding: 0;
}
h4{
  margin-bottom: 5px;
  font-size: 90%;
}

</style>
