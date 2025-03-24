<script>
import Marquee from 'vue-marquee-text-component';

export default {
  components: {
    Marquee
  }
};
</script>

<template>
  <div>
    <Marquee :speed="70">
      <p>Your scrolling text here</p>
    </Marquee>
  </div>
</template>
