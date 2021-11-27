import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import {Button,Header,Aside,Main,Container,MenuItem,Menu,
        Submenu,MenuItemGroup,Table,TableColumn,Popover,Input,Form,FormItem,Dialog,
      Checkbox,Message} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(MenuItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Checkbox)
// Vue.use(Message)

Vue.prototype.$message=Message //message是使用
// Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
