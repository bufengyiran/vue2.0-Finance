<template>
	<div class="userTabu">
		<div class="userTabu-head">
			<h4 class="userTabu-header">NewUsers</h4>
		</div>
		<Tabulation :tabuFlex="tabuFlex" :tabuHead="tabuHead" :tabuList="tabuList"></Tabulation>
	</div>
</template>

<script>
import Tabulation from './Tabulation.vue'

export default {
	name : "UserTabulation",
	data(){
		return {
			tabuFlex : [1,2,1],
			tabuHead : ["User Name","Email","Created Date"]
		}
	},
	computed : {
		tabuList(){
	    	return this.$store.getters.getAllNewUsers;
	    }
	},
	components : {
		Tabulation
	}
}
</script>

<style scoped>
div.userTabu{ padding: 0px 5% 20px; border: 1px solid #fff; margin-top: 10px; background: #FFF; border-radius: 5px;
			  border: 1px solid #FFF; box-shadow: 0 0 8px #e6e6e6;}
</style>