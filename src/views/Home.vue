<template>
  <div class="home">
    <div id="space">
      <div id="mid-temple">
        <h1>toverbokaal</h1>
        <h3>Magical plants</h3>
        <router-link to="/Shop"><button>Shop now</button></router-link>
      </div>
    </div>
    <ProductBar/>
  </div>
</template>

<script>
import ProductBar from '../components/product-bar.vue';


export default {
  name: 'Home',
  components: {
    ProductBar
  }
}
</script>
<style scoped>
@media screen and (min-width:320px) and (max-width:640px) {
  
}
@media screen and (min-width:641px){
  
  #space{
    color: white;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding: 7.2% 0px 7%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  #mid-temple h1{
    letter-spacing: 10px;
    font-size: 250%;
  }
  #mid-temple button{
    background-color: transparent;
    border: 2px solid white;
    margin-top: 20px;
    padding: 10px;
    color: white;
    background-color: rgba(5, 5, 5, 0.2);
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 120%;
    cursor: pointer;
    transition: ease-in 0.2s;
  }
  #mid-temple button:hover{
    color: black;
    background-color: white;
  }
}
</style>
