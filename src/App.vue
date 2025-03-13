<template>
  <v-app>
  <div class="backhome">
    <router-link to="/">
      <img class="rotate-3d" src="./assets/images/rhurbo_logo_c.png" alt="Back to Home" width="50" height="50" />
    </router-link>
  </div>
  <router-view />
  </v-app>
</template>
  

<script>

</script>


<style scoped>
/* Add perspective for a 3D effect */
.backhome {
  perspective: 500px;
}
/* Define the 3D spin animation */
@keyframes spin3D {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
/* Apply animation on hover */
.rotate-3d:hover {
  animation: spin3D 3s linear infinite;
  transform-style: preserve-3d;
}
</style>
