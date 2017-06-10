import * as types from './mutation-types'    

export default {
  [types.GET_USER_DATA] (state,userdata) {
    Object.assign(state,userdata);
  },
  [types.USER_LOG_OUT] (state,outdata) {
    Object.assign(state,outdata);
  },
  [types.HOLD_SESSION] (state,holddata) {
  	Object.assign(state,holddata);
  },
  [types.LOG_COUNT] (state) {
    if(localStorage.LogNum)
    {
      localStorage.LogNum = Number(localStorage.LogNum) + 1;
    }
    else
    {
      localStorage.LogNum = 1;
    }
    state.logNum = Number(localStorage.LogNum);
  },
  [types.VIEW_COUNT] (state) {
    if(localStorage.ViewNum)
    {
      localStorage.ViewNum = Number(localStorage.ViewNum) + 1;
    }
    else
    {
      localStorage.ViewNum = 1;
    }
    state.viewNum = Number(localStorage.ViewNum);
  }
};