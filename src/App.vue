<template>
  <div id="app">
    <!-- https://vue-burger-menu.netlify.app/# -->
      <component id="phone_nav" :is="currentMenu" :right="side">
        <router-link to="/Home">
            <fa icon="home"></fa>
            <span>home</span>
        </router-link>
        <router-link to="/Shop">
            <fa icon="shopping-cart"></fa>
            <span>shop</span>
        </router-link>
        <router-link to="/Care">
            <fa icon="hand-holding-medical"></fa>
            <span>care</span>
        </router-link>
        <router-link to="/About">
            <fa icon="info-circle"></fa>
            <span>about</span>
        </router-link>
        <router-link to="/contact">
            <fa icon="id-badge"></fa>
            <span>contact</span>
        </router-link>
        <router-link to="/Cart">
            <fa icon="shopping-bag"></fa>
            <span>cart</span>
        </router-link>
    </component>

    <main id="page-wrap">

      <Nav id="desktop_nav"/>

      <font-awesome-icon icon="user-secret"/>
<!-- https://stackoverflow.com/questions/56681106/vue-hide-view-components-conditionally-based-on-url -->
      <div class="back-arrow" @click="$router.go(-1)" v-if="!isHome">
        <fa icon="chevron-left"></fa>
      </div>

      <router-view/>

      <Footer/>

    </main>
  </div>
  
</template>

<script>
import Nav from './components/nav.vue';
import Footer from './components/footer.vue';
import pushrotate from './components/Menu/pushRotate.vue';
import Menu from './components/Menu';
import carousel from './components/Carousel.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    pushrotate,
    Menu,
    carousel
  },
  data() {
    return{
      menus: {
        pushRotate : { buttonText: 'Push Rotate'}
      },
      side: 'left',
      currentMenu: 'pushrotate'
    };
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

@media screen and (min-width:320px) and (max-width:640px) {
  #phone_nav{
    display: flex;
  }
  #desktop_nav{
    display: none;
  }
}
@media screen and (min-width:641px){
  #phone_nav{
    display: none;
  }
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url("./assets/banner-product.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
body{
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.back-arrow{
  font-size: 25px;
  position: absolute;
  margin-left: 15%;
  margin-top: 3%;
  color: white;
  border: 2px solid white;
  padding: 3px 5px;
}
a{
  text-decoration: none;
  color: inherit;
}
a:hover{
  color: brown;
}
</style>
