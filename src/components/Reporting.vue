<template>
	<div class="reporting">
		<SubNav :subNavItem="subNavItem" :subNavSubItem="subNavSubItem" :linkPath="linkPath"></SubNav>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import SubNav from './SubNav.vue'

export default {
	name : "Reporting",
	data(){
		return {
			subNavItem : "Reporting",
			subNavSubItem : ["Overview","User","Account"],
			linkPath : [
				"/reporting/overview",
				"/reporting/user",
				"/reporting/account"
			]
		}
	},
	mounted(){
		this.$router.push("/reporting/overview");
	},
	components : {
		SubNav
	}
}
</script>

<style scoped>
div.reporting{ margin: 25px; background: #FFF; box-shadow: 0 0 8px #dde3e8;}
</style>