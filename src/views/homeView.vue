<script>
export default {
  name: 'HomeView',
}
</script>

<template>
<div class="contentpage">
  <div class="hubbox">
    <div class="titlebar"><h1>RHURBO</h1></div>
    <div class="navbuttons"><button class="glass-btn">Glassy</button></div>
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
  position: fixed;
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
  
}
.glass-btn {
  user-select: none;
  font-size: clamp(1.2rem, 5vw + 1rem, 2.5rem);
  width: 10em;
  height: 4em;
  
  border-radius: 0.5em;
  background-image: linear-gradient(#0003,#0000);
  
  box-shadow:
		0 -0.125em 0.25em #0002,
		0 0.25em 0.25em hsl(var(--h) var(--s) var(--l) / 0.5),
		0 0 0 0.1em hsl(var(--h) var(--s) var(--l) / 0.5),
		0 0.175em 0.3em hsl(var(--h) var(--s) var(--l) / 0.5) inset,
		0 -0.025em 0.175em hsl(var(--h) var(--s) var(--l) / 0.4) inset,
		0 -0.25em 1em 0.3em hsl(var(--h) var(--s) var(--l) / 0.3) inset,
		0 0.6em 0 hsl(var(--h) var(--s) var(--l) / 0.3) inset,
		0 2em 1em #0004;
  backdrop-filter: blur(0.15em);
  position: relative;
  display: grid;
  place-content: center;
  color: hsl(var(--h) var(--s) var(--l) / .7);
  text-shadow: 
    0.03em 0.03em #fff5,
    -0.03em -0.03em #0005;
  cursor: pointer;
  transition: 0.1s ease;
  padding-top: 0.2em;
}
.glass-btn:before {
  content: '';
	position: absolute;
  top: 100%;
  width: 80%;
  left: 10%;
  height: 1.5em;
  
  background-image: 
    radial-gradient(
      100% 100% at center,
      hsla(var(--h),var(--s),80%,0.25),
      hsla(var(--h),var(--s),80%,0) 50%);
}
.glass-btn:after {
  content: '';
  inset: 0;
  top: 0.5em;
  position: absolute;
  
  background-image: 
    linear-gradient(
      105deg,
      transparent 20%,
      hsl(var(--h) var(--s) var(--l) / .2) 20%,
      hsl(var(--h) var(--s) var(--l) / .2) 30%,
      transparent 30%,
      transparent 32%,
      hsl(var(--h) var(--s) var(--l) / .2) 5%,
      hsl(var(--h) var(--s) var(--l) / .2) 40%,
      transparent 0%
    );
  background-size: 400% 100%;
  background-position: 100% 0%;
  transition: .3s ease;
}
.glass-btn:active:after {
  background-position: -50% 0%;
}
.glass-btn:active {
  translate: .01em .25em;
  box-shadow:
		0 -0.125em 0.25em #0002,
		0 0.25em 0.25em hsl(var(--h) var(--s) var(--l) / 0.5),
		0 0 0 0.1em hsl(var(--h) var(--s) var(--l) / 0.5),
		0 0.175em 0.3em hsl(var(--h) var(--s) var(--l) / 0.8) inset,
		0 -0.025em 0.175em hsl(var(--h) var(--s) var(--l) / 0.4) inset,
		0 -0.25em 1em 0.3em hsl(var(--h) var(--s) var(--l) / 0.3) inset,
		0 0.6em 0 hsl(var(--h) var(--s) var(--l) / 0.3) inset,
		0 1em 0.5em #0004;
  backdrop-filter: blur(0.08em);
}
.glass-btn:active:before {
  height: 1em;
}
</style>