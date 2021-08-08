<template>
  <div class="shop">

    <div class="filter">
      <div>
        <h3>Home // Shop</h3>
      </div>
      <div>
        <select name="sorting" id="sort">
          <option value="" selected>Default order</option>
          <option value="">Low to High</option>
          <option value="">High to Low</option>
          <option value="">Most Populair</option>
        </select>
      </div>
    </div>

    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <img :src="require(`../assets/terrarium00${product.id}.jpg`)" /><!--https://nuxtjs.org/docs/2.x/directory-structure/assets-->
        <div class="show" v-on:click="GoToProduct" :id="product.id">show more</div>
        <div class="available" v-if="!product.available">out of stock</div>
        <div class="caption">
          <h4>{{ product.name }}</h4>
          <p>€ {{ product.price }}</p>
        </div>
        
      </div>
  </div>
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
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'shop',
  data() {
    return {
      id:1,
      products: [
        {id: 1, name: 'Waterfall V 1.0', price: 70, available: true},
        {id: 2, name: 'Angels from above', price: 150, available: true},
        {id: 3, name: 'Grow round', price: 86, available: true},
        {id: 4, name: 'Terrarium (medium)', price: 25, available: false}
      ]
    }
  },
}
</script>
<style scoped>
.shop{
  background-color: #97a8975b;
  width: 75%;
  margin: auto;
  padding-bottom: 25px;
  margin-top: 25px;
}
.filter{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 83%;
  margin: auto;
  padding: 25px 0px;
}
.filter h3{
  margin: 0;
}
#sort{
  width: 150px;
  font-size: 120%;
  color: white;
  border: 3px solid white;
  background-color: transparent;
  padding: 5px;
}
#sort:focus{
  color: black;
}
.show{
  opacity: 0;
  position: absolute;
  margin-top: -7%;
  margin-left: 1%;
  color: white;
  background-color: rgba(5, 5, 5, 0.3);
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
  height: 300px;
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