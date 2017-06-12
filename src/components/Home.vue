<template>
	<div class="home">
		<Navigation></Navigation>
    <transition name="fade">
      <router-view></router-view>
    </transition>
	</div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
	name : "Home",
	mounted(){
		this.$router.push("dashboard");
	},
	components : {
		Navigation
	}
}
</script>
