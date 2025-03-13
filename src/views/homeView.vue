<script>
export default {
  name: 'HomeView',
}
</script>

<template>
<div class="contentpage">
  <div class="hubbox">
    <div class="titlebar"><h1>RHURBO</h1></div>
      <!-- <div class="navbuttons"><button class="portfolio">Portfolio</button>
      <button class="portfolio">About</button>
      <button class="portfolio">Portfolio</button>
        <button class="portfolio">Portfolio</button></div> -->

        <v-container class="d-flex justify-center">
            <v-card class="pa-4 tonal-card" variant="tonal" width="300">
              <v-btn-group vertical>
              <v-btn variant="tonal" color="primary" to="/about">Button 1</v-btn>
              <v-btn variant="tonal" color="secondary" to="/portfolio">Button 2</v-btn>
              <v-btn variant="tonal" color="success" to="/resources">Button 3</v-btn>
              </v-btn-group>
            </v-card>
        </v-container>
   
  </div>
</div>
</template>

<style>
html, body {
  height: 100%;  /* Ensures full height */
  margin: 0;
  padding: 0;
  background: url("@/assets/images/tony-stoddard-DgZxBnZeQo8-unsplash.jpg") no-repeat center center fixed;
  background-size: cover; /* Ensures the image fills the entire screen */
}
body {
    color: #d4d4d4de;
    font-size: 10px;
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
  font-size: 60px;
  text-align: center;
}
.titlebar{
  width: 200px;
  height: 70px;
  background-color: transparent;
  margin-left: 10px;
}
.hubbox {
  width: 700px;          
  height: 500px;          
  background-color: rgba(0, 0, 0, 0.5);
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(201, 201, 201);
  border-radius: 7px;
  /*outline: 4px solid black;*/
  box-sizing: border-box;
  position: fixed;

  padding: 5px 5px 5px;
  margin: 50px 50px 50px;
}
.contentpage {
  width: 100vw;             /* Takes full width of the parent container */
  height: 70vh;           /* Full viewport height */
  display: flex;           /* Enable flexbox */
  justify-content: center; /* Center .hubbox horizontally */
  align-items: center;     /* Center .hubbox vertically */
}
.navbuttons{
  width: 70px;
  height: 100px;
  background-color: transparent;
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(201, 201, 201);
  border-radius: 7px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center buttons horizontally */
  justify-content: center; /* Evenly distribute buttons */
  gap: 5px; /* Adds spacing between buttons */
  padding: 10px;
}
.tonal-card {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
}

</style>