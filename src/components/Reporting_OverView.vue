<template>
	<div class="reporting-Overview">
		<div class="reporting-Overview-top">
			<MessageBar></MessageBar>			
		</div>
		<div class="reporting-Overview-middle">
			<div class="reporting-Overview-middle-left">
				<div class="middle-left-header">
					<h1>{{"$"+currentTotalAssets}}</h1>
					<span>Total Assets</span>
				</div>
				<div class="middle-left-body">
					<div class="middle-left-aside">
						<div class="middle-left-aside-content">
							<div class="middle-left-aside-text">
								<h5>{{"$"+allYesterdayDValue}}</h5>
								<span>Yesterday</span>
							</div>
						</div>
						<div class="middle-left-aside-content">
							<div class="middle-left-aside-text">
								<h5>{{"$"+allastLast7DValue}}</h5>
								<span>Last 7 Days</span>
							</div>
						</div>
						<div class="middle-left-aside-content">
							<div class="middle-left-aside-text">
								<h5>{{"$"+allastMonthDValue}}</h5>
								<span>Last Month</span>
							</div>
						</div>
					</div>
					<div class="middle-left-main">
						<StockChart :sChartId="stockChartData.sChartId" :sChartWidth="stockChartData.sChartWidth" :sChartHeight="stockChartData.sChartHeight" :sChartData="allsChartData"></StockChart>
					</div>
				</div>
			</div>
			<div class="reporting-Overview-middle-right">
				<div class="reporting-Overview-note">
					<h5>1111</h5>
					<p>111</p>
					<span>View</span>
				</div>
				<div class="reporting-Overview-note secondNote">
					<h5>Open an account</h5>
					<p>Hello</p>
					<span>View</span>
				</div>
			</div>			
		</div>
		<div class="reporting-Overview-bottom">
			<div class="reporting-Overview-bottom-left">
				<AssetAllocation :asetAllocTitle="asetAllocData.asetAllocTitle" :pieId="asetAllocData.pieId" :pieHeight="asetAllocData.pieHeight" :pieData="allTabuList" :tabuFlex="asetAllocData.tabuFlex" :tabuHead="asetAllocData.tabuHead" :tabuList="allTabuList" :tabuHeadHeight="asetAllocData.tabuHeadHeight" :tabuHeadBg="asetAllocData.tabuHeadBg" :tabuListBg="asetAllocData.tabuListBg" ></AssetAllocation>
			</div>
			<div class="reporting-Overview-bottom-right">
				<AssetStockChart :asetsChartTitle="asetsChartData.asetsChartTitle" :sChartId="asetsChartData.sChartId" :sChartHeight="asetsChartData.sChartHeight" :sChartData="allasGrowthData"></AssetStockChart>
			</div>
		</div>
	</div>
</template>

<script>
import MessageBar from './MessageBar.vue'
import StockChart from './StockChart.vue'
import AssetStockChart from './AssetStockChart.vue'
import AssetAllocation from './AssetAllocation.vue'
import { mapGetters } from 'vuex'

export default {
	name : "Reporting_OverView",
	data(){
		return {
			stockChartData : {
				sChartId : "totalAssets",
				sChartWidth : "100%",
				sChartHeight : "270px"
			},
			asetAllocData : {
				asetAllocTitle : "Allocation Class",
				pieId : "allocationClass",
				pieHeight : "280px",
			    tabuHeadHeight : "50px",
			    tabuHeadBg : "#f7fafc",
			    tabuListBg : "#FFF",
			    tabuFlex : [4,4,3],
			    tabuHead : ["Investment","Value","Weight"]
			},
			asetsChartData : {
					asetsChartTitle : "Growth",
					sChartId : "growth",
					sChartHeight : "345px"		
			}
		}
	},
	computed : {
		...mapGetters([
			"getAllAssetsValue",
			"getAllAllocation",
			"currentAllAssets",
			"allastMonthDValue",
			"allYesterdayDValue",
			"allastLast7DValue",
			"allAssetGrowth"
		]),
		allsChartData(){
			return this.getAllAssetsValue;
		},
		allTabuList(){
			return this.getAllAllocation;
		},
		currentTotalAssets(){
			return this.currentAllAssets[0][1];
		},
		allasGrowthData(){
			return this.allAssetGrowth;
		}
	},
	components : {
		MessageBar,
		StockChart,
		AssetStockChart,
		AssetAllocation
	}
}
</script>

<style scoped>
div.reporting-Overview{ padding: 90px 5% 60px; background: #fff; }

div.reporting-Overview-middle{ display: flex; margin: 15px 0;}

div.reporting-Overview-middle-left{ flex: 2; border-radius: 5px; background: #FFF; box-shadow: 0 0 8px #e6e6e6;}

div.middle-left-header{ height: 60px; line-height: 60px; padding: 0 15px; border-bottom: 1px solid #f2f4f6; }

div.middle-left-header>h1{ margin: 0; padding: 0; display: inline-block; color: #4079d0; font-weight: normal;}

div.middle-left-header>span{ margin-left: 5px;}

div.middle-left-body::after{ content: ""; display: block; clear: both; width: 0; height: 0; }

div.middle-left-aside{ width: 20%; border-right: 1px solid #f2f4f6; float: left; font-size: 15px;}

div.middle-left-aside::after{ content: ""; display: block; clear: both; width: 0; height: 0; }

div.middle-left-aside-content{ height: 90px; border-bottom: 1px solid #f2f4f6; text-align: center; position: relative;}

div.middle-left-aside-content:last-child{ border-bottom: none; }

div.middle-left-aside-text{ position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}

div.middle-left-aside-text>h5{ margin: 0; padding: 0; color: #3376ea; font-size: 14px; font-weight: normal;}

div.middle-left-aside-text>span{ font-size: 12px; }

div.middle-left-main{ width: 79%; float: left; }

div.reporting-Overview-middle-right{ flex: 1;}

div.reporting-Overview-note{ height: 120px; border-radius: 5px; padding: 15px 0 20px 20px; position: relative; 
							 background: linear-gradient(to right,#4f81ff,#5dc6ec); margin-left: 15px; color: #FFF; 
							 font-weight: normal; border: 1px solid #FFF; box-shadow: 0 0 8px #e6e6e6;}

div.reporting-Overview-note>h5{ margin : 0; padding: 0;}

div.reporting-Overview-note>p{ margin : 0; padding-top: 10px; font-size: 13px;}

div.reporting-Overview-note>span{ display: block; width: 45px; height: 20px; border: 1px solid #FFF; border-radius: 5px;
							   text-align: center; line-height: 20px; text-decoration: none; position: absolute;
							   left: 20px; bottom: 20px; color: #FFF; font-size: 14px;}

div.secondNote{ margin-top: 22px; border-left: 3px solid #4079d0; color: #4079d0; font-weight: normal; 
				background: linear-gradient(to right,#d8e8ff,#e6f0ff);}

div.secondNote>p{ padding-top: 20px; }

div.secondNote>span{ border-color: #4079d0; color: #4079d0;}					   

div.reporting-Overview-bottom{ width: 100%; }

div.reporting-Overview-bottom::after{ content: ""; display: block; clear: both; width: 0; height: 0;}

div.reporting-Overview-bottom-right{ margin-left: 2%; }

div.reporting-Overview-bottom-left,div.reporting-Overview-bottom-right{ width: 49%; float: left; border-radius: 5px;
																		box-shadow: 0 0 8px #e6e6e6; }
</style>