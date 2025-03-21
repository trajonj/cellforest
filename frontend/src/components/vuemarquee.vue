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

<style>
.marquee-text-wrap {
  width: 700px;
  top: 460px;
}
.marquee-text-text {
  width: 700px;
  height: 40px;
  top: 460px;
}
.marquee-text-content {
  width: 700px;
}
</style>