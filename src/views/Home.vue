<template>
  <section class="hero-area">
    <div class="row">
        <!-- Single Hero Slide -->
        <div class="page col-4" v-for="page in pages" :key="page.id">
          <div class="bg-img slide-background-overlay slide img">
            <div class="container">
              <div class="pages-content">
                <detail v-if="page.id === 1"></detail>
                <profile v-else-if="page.id === 2"></profile>
                <planning v-else-if="page.id === 3"></planning>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import Detail from "./Detail";
import Profile from "./Profile";
import Planning from "./Planning";

export default {
  name: 'home',
  components: {Planning, Profile, Detail},
  data() {
    return {
      pages: [
      {
        id:1,
      },
      {
        id:2,
      },
      {
        id:3,
      },
      ]
    }
  },
  mounted() {
    let test = document.querySelectorAll(".page");
    for (let i = 0; i < test.length; i++) {
      test[i].setAttribute('id', i+1)
    }

    test.forEach(element => {
      element.addEventListener("mouseenter", function( event ) {
        let elp = element.closest('.page');
        test.forEach(e => {
          e.setAttribute('style','width: 8.33333333%;')
        });
        elp.setAttribute('style','width: 83.33333333%;')
      }, false);
    });
  },
  methods: {

  }

}
</script>

<style lang="scss">
//@import '../assets/css/style.css';

::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #18aaaa;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}

.pages-content {
  position: relative;
  overflow: auto;
  height: 50vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}

.slide {
  height: 100vh;
}

.slide-background-overlay:hover::after {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 0.1) 110%, rgba(0, 0, 0, 0) 100%);
  transition: 1s linear;
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
  height: 100vh;
  width: 100%;
  z-index: -1;
  bottom: 0;
  left: 0;
  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%); }
.img {
  background-image: url(../assets/img/store/slide2.jpg);
}
</style>

