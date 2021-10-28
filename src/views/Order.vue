<template>
  <div class="app-page">
    <div class="page-title">
      <h3>Заказ</h3>
    </div>
    <section class="hero-area">
      <div class="hero-slides owl-carousel">
        <!-- Single Hero Slide -->
        <div v-for="n in 0" class="single-hero-slide bg-img slide-background-overlay img">
          <div class="container h-100">
            <div class="row h-100 align-items-end">
              <div class="col-12">
                <div class="hero-slides-content">
                  <div class="line"></div>
                  <h2>New York View</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel tortor facilisis, volutpat nulla placerat, tincidunt mi. Nullam vel orci dui. Suspendisse sit amet laoreet neque. Fusce sagittis suscipit sem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="card" style="width: 18rem;">
        <img src="../assets/img/store/drova.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Название карточки</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" @click="additem()">+</a>
          <a href="#" class="btn btn-primary" @click="removeitem()">-</a>
          <a href="#" class="btn btn-primary" @click="runtruck()">Пуск</a>
        </div>
      </div>
    </section>
  </div>
  <stage/>
</template>

<script>
import Stage from "../components/app/Stage";

export default {
  components: {Stage},
  methods: {
    additem() {
      this.eventBus.emit('add')
      localStorage.items = (parseInt(localStorage.items)+1);
    },
    removeitem() {
      localStorage.items = (parseInt(localStorage.items)-1);
      this.eventBus.emit('remove')
    },
    runtruck() {
      this.eventBus.emit('runtruck')
    }
  }
}
</script>

<style scoped>
.img {
  background-image: url('../assets/img/store/slide2.jpg');
}
</style>