<template>
  <div id="app">
    <div class="wrapper">
      <transition name="signfade">
        <SignIn v-if="page.showSignin" name="fade" mode="out-in"></SignIn>
      </transition>
      <transition name="fade">
        <Home v-if="page.showHome"></Home>
      </transition>
    </div>
  </div>
</template>

<script>
import SignIn from './components/SignIn.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  computed : {
    page(){
      return this.$store.state.changePage;
    },
    userdata(){
      return this.$store.state;
    },
  },
  watch : {
    page(){
      if(this.page.showHome)   //登录成功
      {
        sessionStorage.setItem("user",JSON.stringify(this.userdata));
        document.body.style.background = "#ecf1f5";
        this.$store.dispatch("logCount");
      }
    }
  },
  components : {
    SignIn,
    Home
  }
}
</script>

<style>
body{ margin: 0; padding: 0; font-family: Helvetica; background: #151e38; }

#app{ font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }

.signfade-enter-active,.signfade-leave-active{ transition: opacity 0.5s; }

.signfade-enter,.signfade-leave-active{ opacity: 0; }

.fade-enter-active{ transition: opacity 0.5s 0.1s; }

.fade-leave-active{ transition: opacity 0.3s; }

.fade-enter,.fade-leave-active{ opacity: 0; }
</style>