<script>
export default {
  name: 'vueMarquee',
  data() {
    return {
    };
  }
};
</script>

<template>
<vueMarquee
  id="marquee-slider-text"
  :space="150"
  :speed="10000"
  :width="200"
>
  <span>Schnapsterdog</span>
  <span>Vue.js</span>
  <span>Nuxt.js</span>
  <span>vue3-marquee-slider</span>
</vueMarquee>
</template>