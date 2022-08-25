import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './router'
import store from './store'
import 'primevue/resources/themes/saga-blue/theme.css'     //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                          //icons
// import css from "file.css";
// import 'source.vue?vue&type=style&index=1&scoped&lang=scss'
// import script from 'babel-loader!vue-loader!source.vue?vue&type=script'
// import 'source.vue?vue&type=style&index=1&scoped&lang=scss'
// import 'style-loader!css-loader!sass-loader!vue-loader!source.vue?vue&type=style&index=1&scoped&lang=scss'
// import 'vue-loader/template-loader!pug-loader!source.vue?vue&type=template'
// import 'style-loader!vue-loader/style-post-loader!css-loader!sass-loader!vue-loader!source.vue?vue&type=style&index=1&scoped&lang=scss'
// // import render from 'source.vue?vue&type=template'
// // import script from 'source.vue?vue&type=script'

// export * from 'source.vue?vue&type=script'

// import 'source.vue?vue&type=style&index=1'

//  script.render = render
//  export default script

createApp(App).use(store, PrimeVue).use(router).mount('#app');