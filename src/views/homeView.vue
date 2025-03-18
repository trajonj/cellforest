<script>
import "bootstrap/dist/css/bootstrap.min.css";
</script>

<template>
<div class="contentpage">
  <div class="hubbox">
    <div class="titlebar"><h1>NXTYR</h1></div>
    <div class="navbox">
      <router-link to="/about"><button class="abtbttn">about</button></router-link>
      <router-link to="/contact"><button class="cntctbttn">contact</button></router-link>
      <router-link to="/resources"><button class="rscrsbttn">resources</button></router-link></div>
    <!-- <div class="scrtlogo"><img src="@/assets/images/rhurbo_logo.png"></div> -->
    <!-- <div class="scrtlogo2"><img src="@/assets/images/rhurbo_logo_extended.png"></div> -->
    <iframe src="https://rhurbo.blogspot.com" width="370" height="142px"></iframe>

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
@font-face {
  font-family: "ledlight";
  src: url("@/assets/fonts/ledlight/LEDLIGHT.otf") format("OpenType");
  font-weight: normal;
  font-style: normal;
}
h1 {
  font-family: "ledlight", sans-serif;
  color: #d4d4d4de;
  font-size: 60px !important;
  text-align: left;
}
.titlebar{
  height: 80px;
  width: 500px;
  display: flex; /* Align buttons in a row */
  flex-direction: column;
  padding: 5px; /* Adds space inside the border */
  margin: 2px;
  border: 7px solid #ccc; /* Border styling */
  border-style: ridge;
  border-radius: 40px 4px 70px 4px; /* Optional: rounded edges */
  background-color: rgba(76, 76, 76, 0.268); /* Light background */
}
.hubbox {
  width: 700px;          
  height: 500px;          
  background-color: rgba(0, 0, 0, 0.5);
  border-style: ridge;
  border-width: 7px;
  border-color: rgb(231, 231, 231);
  border-radius: 4px;
  /*outline: 4px solid black;*/
  box-sizing: border-box;
  position: relative;

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
/* ⋆͛*͛ ͙͛ ⁑͛⋆͛*͛ ͙͛ ଘ(੭*ˊᵕˋ)੭*                            ੈ✩‧₊˚⋆͛*͛ ͙͛ ⁑͛⋆͛*͛ ͙͛ */
.navbox {
  display: flex; /* Align buttons in a row */
  flex-direction: column;
  gap: 10px; /* Adds spacing between buttons */
  padding: 5px; /* Adds space inside the border */
  margin: 2px;
  border: 7px solid #ccc; /* Border styling */
  border-style: ridge;
  border-radius: 4px; /* Optional: rounded edges */
  background-color: rgba(255, 255, 255, 0.1); /* Light background */
  width: fit-content; /* Adjusts to content width */
}
/* ｡*ﾟ✲*☆(๑òᆺó๑)｡*ﾟ✲*☆*̣̥☆·͙̥‧‧̩̥·‧•̥̩̥͙‧·‧̩̥˟͙冬˟͙‧̩̥·‧•̥̩̥͙‧·‧̩̥‧·͙̥̣☆*̣̥ */
.abtbttn{
  width: 80px;
  margin: 2px;
}
.cntctbttn{
  width: 80px;
  margin: 2px;
}
.rscrsbttn{
  width: 80px;
  margin: 2px;
}
/* .scrtlogo img{
  width: 100px;
  height: auto;
} */
 /* .scrtlogo2 img{
  width: 200px;
  height: auto;
  position: absolute;
  bottom: 5px;
  left: 5px;
} */
iframe {
  position: absolute;
  top: 90px;  /* Adjust the distance from the top */
  left: 120px; /* Adjust the distance from the left */
  border: 7px solid #ccc; /* Border styling */
  border-style: ridge;
  border-radius: 4px 70px 4px 40px;
}
</style>