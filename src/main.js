import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import '@fortawesome/fontawesome-free/css/all.css'
import "./style.scss"
import "swiper/css";
import YmapPlugin from 'vue-yandex-maps'
import AOS from 'aos'
import 'aos/dist/aos.css'

const settings = {
  apiKey: '2bc578b8-eadf-4f02-aab2-1fd57fc1aff7',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

createApp(App)
  .use(router)
  .use(YmapPlugin, settings)
  .use(AOS.init())
  .mount('#app')
