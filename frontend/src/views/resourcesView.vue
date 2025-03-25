<script>
import navigationbuttons from '@/components/navbuttons.vue';

export default {
  name: 'resourcesView',
  components: {
    navigationbuttons
  }
}
</script>

<template>
<div class="contentpage">
  <div class="hubbox"><navigationbuttons /></div>
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
h1, h2, h3 {
    color: #d4d4d4de;
    font-size: 17px;
    /* Replace #333333 with your desired font color */
  }
.contentpage {
    font-size: 13px;
    font-family: "Courier New", Courier, monospace;
    min-height: 500px;
    display: flex;
    align-items: center;
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
</style>