<template>
  <section class="hero-area">
    <div class="row">
        <!-- Single Hero Slide -->
        <div class="col" v-for="n in 3">
          <div class="bg-img slide-background-overlay slide img">

          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
//@import '../assets/css/style.css';
.slide {
  height: 100vh;
}
.bg-img {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; }
.slide-background-overlay {
  position: relative;
  z-index: 1;
  bottom: 0;
  left: 0;
  width: 100%; }
.slide-background-overlay::after {
  content: '';
  position: absolute;
  height: 60%;
  width: 100%;
  z-index: -1;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%); }
.img {
  background-image: url(../assets/img/store/slide2.jpg);
}
</style>

