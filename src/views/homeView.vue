<script>
export default {
  name: 'HomeView',
}
</script>

<template>
  <div class="container">
    <h1>HOME</h1>
    <p>Page content goes here</p>
    <img src="@/assets/images/dummy4.jpg" alt="showcase1">
  </div>
</template>

<style>
html, body, #app {
  background-color: #1b1b1b;
  margin: 0;
  height: 100%;
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
  text-align: center;
}
.container {
  width: 1088px !important;
  height: 1163px !important;
  padding: 70px;
  margin: 90px auto; /* Centers horizontally */
  border: 5px solid rgb(91, 154, 255); /* Optional */
  box-sizing: border-box;
}

</style>