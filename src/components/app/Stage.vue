<template>
  <div class="stage">
    <img class="truck" src="../../assets/img/order/truck.png" alt="...">
    <img ref="wood" class="wood" src="../../assets/img/order/wood.png" alt="...">
  </div>
</template>

<script scoped>
import { translate } from '../../animejs';

export default {
  mounted () {
    this.eventBus.on('test', (args) => {
      translate(this.$refs.wood)
    })
  }
};

</script>

<style>
.stage {
  position: fixed; /* Фиксированное положение */
  bottom: 0; /* Левый нижний угол */
  padding-top: 80px; /* Поля вокруг текста */
  color: #fff; /* Цвет текста */
  width: 100%; /* Ширина слоя */
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
}
.stage .truck {
  width: 150px;
  height: auto;
  position: fixed;
  bottom: 10px;
  z-index: 2;
}
.stage .wood {
  width: 100px;
  height: auto;
  position: fixed;
  bottom: 100px;
  z-index: 1;
}
</style>