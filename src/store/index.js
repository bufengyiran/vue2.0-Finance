import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);


const state = {
	changePage : {
		showSignin : true,
	    showHome : false
	},
	signinFail : false,
	logNum : 0,
	viewNum : 0,
	userInfoData : {},
	alluserData : {}
};

export default new Vuex.Store({
	state,
	mutations,
  	actions,
  	getters
})