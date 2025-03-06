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

      <div class="hubbox">
      <div class="hubpiece"></div>
      <div class="hubpiece2">
        <h1>QUXK</h1>
      </div>
      <div class="hubpiece3"></div>
      <div class="hubpiece4"></div>
      <div class="hubpiece5"></div>
      <div class="hubpiece6"></div>
      <div class="hubpiece7"></div>
      <div class="hubpiece8"></div>
      </div>


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
  @font-face {
  font-family: "ledlight";
  src: url("@/assets/fonts/ledlight/LEDLIGHT.otf") format("OpenType");
  font-weight: normal;
  font-style: normal;
}
h1 {
  font-family: "ledlight", sans-serif;
  color: #d4d4d4de;
  font-size: 72px;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contentpage {
  width: 100%;             /* Takes full width of the parent container */
  height: 70vh;           /* Full viewport height */
  display: flex;           /* Enable flexbox */
  justify-content: center; /* Center .hubbox horizontally */
  align-items: center;     /* Center .hubbox vertically */
}
.hubbox {
  width: 1000px;           /* Fixed width */
  height: 900px;           /* Fixed height */
  background-color: #354464;
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px;
  position: relative;
  outline: 4px solid black;
}
.hubpiece {
  width: 150px;             
  height: 530px;            
  background-color: #354464;       
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 0px 70px;
  position: absolute;
  top: 20%;
  left: 2%;
  outline: 4px solid black;

}
.hubpiece2 {
  width: 950px;             
  height: 150px;            
  background-color: #354464;     
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 70px 70px;
  position: absolute;
  top: 2%;
  left: 2%;
  outline: 4px solid black;
}
.hubpiece3 {
  width: 621px;             
  height: 250px;            
  background-color: #354464;     
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  top: 20.5%;
  left: 183px;
  outline: 4px solid black;
}
.hubpiece4 {
  width: 950px;             
  height: 150px;            
  background-color: #354464;     
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 70px 70px 7px 7px;
  position: absolute;
  top: 81%;
  left: 2%;
  outline: 4px solid black;
}
.hubpiece5 {
  width: 150px;             
  height: 530px;            
  background-color: #354464;       
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 70px 0px;
  position: absolute;
  top: 20%;
  left: 82.5%;
  outline: 4px solid black;

}
.hubpiece6 {
  width: 621px;             
  height: 80px;            
  background-color: #354464;     
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  top: 50%;
  left: 183px;
  outline: 4px solid black;
}
.hubpiece7 {
  width: 310.5px;             
  height: 170px;            
  background-color: #354464;     
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  top: 60.25%;
  left: 183px;
  outline: 4px solid black;
}
.hubpiece8 {
  width: 305px;             
  height: 170px;            
  background-color: #354464;     
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px 7px 7px 7px;
  position: absolute;
  top: 60.25%;
  left: 500px;
  outline: 4px solid black;
}
/*.showcase {
  width: 400px;
  height: 400px;
}*/
</style>