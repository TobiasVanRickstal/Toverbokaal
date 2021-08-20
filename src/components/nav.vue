<template>
  <div class="navigation">
    <router-link to="/Home">
      <img alt="page logo" src="../assets/logo-test.png">
    </router-link>
    
    <div>
      <ul>
        <li><router-link to="/Home"><h1>home</h1></router-link></li>
        <li><router-link to="/Shop"><h1>shop</h1></router-link></li>
        <li><router-link to="/Care"><h1>care</h1></router-link></li>
        <li><router-link to="/About"><h1>about</h1></router-link></li>
        <li><router-link to="/Contact"><h1>contact</h1></router-link></li>
        <li><fa class="icon" icon="shopping-cart" @click="toggleCart = !toggleCart"></fa></li>
        <mini-cart id="mini-cart" v-if="toggleCart"/>
        <li><fa class="icon" icon="user" id="user" @click="toggleUser = !toggleUser"></fa>
          <ul class="user-menu" v-if="toggleUser">
            <!-- <li v-for="user in users" :key="user">{{ user.username }}</li> -->
            <li v-if="users">{{ users[userID].username }}</li>
            <li v-if="users"><router-link to="/">Logout</router-link></li>
            <li v-else><router-link to="/Login">Login</router-link></li>
            <li id="require_logged_in"><router-link to="/LogOut">Logout</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import MiniCart from './mini-cart.vue';

export default{
  name: 'nav',
  components: { MiniCart},
  data() {
    return {
      toggleCart: false,
      toggleUser: false,
      userID: 1
    }
  },
  setup() {
    const store = useStore();
    const users = computed(() => store.state.User.user);

    return{
      users
    }
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#require_logged_in{
  display: none;
}
img{
  width: auto;
  height: 50px;
  margin-left: 320px;
}
.navigation{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #97a8975b;
}
ul{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15%;
}
ul li{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 21px;
  transition: ease-in-out 0.2s;
}
ul li h1{
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 100%;
  color: white;
  transition: ease-in-out 0.2s;
}
ul li:nth-last-of-type(-n+3){
  max-width: 100px;
  color: white;
}
ul li h1:hover{
  color: brown;
}
.user-menu{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 7.3%;
  right: 1.5%;
  margin: 0;
  padding: 0;
  background-color: #97a8975b;
}
.icon{
  cursor: pointer;
}
.icon:hover {
  color: brown;
}
#mini-cart{
  position: absolute;
  top: 7.3%;
  right: 9%;
}
</style>
