<script>
export default {
  name: 'HomeView',
}
</script>

<template>

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
  width: 100%;  
  height: 70vh;          
  display: flex;          
  justify-content: center; 
  align-items: center;    
}
</style>