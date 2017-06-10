import axios from 'axios'
import * as types from './mutation-types'

export default {
  getUserData({ commit },userInfo) {
  	axios.post("/user/",userInfo).then(res => {
  		var userdata = res.data;
  		commit(types.GET_USER_DATA,userdata);
  	});
  },
  userlogout({ commit }) {
  	axios.get("/user/logout").then(res => {
  		var outdata = res.data;
  		commit(types.USER_LOG_OUT,outdata);
  	});
  },
  holdsession({ commit },holddata) {
    commit(types.HOLD_SESSION,holddata);
  },
  logCount({ commit }) {
    commit(types.LOG_COUNT);
  },
  viewcount({ commit }) {
    commit(types.VIEW_COUNT);
  }
};