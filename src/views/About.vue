<template>
  <div id="about">
    <div class="row mt-3 mb-3">
      <div class="col-sm-6 col-md-3 d-flex justify-content-center" v-for="c in count">
        <div class="text-center d-block mt-3">
          <h2 class="mt-2 number-up">0</h2>
          <p>{{ c.text }}</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-content-center">
      <div class="line"/>
    </div>
    <h1 class="mt-3">Основной профиль компании «Русская деревня» – продажа дров оптом и в розницу.
      Мы заготавливаем и перерабатываем древесину на собственных производственных площадках.
      В нашем распоряжении – лесовозы и погрузочно-разгрузочная техника, автомобили и самосвалы высокой
      проходимости с разным объемом кузова и грузоподъемности, оборудование для распиловки,
      колки, сортировки и фасовки древесины.</h1>
    <div class="d-flex justify-content-center align-content-center mt-5">
      <div class="line"/>
    </div>
    <div class="row mt-4">
      <div class="col-sm-12 col-md-4 d-flex align-self-stretch about-border" v-for="a in advantage">
        <div class="text-center d-block mt-3">
          <span :class="a.class" style="font-size: 40px; color: #d19f68;"></span>
          <h2 class="mt-2" >{{ a.head }}</h2>
          <p>{{ a.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { numberAnimation } from '../animejs';

export default {
  mounted() {
    let elems = document.querySelectorAll(".number-up")
    elems.forEach((e,i) => numberAnimation(e, this.count[i].number));
  },
  data() {
    return {
      advantage: [
        {
          head: 'Производство',
          class: 'fa fa-industry',
          text: 'Мы заготавливаем и перерабатываем древесину на собственных производственных площадках'
        },
        {
          head: 'Качество',
          class: 'fa fa-level-up',
          text: 'Дрова высушиваются в специальной камере до тех пор, пока остаточная влажность в них составляет не более 5%'
        },
        {
          head: 'Цена',
          class: 'fa fa-money',
          text: 'Благодаря гибкой политики цен, и развитой логистической сети мы можем гарантировать вам лучшее соотношение цены/качество'
        },
      ],
      count: [
        {
          number: 10241,
          text: 'Метров³ доставлено'
        },
        {
          number: 1215,
          text: 'Довольных клиентов'
        },
        {
          number: 93,
          text: 'Положительных отзыв'
        },
        {
          number: 23,
          text: 'Городов обслуживается'
        },
      ],
    }
  },
}
</script>
<style scoped>
#about .line{
  width: 95%;
  height: 0.5px;
  background-color: #ffffff;
  display: block;
}
#about h1 {
  text-align: justify;
  padding: 0 20px;
}
</style>