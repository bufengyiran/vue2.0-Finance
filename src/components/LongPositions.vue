<template>
	<div class="longPositions">
		<Tabulation :tabuFlex="tabuFlex" :tabuHead="tabuHead" :tabuList="tabuList" :idxShow="idxShow"></Tabulation>
	</div>
</template>

<script>
import Tabulation from './Tabulation.vue'

export default {
	name : "LongPositions",
	data(){
		return {
			idxShow : true,
			tabuFlex : [1,5,5,5,5],
			tabuHead : ["#","Symbol","Asset Type","Position Value","Percentage"]
		}
	},
	computed : {
		tabuList(){
	    	return this.$store.getters.getLongPositions;
	    }
	},
	components : {
		Tabulation
	}
}
</script>

<style scoped>
div.longPositions{ margin: 20px 5%; padding-bottom: 20px;}	
</style>