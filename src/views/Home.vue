<template>
  <section class="hero-area">
    <div class="row">
      <div class="page" @click="showpage($event.target)" v-for="page in pages" :key="page.id">
        <div class="bg-img slide-background-overlay slide" :class="page.class">
          <navbar v-if="page.shownav"/>
          <div class="container">
            <div class="row align-items-end">
              <div class="col-12">
                <div class="slides-content">
                  <div class="line"></div>
                  <div class="d-flex justify-content-center">
                    <h2 class="text-nowrap font-wight-head">{{ page.name }}</h2>
                  </div>
                  <div class="content-page">
                    <about v-if="page.id === 1"/>
                    <order v-if="page.id === 2"/>
                    <contact v-if="page.id === 3"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black modal-fullscreen position-fixed top-0"> </div>
  </section>
</template>

<script>
import About from "./About";
import Contact from "./Contact";
import Order from "./Order";
import {translate} from "../animejs";
import Navbar from "../components/app/Navbar";
import {showMapContact} from "../assets/js/deliveryCalculator";

export default {
  name: 'home',
  components: {Navbar, Order, Contact, About},
  data() {
    return {
      pages: [
      {
        id:1,
        class: 'page1',
        name: 'О нас',
        shownav: false,
      },
      {
        id:2,
        class: 'page2',
        name: 'Заказ',
        shownav: false,
      },
      {
        id:3,
        class: 'page3',
        name: 'Контакты',
        shownav: false,
      },
      ]
    }
  },
  mounted() {
    this.elemPages = document.querySelectorAll(".page")
    this.eventBus.on('showmenu', () => {
      this.elemPages.forEach((element) => {
        element.classList.remove('pages-hide', 'pages-active', 'pages-left', 'pages-right')
        this.pages[element.dataset.id].shownav = false
        this.eventBus.emit('shownav', true)
      });
    })
  },
  methods: {
      showpage(click) {
        let clickel = click.closest('.page')
        if(clickel && !clickel.classList.contains('pages-active') && !click.closest('.header-area')) {

          this.eventBus.emit('shownav', false)

          let h =  document.querySelector('.header-area').clientHeight + 40;
          clickel.querySelector('.slides-content').setAttribute('style', 'padding-bottom: '+ h + 'px')

          this.elemPages.forEach((e,i) => e.dataset.id = i);

          this.elemPages.forEach((e, i) => {
            e.classList.toggle('pages-active', false)
            e.classList.toggle('pages-hide', true)
            e.classList.toggle('pages-left', false)
            e.classList.toggle('pages-right', false)
            this.pages[e.dataset.id].shownav = false
            if (i < clickel.dataset.id) e.classList.toggle('pages-left', true);
            else if (i > clickel.dataset.id) e.classList.toggle('pages-right', true);

          });
          clickel.classList.toggle('pages-hide', false)
          clickel.classList.add('pages-active')
          this.pages[clickel.dataset.id].shownav = true

          if(clickel.dataset.id == 2 && !window.ymapcontact) {
            setTimeout(() => showMapContact(), 1000);
          }
        }
      }

  }

}
</script>

<style lang="scss">
.modal-fullscreen {
  height: 100vh;
}
h1 {
  font-weight: 100;
  font-size: 22px;
}
p {
  font-weight: 100;
  font-size: 18px;
}
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(255,255,255,0.7);
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}
.pages-active {
  width: 83.33333333% !important;
  -webkit-transition-duration: 800ms;
  transition-duration: 800ms;
}
.pages-hide {
  width: 8.33333333% !important;
  -webkit-transition-duration: 800ms;
  transition-duration: 800ms;
}
.pages-hide {

}

.slide {
  height: 100vh;
}
.slide-background-overlay:hover::after, .pages-active .slide-background-overlay::after{
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 80%, rgba(0, 0, 0, 0.1) 110%, rgba(0, 0, 0, 0) 100%);
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
.page1 {
  background-image: url(../assets/img/pages/forest.jpg);
}
.page2 {
  background-image: url(../assets/img/pages/order.jpg);
}
.page3 {
  background-image: url(../assets/img/pages/sawmill.jpg);
}
.page {
  flex: 0 0 auto;
  width: 33.33333333%;
  -webkit-transition-duration: 800ms;
  transition-duration: 800ms;
}
/* :: Hero Slides Area CSS */
.page .slide {
  position: relative;
  z-index: 1;
  padding: 0 1rem 100px;
  -webkit-transition-duration: 800ms;
  transition-duration: 800ms;
  overflow: hidden;
  cursor: pointer; }
.pages-hide .slide {
  padding: 0 0 0;
}
.pages-active .slide {
  padding: 0 10px;
  cursor: default;
}
.page .slide .slides-content {
  position: relative;
  z-index: 1;
  -webkit-transform: translateY(75%);
  transform: translateY(75%);
  -webkit-transition-duration: 800ms;
  transition-duration: 800ms;
  bottom: 0;
  height: 100vh;}
.page .slide .slides-content .line {
  width: 100px;
  height: 1px;
  background-color: #ffffff;
  margin-bottom: 30px;
  display: block;
  opacity: 1;
  transition: opacity 0.6s;
  -webkit-transition: opacity 0.6s;}
.pages-hide .slide .slides-content .line {
  opacity: 0;
  transition: opacity 0.6s;
  -webkit-transition: opacity 0.6s;
  }
.page .slide .slides-content h2 {
  color: #ffffff;
  font-weight: 100;
  width: 100%;}
.pages-active .font-wight-head {
  font-weight: 500 !important;}
.pages-left .slide .slides-content h2 {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg); }
.pages-right .slide .slides-content h2 {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg); }
.page .slide .slides-content .content-page{
  color: #ffffff;
  margin-bottom: 0;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  margin-top: 140px;
  opacity: 0;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;}
.pages-active .slide .slides-content .content-page{
  margin-top: 0;
  opacity: 1;
  transition: opacity 0.6s;
  -webkit-transition: opacity 0.6s;
}
.pages-active .slide .slides-content {
  -webkit-transform: translateY(0%);
  transform: translateY(0%);
  overflow: auto;}
</style>

