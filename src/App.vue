<template>
  <div>
    <Nav/>
    <font-awesome-icon icon="user-secret" />
    <router-view/>
    <Footer/>
  </div>
  
</template>

<script>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  background-image: url("./assets/banner.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  letter-spacing: 2px;
  text-transform: uppercase;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
