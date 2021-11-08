import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import index from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@popperjs/core/dist/cjs/popper';

import PrimeVue from 'primevue/config';
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmPopup from 'primevue/confirmpopup';
import Dialog from 'primevue/dialog';
import InputMask from 'primevue/inputmask';
import Calendar from 'primevue/calendar';
import axios from "axios";
import VueAxios from 'vue-axios'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import mitt from 'mitt';
const eventBus = mitt();

const app = createApp(App);

app.config.globalProperties.eventBus = eventBus;

app.component("Calendar", Calendar);
app.component("InputMask", InputMask);
app.component("InputText", InputText);
app.component("Dialog", Dialog);
app.component("Toast", Toast);
app.component('ConfirmPopup', ConfirmPopup);
app.component('Textarea', Textarea);

app.use(PrimeVue, {
    locale: {
        accept: 'Да',
        reject: 'Нет',
        dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
        dayNamesShort: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
        dayNamesMin: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Сегодня',
        firstDayOfWeek: 1,
    }
});

app.use(ToastService);
app.use(ConfirmationService);

app.use(VueAxios, axios)
app.use(store);
app.use(index);


app.mount('#app');