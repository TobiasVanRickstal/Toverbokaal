<template>
  <h2>Most popular products</h2>
  <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="require(`../assets/terrarium00${product.id}.jpg`)"/><!--https://nuxtjs.org/docs/2.x/directory-structure/assets-->
        <router-link :to="'/Product/'+ product.id"><div class="show">show more</div></router-link>
        <div class="available" v-if="!product.available">out of stock</div>
        <div class="caption">
          <h4>{{ product.name }}</h4>
          <p>€ {{ product.price }}</p>
        </div>
      </div>
      
  </div>
  <div class="show_more">
    <router-link to="/shop"><h3>show all products</h3></router-link>
    
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


h2{
  margin: 0;
  background-color: #97a8975b;
  padding: 25px 0px 25px 0px;
  color: white;
  letter-spacing: 10px;
}
.show{
  opacity: 0;
  position: absolute;
  margin-top: -7%;
  margin-left: 1%;
  color: white;
  background-color: rgba(5, 5, 5, 0.2);
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
  background-color: #97a8975b;
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
.show_more{
  background-color: #97a8975b;
  padding: 20px;
}
.show_more h3{
  border: 2px solid white;
  width: 20%;
  padding: 10px 0px;
  margin: auto;
  transition: ease-in 0.2s;
  cursor: pointer;
}
.show_more:hover h3{
  background-color: rgba(5, 5, 5, 0.2);
}


</style>
