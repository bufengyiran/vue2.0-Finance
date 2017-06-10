<template>
	<div class="assetBar">
		<AssetBox v-for="(asetBox,index) in asetBoxData" :key="asetBox.id" :asetBoxColor="asetBox.asetBoxColor" :asetBoxValue="getAsetBoxVal[index]" :asetBoxSum="asetBox.asetBoxSum" :asetBoxDate="getAsetBoxDate[index]"></AssetBox>
	</div>
</template>


<script>
import AssetBox from "./AssetBox.vue"
import { mapGetters } from 'vuex'

export default {
	name : "AssetBar",
	data(){
		return {
			asetBoxData : [
				{
					asetBoxColor : "#2f49f0",
					asetBoxSum : "Current Portfolio Value",
				},
				{
					asetBoxColor : "#ffad2f",
					asetBoxSum : "Last Month",
				},
				{
					asetBoxColor : "#25c5d7",
					asetBoxSum : "Return Since Inception",
				},
				{
					asetBoxColor : "#2592ff",
					asetBoxSum : "YTD",
				}
			]
		}
	},
	computed : {
		...mapGetters([
			"currentPortfolio",
			"lastMonthRate",
			"inceptionRate",
			"ytdRate",
			"lastMonthDate",
			"inceptionDate",
			"ytdDate",
			"currentDate"
		]),
		getAsetBoxVal(){
			var arr = [];
			arr.push("$"+this.currentPortfolio[0][1],this.lastMonthRate,this.inceptionRate,this.ytdRate);
			return arr;
		},
		getAsetBoxDate(){
			var arr = [];
			arr.push(this.currentDate,this.lastMonthDate,this.inceptionDate,this.ytdDate);
			return arr;
		}
	},
	components : {
		AssetBox
	}
}
</script>

<style scoped>
div.assetBar::after{ content: ""; display: block; clear: both; width: 0; height: 0;}
</style>