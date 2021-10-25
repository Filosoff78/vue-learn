<template>
  <div class="app-page">
    <div class="page-title">
      <h3>Заказ</h3>
    </div>

    <section>
      <div class="card" style="width: 18rem;">
        <img src="../assets/img/store/drova.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Название карточки</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" @click="additem()">Переход куда-нибудь</a>
        </div>
      </div>
    </section>
  </div>
  <stage/>
</template>

<script>
import Stage from "../components/app/Stage";
import {translate} from "../animate";

import mitt from 'mitt'
const emitter = mitt()

export default {
  components: {Stage},
  methods: {
    additem() {
      this.emitter.emit("addItem", 2);
    }
  }
}
</script>
