<script>
import "bootstrap/dist/css/bootstrap.min.css";
</script>

<template>
<div class="contentpage">
  <div class="hubbox">
    <div class="titlebar"><h1>TEST</h1></div>
    <div class="navbox">
      <router-link to="/about"><button class="abtbttn">about</button></router-link>
      <router-link to="/contact"><button class="cntctbttn">contact</button></router-link></div>
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
  border-width: 7px;
  border-color: rgb(231, 231, 231);
  border-radius: 4px;
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
/* ⋆͛*͛ ͙͛ ⁑͛⋆͛*͛ ͙͛ ଘ(੭*ˊᵕˋ)੭*                            ੈ✩‧₊˚⋆͛*͛ ͙͛ ⁑͛⋆͛*͛ ͙͛ */
.navbox {
  width: 120px;
  height: 170px;
  margin: 0 auto;
  padding: 20px;
  border-width: 4px;
  border-radius: 4px;
  border-style: ridge;
  border-color: rgb(169, 169, 169);
  position: absolute;
  top: 70px;
  left: 15px;

}
/* ｡*ﾟ✲*☆(๑òᆺó๑)｡*ﾟ✲*☆*̣̥☆·͙̥‧‧̩̥·‧•̥̩̥͙‧·‧̩̥˟͙冬˟͙‧̩̥·‧•̥̩̥͙‧·‧̩̥‧·͙̥̣☆*̣̥ */
.abtbttn{

}
.cntctbttn{

}
</style>