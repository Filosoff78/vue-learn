<template>
  <div id="order">
    <div class="shop">
      <div class="row d-flex justify-content-center">
        <div class="card col-4" v-for="w in woods">
          <img v-if="w.head === 'Береза'" src="../assets/img/order/birch.png" class="card-img-top pt-3">
          <img v-if="w.head === 'Осина'" src="../assets/img/order/aspen.png" class="card-img-top pt-3" style="width: 14rem">
          <img v-if="w.head === 'Ольха'" src="../assets/img/order/alder.png" class="card-img-top pt-3" style="width: 14rem">
            <div class="card-body">
              <h5 class="card-title">{{ w.head }}</h5>
              <ol>
                <li v-for="q in w.quality">{{ q }}</li>
              </ol>
              <div class="row">
                <div class="col-6">
                  <h1>{{ w.cost }}₽/м<sup>3</sup></h1>
                </div>
                <div class="col-6">
                  <a href="#" class="btn btn-primary">В корзину</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="order-basket">
      <div class="row d-flex justify-content-center align-content-center mt-5">
        <div class="line"/>
        <div class="basket">
        <h1>Корзина</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { numberAnimation } from '../animejs';

export default {
  data() {
    return {
      woods: [
        {
          head: 'Береза',
          cost: 1500,
          quality: [
              'разгораются быстро',
              'имеют высокую теплоотдачу',
              'не искрят при горении',
              'пламя высокое и ровное',
              'имеют неповторимый целительный запах',
          ],
        },
        {
          head: 'Осина',
          cost: 1400,
          quality: [
            'быстро сохнут',
            'при горении создают высокую температуру',
            'образуют минимальное количество золы',
            'при горении не коптят',
          ],
        },
        {
          head: 'Ольха',
          cost: 1300,
          quality: [
            'отсутствие копоти',
            'долговечность',
            'шороший жар',
            'стойкость к гниению',
            'прочистка дымоходов',
            'медленное сгорание',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
#order ol {
  list-style-type: circle;
}
#order li {
  font-weight: 100;
}
#order .card {
  background-color: rgba(255,255,255,0);
  width: 18rem;
  border: 1px solid white;
  border-radius: 5%;
  margin-right: 15px;
}
#order .card img{
  width: 10rem;
  display: block;
  margin-left: auto;
  margin-right: auto
}
.order-basket {
  z-index: 995;
  bottom: 100px;
  left: 0;
  width: 100%;
  height: auto;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  background-color: transparent;
  padding: 15px 30px; }
#order .line{
  width: 95%;
  height: 0.5px;
  background-color: #ffffff;
  display: block;
}
#order .basket{
  width: 95%;
  display: block;
}
#order .shop {
  padding: 15px 0 0 15px;
}
</style>
