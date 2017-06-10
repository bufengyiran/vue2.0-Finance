<template>
	<div class="home">
		<Navigation></Navigation>
    <router-view></router-view>
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
