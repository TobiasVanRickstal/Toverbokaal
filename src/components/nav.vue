<template>
  <div id="nav">
    <router-link to="/Home">
      <img alt="page logo" src="../assets/logo.png">
    </router-link>
    
    <div>
      <ul>
        <li><router-link to="/Home"><h1>home</h1></router-link></li>
        <li><router-link to="/Shop"><h1>shop</h1></router-link></li>
        <li><router-link to="/Care"><h1>care</h1></router-link></li>
        <li><router-link to="/About"><h1>about</h1></router-link></li>
        <li><router-link to="/Contact"><h1>contact</h1></router-link></li>
        <li><router-link to="/Search"><font-awesome-icon icon="search"></font-awesome-icon></router-link></li>
        <li><router-link to="/Cart"><i>cart</i></router-link></li>
      </ul>
    </div>
  </div>
  
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: auto;
  height: 80px;
}
#nav{
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #97a89794;
  padding: 0px 10%;
}
ul{
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
ul li{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px;
  transition: ease-in-out 0.2s;
}
ul li h1{
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 100%;
}
ul li:nth-last-of-type(-n+2){
  max-width: 100px;
}
li:hover{
  color: white;
  cursor: pointer;
}

</style>
