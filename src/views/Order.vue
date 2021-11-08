<template>
  <div id="order">
    <div class="shop">
      <div class="row d-flex justify-content-center">
        <div class="card col-4" v-for="w in woods">
          <img v-if="w.head === 'Береза'" src="../assets/img/order/birch.png" class="card-img-top pt-3" style="width: 10.34rem">
          <img v-if="w.head === 'Осина'" src="../assets/img/order/aspen.png" class="card-img-top pt-3" style="width: 14rem">
          <img v-if="w.head === 'Ольха'" src="../assets/img/order/alder.png" class="card-img-top pt-3" style="width: 14rem">
            <div class="card-body pt-3">
              <h5 class="card-title">{{ w.head }}</h5>
              <ol>
                <li v-for="q in w.quality">{{ q }}</li>
              </ol>
              <div class="row">
                <div class="col-6 d-flex justify-content-center align-self-center">
                  <h1 class="font500" style="margin-bottom: 0">{{ w.cost }}₽/м<sup>3</sup></h1>
                </div>
                <div class="col-6">
                  <span v-if="w.count === 0" @click="count(w.head, true, 1)" class="btn btn-success">В корзину</span>
                  <div v-else>
                    <div class="row card-count">
                      <div class="col-4 d-flex justify-content-center " @click="count(w.head, false, 1)"><span class="btn btn-count">-</span></div>
                      <div class="col-4 d-flex justify-content-center align-self-center" ><h1 class="font500">{{ w.count }}</h1></div>
                      <div class="col-4 d-flex justify-content-center" @click="count(w.head, true, 1)"><span class="btn btn-count">+</span></div>
                    </div>
                  </div>
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
          <h1 class="font500">Корзина</h1>
          <h1 v-show="woods[0].count === 0 && woods[1].count === 0 && woods[2].count === 0">{{ textBasket }}</h1>
          <div v-show="woods[0].count > 0 || woods[1].count > 0 || woods[2].count > 0">
            <div class="row d-flex justify-content-between">
              <div class="col-sm-12 col-md-7 pr-1">
                <div v-for="w in woods">
                  <div class="row pb-2" v-if="w.count > 0">
                    <div class="col-6">
                      <span class="btn btn-count" @click="count(w.head, false, w.count)">x</span>{{ w.head }}
                    </div>
                    <div class="col-3">
                      {{ w.count }}м<sup>3</sup>
                    </div>
                    <div class="col-3">
                      {{ w.count * w.cost }}₽
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-6 align-self-center">Стоимость доставки:</div>
                  <div class="col-3 align-self-center">
                    {{woods[0].count + woods[1].count + woods[2].count}}м<sup>3</sup>
                  </div>
                  <div class="col-3 align-self-center" v-if="deliverycost > 0">
                    {{ deliverycost }}₽
                  </div>
                  <div class="col-3 align-self-center" v-else>
                    не расчитана
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-4 panel pl-1">
                <h1 class="d-flex justify-content-center font500">Итого:&nbsp<span ref="animcost"></span>₽</h1>
                <div class="d-flex justify-content-center  mb-2"><span @click="order($event)" class="btn btn-success" style="width: 14rem">Оформить заказ</span></div>
                <div class="d-flex justify-content-center mb-2"><span @click="showmap()" class="btn btn-success" style="width: 14rem">Рассчитать доставку</span></div>
                <div class="d-flex justify-content-center"><span @click="count('','','', true)" class="btn btn-success bg-none" style="width: 14rem">Очистить корзину</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog header="Доставка" v-model:visible="display" style="width: 50vw" :breakpoints="{'960px':'75vw', '640px':'95vw'}" @show="onShowMap">
      <div id="map"></div>
      <template #footer>
        <h1>Стоимость доставки: <span id="deliverycost">0</span>₽</h1>
        <span @click="display =! display" style="width: 5rem" class="btn btn-success">Готово</span>
      </template>
    </Dialog>
    <Dialog header="Заказ" v-model:visible="displayorder" style="width: 50vw" :breakpoints="{'960px':'75vw', '640px':'95vw'}">
      <form method="post" @submit.prevent="submitOrder">
        <div class="row my-2">
          <div class="col-6 pe-3">
            <span class="p-float-label">
              <InputText style="width:100%" id="form.name" type="text" v-model="form.name"
                         :class="{'error-field':v$.form.name.$error && form.click}"/>
              <label for="form.name">ФИО</label>
            </span>
          </div>
          <div class="col-6">
            <span class="p-float-label">
            <InputMask style="width:100%"  id="form.phone" mask="+7 (999) 999-9999" v-model="form.phone"
                       :class="{'error-field':v$.form.phone.$error && form.click}"></InputMask>
            <label for="form.phone">Номер</label>
          </span>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6 pe-3">
           <span class="p-float-label">
            <Calendar v-model="form.date"  dateFormat="dd.mm.yy"
            :minDate="minDateValue" id="form.date" :showTime="true"
              style="width: 100%" />
            <label for="form.date">Дата</label>
          </span>
          </div>
          <div class="col-6">
            <span class="p-float-label">
              <InputText style="width: 100%" id="form.email" type="text" v-model="form.email"/>
              <label for="form.email">Почта</label>
            </span>
          </div>
        </div>
        <div class="row mt-4 mb-2">
          <div class="col-12">
            <span class="p-float-label">
              <Textarea style="width: 100%" id="form.comment" v-model="form.comment" rows="3" />
              <label for="form.comment">Комментарий</label>
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-success">Оформить заказ</button>
        </div>
      </form>
    </Dialog>
    <ConfirmPopup></ConfirmPopup>
    <Toast :breakpoints="{'920px': {width: '100%', right: '0', left: '0'}}"/>
  </div>
</template>

<script>
import { numberAnimation } from '../animejs';
import { showMapJS } from '/src/assets/js/deliveryCalculator'

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  validations() {
    return {
      form: {
        phone: {required},
        name: {required},
      }
    }
  },
  watch: {
    display: function (value) {
      if(!value) {
        if (window.deliverycost > 0) {
          this.deliverycost = window.deliverycost
          this.pricef()
          this.axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${this.ymapKey}&geocode=${window.deliveryto[1]},${window.deliveryto[0]}&format=json`).then(resp => {
            const geoobj = resp.data.response.GeoObjectCollection.featureMember
            this.deliveryTo = geoobj[0].GeoObject.name + ',' + geoobj[0].GeoObject.description
          });
        }
      }
    },
    displayorder: function (value) {
      if(!value) this.form.click = false
    }
  },
  methods: {
    submitOrder() {
      this.form.click = true
      this.v$.$validate()
      if (this.v$.$error) {
        return
      }

      const order = [], orderBitrix = []
      for (let i = 0; i < this.woods.length; i++) {
        if(this.woods[i].count > 0) {
          order.push([this.woods[i].head + ' ' + this.woods[i].count])
          orderBitrix.push([this.woods[i].head + ' ' + this.woods[i].count + ' ' + this.woods[i].cost])
        }
      }

      const delivery = [
        `*Пункт назначения:* ${this.deliveryTo}`,
        `*Стоимость:* ${this.deliverycost}`,
      ]
      const fullMessage = [
        `*Заказ*`,
        `*Товары:* ${order.toString()}`,
        `*Имя:* ${this.form.name}`,
        `*Телефон:* ${this.form.phone}`,
        `*Дата*: ${this.form.date}`,
        `*Сумма*: ${this.price -= this.deliverycost}`,
        `*Комментарий*: ${this.form.comment}`,
        `%0A*Доставка*`,
        `${this.deliverycost > 0 ? delivery.join('%0A') : 'не расчитана'}`,
        `%0A*Итого:* ${this.price += this.deliverycost}`,
        `${this.deliverycost > 0 ? `[доставка](https://yandex.ru/maps/?pt=${window.deliveryto[1]},${window.deliveryto[0]}&z=18&l=map)` : ``}`,
        ]
      const bitrix = {
        TITLE: `Сайт: ${this.form.name}`,
        NAME: this.form.name,
        PHONE: this.form.phone,
        COMMENTS: this.form.comment,
        DELIVERY_TO: this.deliveryTo,
        DELIVERY_COST: this.deliverycost,
        DELIVERY_CORD: this.deliverycost > 0 ? window.deliveryto[1] +', ' + window.deliveryto[0] : '0',
        DATE: this.form.date,
        PRODUCTS: orderBitrix,
        EMAIL: this.form.email
      }
      this.axios.get(`/ajax.php?type=bitrix&text=${JSON.stringify(bitrix)}`)
      console.log(JSON.stringify(bitrix))
      this.axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullMessage.join('%0A')}&parse_mode=Markdown`)
      this.displayorder = false
      this.$toast.add({severity:'success', summary: 'Заказ', detail:'Заказ успешно оформлен', life: 3000})
    },
    order(event) {
      if(this.deliverycost === 0) {
        this.$confirm.require({
          target: event.currentTarget,
          message: 'Вы не рассчитали стоимость доставки, продолжить без доставки?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            this.displayorder = true
          },
          reject: () => {
            this.showmap()
          }
        });
      }
      else this.displayorder = true
    },
    onShowMap() {
      this.deliverycost = window.deliverycost = 0
      showMapJS()
    },
    count(head, action, count, all) {
      if(all) {
        this.deliverycost = window.deliverycost = 0
        this.$toast.add({severity:'info', summary: 'Заказ', detail:'Корзина успешно очищена', life: 3000})
      }
      for (let i = 0; i < this.woods.length; i++) {
        if(all) {
          this.woods[i].count = 0
        }
        else {
          if(this.woods[i].head === head) {
            action ? this.woods[i].count+=  count : this.woods[i].count-=count
            if(action && this.woods[i].count === 1) this.$toast.add({severity:'success', summary: 'Заказ', detail:'Товар успешно добавлен в корзину', life: 3000})
            else if (!action && this.woods[i].count === 0) this.$toast.add({severity:'info', summary: 'Заказ', detail:'Товар успешно убран из корзину', life: 3000})
          }
        }
      }
      this.pricef()
    },
    showmap() {
      this.display = true
    },
  },
  mounted() {
    const bitrix = [
      `fields[TITLE]=Обратный звонок`,
      `fields[PHONE]=[{ "VALUE": "555888", "VALUE_TYPE": "WORK" }]`,
      `fields[NAME]=никита`,
    ]

    this.pricef = () => {
      this.price = 0
      let ar = []
      if(localStorage.items) delete localStorage.items
      for (let i = 0; i < this.woods.length; i++) {
        ar.push([this.woods[i].head, this.woods[i].count])
        this.price += this.woods[i].count * this.woods[i].cost
      }
      localStorage.setItem('items', JSON.stringify(ar));
      if(this.price === 0) this.textBasket = 'Вы пока не добавили товар в корзину'
      else {
        this.price += this.deliverycost
        numberAnimation(this.$refs.animcost, this.price, 1000)
      }
    }
    let ar = [];
    if(localStorage.items) ar = JSON.parse(localStorage.getItem("items"));
    if(!ar.length) this.textBasket = 'Вы пока не добавили товар в корзину'
    else {
      for (let i = 0; i < this.woods.length; i++) {
        for (let a = 0; a < ar.length; a++) {
          if(this.woods[i].head === ar[a][0]) this.woods[i].count = ar[a][1]
        }
      }
    }
    this.pricef()
  },
  data() {
    return {
      v$: useVuelidate(),
      form: {
        name: '',
        phone: '',
        date: null,
        comment: '',
        email: '',
        click: false,
      },
      token: '1724080855:AAHIGE7AiIvAtfhG2WvlUmWjQiUH7Ljja2A',
      chatId: '-581171722',
      ymapKey: '6ceb211e-5425-440e-b608-5e89769f1898',
      deliveryTo: null,

      minDateValue: new Date(),
      displayorder: false,
      deliverycost: 0,
      display: false,
      price: 0,
      basket: [],
      textBasket: '',
      woods: [
        {
          head: 'Береза',
          cost: 1800,
          quality: [
              'разгораются быстро',
              'имеют высокую теплоотдачу',
              'не искрят при горении',
              'пламя высокое и ровное',
              'имеют неповторимый целительный запах',
          ],
          count: 0,
        },
        {
          head: 'Осина',
          cost: 1700,
          quality: [
            'быстро сохнут',
            'при горении создают высокую температуру',
            'образуют минимальное количество золы',
            'при горении не коптят',
          ],
          count: 0,
        },
        {
          head: 'Ольха',
          cost: 1700,
          quality: [
            'отсутствие копоти',
            'долговечность',
            'шороший жар',
            'стойкость к гниению',
            'прочистка дымоходов',
            'медленное сгорание',
          ],
          count: 0,
        },
      ],
    }
  },
}
</script>

<style scoped>
.finish-order-products {
  padding: 5px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(33, 40, 50, 0.125);
  border-radius: 0.35rem;
  background: #d7d7d7;
}
.finish-order-products sup{
  top: 0.5rem;
}
#order p{
  margin: 0;
}
#order .btn-count{
  background: none;
  border-color: white;
  color: white;
}
#order .basket .panel {
  /*border: 1px solid;*/
  /*border-radius: 10%;*/
}
#order .basket .table {
  color: white;
  font-weight: 100;
}

#order .basket .table > :not(:first-child) {
  border-top: none;
}

#order .basket thead{
  border-style: none;
}

#order .basket .btn-count{
  background: none;
  border-color: white;
  color: white;
  width: 2em;
  height: 2em;
  margin-right: 5px;
  padding: 2px;
}

#order .basket .btn-count:hover {
   background: red;
   transition: transform 0.8s;
}

#order .card-count .btn{
  width: 3rem;
}
#order .card-count h1 {
  margin: 0;
}
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
  border-radius: 4px;
  margin: 15px 15px 0 0;
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
  width: 100%;
  display: block;
}
#order .shop {
  padding: 15px 0 0 15px;
}
#order .card-body ol {
  height: 10em;
}
</style>
