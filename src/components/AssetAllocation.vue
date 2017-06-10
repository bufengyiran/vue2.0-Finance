<template>
	<div class="asetAlloc">
		<div class="asetAlloc-theme">
			<h3 class="asetAlloc-title">{{asetAllocTitle}}</h3>
		</div>
		<div class="asetAlloc-body">
			<div class="asetAlloc-body-pie">
				<PieChart :pieId="pieId" :pieHeight="pieHeight" :pieData="pieData"></PieChart>				
			</div>
			<div class="asetAlloc-body-tabu">
				<Tabulation :tabuFlex="tabuFlex" :tabuHead="tabuHead" :tabuList="tabuList" :tabuHeadHeight="tabuHeadHeight" :tabuHeadBg="tabuHeadBg" :tabuListBg="tabuListBg"></Tabulation>
			</div>
		</div>
	</div>
</template>

<script>
import PieChart from './PieChart.vue'
import Tabulation from './Tabulation.vue'

export default {
	name : "AssetAllocation",
	props : ["asetAllocTitle","pieId","pieHeight","pieData","tabuFlex","tabuHead","tabuList","tabuHeadHeight","tabuHeadBg","tabuListBg"],
	components : {
		PieChart,
		Tabulation
	}
}
</script>

<style scoped>
div.asetAlloc{ background: #fff; border-radius: 5px; }

div.asetAlloc-theme{ height: 60px; line-height: 60px; border-bottom: 1px solid #eaeaea;}

h3.asetAlloc-title{ margin: 0; padding: 0; padding-left: 20px; font-weight: normal;}

div.asetAlloc-body{ padding: 20px 15px 20px 0; }

div.asetAlloc-body::after{ content: ""; display: block; clear: both; width: 0; height: 0;}

div.asetAlloc-body-pie{ width: 35%; float:left;}

div.asetAlloc-body-tabu{ width: 65%; float:left;}
</style>