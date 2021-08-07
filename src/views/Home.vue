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
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#space{
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  padding: 350px 0px;
  display: flex;
  justify-content: center;
  align-content: center;
}
#mid-temple h1{
  letter-spacing: 10px;
  font-size: 250%;
  padding: 0 10px;
  border-radius: 3px;
  background-color: rgba(5, 5, 5, 0.3);
}
#mid-temple h3{
  background-color: rgba(5, 5, 5, 0.2);
  border-radius: 3px;
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
</style>
