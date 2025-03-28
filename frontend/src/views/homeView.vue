<script>
import "bootstrap/dist/css/bootstrap.min.css";
import BlogPosts from '@/components/BlogPosts.vue';
import marquee from '@/components/vuemarquee.vue';
import '@/assets/global.css';


export default {
  name: 'App',
  components: {
    BlogPosts,
    marquee,
  }
};

</script>

<template>
<div class="contentpage">
  <div class="hubbox">
    <div class="titlebar"><h1>CELLFOREST</h1></div>
    <div class="navbox" style="height: 142px;">
      <router-link to="/about"><button class="abtbttn">about</button></router-link>
      <router-link to="/contact"><button class="cntctbttn">contact</button></router-link>
      <router-link to="/resources"><button class="rscrsbttn">resources</button></router-link>
    </div>
    <div class="apiblog" style="width: 370px; height: 142px;"><BlogPosts></BlogPosts></div>
    <router-link to="/portfolio" class="tower-link" data-tooltip="MY PORTFOLIO">
      <img class="towertwo" src="@/assets/images/tower2.png" alt="tower2">
      <img class="towertwo-hover" src="@/assets/images/tower2tan.png" alt="tower2tan">
    </router-link>

    <div class="slideshow" style="width: 250px; height: 150px;"></div>

    <div class="marqueebox"><marquee></marquee></div>
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
@font-face {
  font-family: "millenium_2";
  src: url("@/assets/fonts/millenium_2/Millenium-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
h1 {
  font-family: "ledlight", sans-serif;
  color: #d4d4d4de;
  font-size: 60px !important;
  text-align: left;
}
/* ( ʃƪ˘ﻬ˘)(˘ ε˘ʃƪ) */
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
  background-color: #cccccc4e;
}
.hubbox {
  width: 700px;          
  height: 500px;          
  background-color: rgba(0, 0, 0, 0.5);
  border-style: ridge;
  border-width: 7px;
  border-color: rgb(231, 231, 231);
  border-radius: 50px 4px 100px 4px;
  /*outline: 4px solid black;*/
  box-sizing: border-box;
  position: relative;

  padding: 5px 5px 5px;
  margin: 50px 50px 50px;
  overflow: hidden;
}
.contentpage {
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* ⋆͛*͛ ͙͛ ⁑͛⋆͛*͛ ͙͛ ଘ(੭*ˊᵕˋ)੭*                            ੈ✩‧₊˚⋆͛*͛ ͙͛ ⁑͛⋆͛*͛ ͙͛ */
.navbox {
  position: absolute;
  top: 89px;
  display: flex; /* Align buttons in a row */
  flex-direction: column;
  justify-content: center;
  gap: 10px; /* Adds spacing between buttons */
  padding: 5px; /* Adds space inside the border */
  margin: 2px;
  border: 7px ridge #ccc; /* Border styling */
  border-radius: 4px; /* Optional: rounded edges */
  background-color: #cccccc69;
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
/* (⋆ˆ ³ ˆ)♥ ★⌒ヽ( ͡° ε ͡°)♥ */
.apiblog {
  position: absolute;
  top: 90px;
  left: 120px;
  background-color: rgba(255, 255, 255, 0.907);
  font-size: 10px;
  color: #1b1b1b;
  overflow: auto; /* Enable vertical scrolling */
  border: 7px ridge #ccc;
  border-radius: 4px 70px 4px 4px;
  padding: 10px 10px;

  direction: rtl; /* Moves the scrollbar to the left */
  text-align: left; /* Ensures text stays left-aligned */
}
.apiblog * {
  direction: ltr; /* Resets child elements to normal left-to-right */
}
/* (✿ŎヮŎ)｡:ﾟ૮ ˶ˆ ﻌ ˆ˶ ა ﾟ:｡ */
.marqueebox {
  position: absolute; /* Position relative to .hubbox */
  top: 460px;
  width: 700px;
}
.marquee-text-wrap {
  position: absolute;
  margin: auto;
  right: 18px;
  top: 7px;
  width: 686.5px;
  height: 20px;
  background-color: #1b1b1b;
}
.marquee-text-text {
  visibility: visible;
  width: 700px;
  height: 40px;
  top: 460px;
  color: #ccc;
  font-family: SimSun-ExtB;

}
.marquee-text-text p {
  visibility: visible;
  width: 700px;
  height: 40px;
  top: 460px;
  color: #ccc;
  font-family: SimSun-ExtB;
}
/* ⋆୨୧˚૮ ＾ﻌ＾ა˚୨୧⋆ʕっ•ᴥ•ʔっ */
.tower-link {
  position: absolute;
  right: -10px;
  top: 5px;
  width: 225px;
  height: 225px;
  display: block;
}
.tower-link .towertwo {
  width: 100%;
  height: 100%;
}
.tower-link .towertwo-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.tower-link:hover .towertwo-hover {
  opacity: 1;
}
.tower-link:hover .towertwo {
  opacity: 0;
}
.tower-link::after {
  content: attr(data-tooltip);
  position: absolute;
  top: 30px;
  right: 14px;
  transform: translateY(-50%);
  background-color: #ccc;
  color: #1b1b1b;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.tower-link::before {
  content: '';
  position: absolute;
  top: 30px;
  right: 97px;
  transform: translateY(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: transparent #ccc transparent transparent; /* Creates the left arrow */
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}
.tower-link:hover::after,
.tower-link:hover::before {
  opacity: 1; /* Show the tooltip */
  visibility: visible; /* Make it visible */
}

.slideshow{
  position:absolute;
  bottom: 25px;
  right: 5px;
  border: 7px ridge #ccc;
  border-radius: 70px 4px 70px 4px;
  background-color: #cccccc69;
}
</style>