import Vue from 'vue'
import router from './router'
import store from './store'
import Highcharts from 'highcharts'

import App from './App'

Vue.config.productionTip = false


const goptions = {
	colors : ['#5365dd', '#5699f9', '#00c5dd', '#fecf02', '#ffae00', '#ff453c', 
		'#455df0', '#639ffa', '#88beff', '#9fd8ff','#1acde2','#69e8ec','#9df5da']
}

Highcharts.setOptions(goptions);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted(){
  	this.getsession();
    console.log("开始加载页面！");
    this.count();
  },
  methods: {
  	getsession(){
  		if(sessionStorage.getItem("user"))
  		{
  			this.$router.push("/");
  			this.$store.dispatch("holdsession",JSON.parse(sessionStorage.getItem("user")));
  		}
  	},
    count(){
      if(localStorage.LogNum>=1) localStorage.LogNum = Number(localStorage.LogNum) - 1;
      if(localStorage.ViewNum>=1) localStorage.ViewNum = Number(localStorage.ViewNum) - 1;
    }
  }
})