<template>
  <div class="stage">
    <div class="all-truck">
      <img class="truck" src="../../assets/img/order/truck.png" alt="...">
      <img v-for="n in 5" class="wood" src="../../assets/img/order/wood.png" alt="...">
      <div class="wheels">
        <img v-for="n in 4" src="../../assets/img/order/wheels.png" alt="...">
      </div>
    </div>
  </div>
</template>
<script>
import { translate } from '../../animejs';

export default {
  mounted () {
    this.eventBus.on('add', () => {
      let elem = document.querySelectorAll('.wood')
      let id = localStorage.items
      elem[id].style.display = 'unset'
      translate(elem[id], 'wood',-id*7)
    })
    this.eventBus.on('remove', () => {
      let elem = document.querySelectorAll('.wood')
      let id = localStorage.items
      elem[id].style.display = 'none'
      translate(elem[id], 'wood',-65)
    })
    this.eventBus.on('runtruck', () => {
      let parentelem = document.querySelector('.wheels')
      let elems = parentelem.querySelectorAll('*')
      elems.forEach(elem => translate(elem, 'wheels'))
    })
  }
};

</script>

<style scoped>
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
  display: none;
}
.stage .wheels img{
  width: 20px;
  height: auto;
  position: fixed;
  bottom: 10px;
  z-index: 1;
  margin-left: 19px;
}
.stage .wheels img:nth-child(2) {
  margin-left: 42px;
}
.stage .wheels img:nth-child(3) {
  margin-left: 85px;
}
.stage .wheels img:nth-child(4) {
  margin-left: 114px;
}
</style>