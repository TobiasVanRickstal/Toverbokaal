<template>
  <div class="footer">
      <h2>toverbokaal</h2>
      <ul>
          <li><router-link to="/">Contact us</router-link></li>
          <li><router-link to="/">Delivery & shipment</router-link></li>
          <li><router-link to="/">Legal terms</router-link></li>
          <li><router-link to="/">Privacy police</router-link></li>
      </ul>
      <p id="bottom">&copy; Tobias Van Rickstal</p>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .footer{
        margin: 0;
        padding-top: 20px;
        background-color: rgba(5, 5, 5, 0.397);
        height: 300px;
    }
    .footer h2{
        letter-spacing: 10px;
        font-size: 150%;
        padding: 20px 0px;
        color: white;
    }
    #bottom{
        position: relative;
        bottom: 5px;
        width: 100%;
        color: white;
        margin-top: 50px;
    }
    ul li{
        color: white;
        margin: 10px;
    }

</style>
