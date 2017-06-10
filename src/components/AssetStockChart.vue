<template>
	<div class="asetsChart">
		<div class="asetsChart-theme">
			<h3 class="asetsChart-title">{{asetsChartTitle}}</h3>
		</div>
		<div class="asetsChart-body">
			<StockChart :sChartId="sChartId" :sChartWidth="sChartWidth" :sChartHeight="sChartHeight" :sChartData="sChartData"></StockChart>
		</div>
	</div>
</template>

<script>
import StockChart from './StockChart.vue'

export default {
	name : "AssetStockChart",
	props : ["asetsChartTitle","sChartId","sChartWidth","sChartHeight","sChartData"],
	components : {
		StockChart
	}
}
</script>

<style scoped>
div.asetsChart{ background: #fff; border-radius: 5px; }

div.asetsChart-theme{ height: 60px; line-height: 60px; border-bottom: 1px solid #eaeaea;}

h3.asetsChart-title{ margin: 0; padding: 0; padding-left: 20px; font-weight: normal;}
</style>