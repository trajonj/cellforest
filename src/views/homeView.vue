<script>
export default {
  name: 'HomeView',
}
</script>

<template>
<div class="contentpage">
  <div class="hubbox">
    <h1>TEST</h1>
  </div>
</div>
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
.hubbox {
  width: 10px;           /* Fixed width */
  height: 9px;           /* Fixed height */
  background-color: #354464;
  border-style: ridge;
  border-width: 5px;
  border-color: rgb(80, 138, 255);
  border-radius: 7px;
  position: relative;
  outline: 4px solid black;
}
.contentpage {
  width: 100%;             /* Takes full width of the parent container */
  height: 70vh;           /* Full viewport height */
  display: flex;           /* Enable flexbox */
  justify-content: center; /* Center .hubbox horizontally */
  align-items: center;     /* Center .hubbox vertically */
}
</style>