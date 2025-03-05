<script>
/*import FooterComponent from '../components/footerComponent.vue';*/

export default {
  name: 'HomeView',
  /*components: {
    FooterComponent
  },*/
}
</script>

<template>
  <div class="contentpage">
      <!--<img src="../assets/dummy4.jpg" class="showcase" alt="showcase1">
      <img src="../assets/dummy5.jpg" class="showcase" alt="showcase1">
      <img src="../assets/dummy6.jpg" class="showcase" alt="showcase1">-->

      <div class="hubbox"></div>
      <div class="hubpiece"></div>
      <div class="hubpiece2"></div>

  </div>
  <footer>
    <FooterComponent />
  </footer>
</template>

<style>
html, body {
  background-color: #1b1b1b;
}

body {
    color: #d4d4d4de;
    font-size: 14px;
    /* Replace #333333 with your desired font color */
  }
h1, h2, h3 {
    color: #d4d4d4de;
    font-size: 17px;
    /* Replace #333333 with your desired font color */
  }
.contentpage {
    font-size: 13px;
    font-family: "Courier New", Courier, monospace;
    /*min-height: 500px;*/
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;
}
.hubbox {
  width: 800px;             
  height: 600px;            
  background-color: #354464; 
  display: flex;
  justify-content: center;  
  align-items: center;      
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px;
  position: relative; 
  outline: 4px solid black;
}
.hubpiece {
  width: 150px;             
  height: 400px;            
  background-color: #354464; 
  display: flex;
  justify-content: center;  
  align-items: center;      
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 0px 50px;
  position: absolute;
  top: 5%;
  left: 3%;
  outline: 4px solid black;
}
.hubpiece2 {
  width: 487px;             
  height: 100px;            
  background-color: #354464; 
  display: flex;
  justify-content: center;  
  align-items: center;      
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  top: 5%;
  left: 27%;
  outline: 4px solid black;
}
/*.showcase {
  width: 400px;
  height: 400px;
}*/
</style>