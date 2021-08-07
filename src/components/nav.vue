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
        <li><router-link to="/Search"><fa icon="search"></fa></router-link></li>
        <li><router-link to="/Cart"><fa icon="shopping-cart"></fa></router-link></li>
      </ul>
    </div>
  </div>
  
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
ul li:nth-last-of-type(-n+2){
  max-width: 100px;
  color: white;
}
li:hover{
  color: white;
  cursor: pointer;
}

</style>
