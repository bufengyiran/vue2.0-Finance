<template>
	<div class="dashBoard">
		<div class="dashBoard-aside">
			<UserInfo></UserInfo>
			<NewsNote></NewsNote>
			<DocumentsNote></DocumentsNote>
		</div>
		<div class="dashBoard-main">
			<div class="dashBoard-main-top">
				<div class="dashBoard-main-top-left">
					<AssetBar></AssetBar>
					<div class="dashBoard-asetAlloc">
						<AssetAllocation :asetAllocTitle="asetAllocData.asetAllocTitle" :pieId="asetAllocData.pieId" :pieHeight="asetAllocData.pieHeight" :pieData="tabuList" :tabuFlex="asetAllocData.tabuFlex" :tabuHead="asetAllocData.tabuHead" :tabuList="tabuList" :tabuHeadHeight="asetAllocData.tabuHeadHeight" :tabuHeadBg="asetAllocData.tabuHeadBg" :tabuListBg="asetAllocData.tabuListBg"></AssetAllocation>			
					</div>
				</div>
				<div class="dashBoard-main-top-right">
					<div class="dashBoard-asetsChart">
						<AssetStockChart :asetsChartTitle="asetsValueData.asTitle" :sChartId="asetsValueData.asChartId" :sChartWidth="asetsValueData.asChartWidth" :sChartHeight="asetsValueData.asChartHeight" :sChartData="asChartData"></AssetStockChart>
					</div>
					<div class="dashBoard-asetsChart">
						<AssetStockChart :asetsChartTitle="asetsGrowthData.gsTitle" :sChartId="asetsGrowthData.gsChartId" :sChartWidth="asetsGrowthData.gsChartWidth" :sChartHeight="asetsGrowthData.gsChartHeight" :sChartData="gsChartData"></AssetStockChart>
					</div>
				</div>			
			</div>
			<div class="dashBoard-main-bottom">
				<ul>
					<router-link class="main-bottom-header" v-for="(item,index) in mbhead" :key="item.id" :to="linkPath[index]" tag="li">{{item}}</router-link>
				</ul>	
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</div>
		</div>
	</div>
</template>

<script>
import UserInfo from './UserInfo.vue'
import NewsNote from './NewsNote.vue'
import DocumentsNote from './DocumentsNote.vue'
import AssetBar from './AssetBar.vue'
import AssetAllocation from './AssetAllocation.vue'
import AssetStockChart from './AssetStockChart.vue'

export default {
	name : "Dashboard",
	data(){
		return {
			asetAllocData : {
				asetAllocTitle : "Allocation",
				pieId : "allocation",
				pieHeight : "280px",
			    tabuHeadHeight : "50px",
			    tabuHeadBg : "#f7fafc",
			    tabuListBg : "#FFF",
			    tabuFlex : [4,3,3],
			    tabuHead : ["Investment","Value","Weight"],
			},
			asetsValueData : {
				asTitle : "Assets Value",
				asChartId : "assetValue",
				asChartWidth : "100%",
				asChartHeight : "285px"
			},
			asetsGrowthData : {
				gsTitle : "Asset Invested Growth",
				gsChartId : "assetInvestedGrowth",
				gsChartWidth : "100%",
				gsChartHeight : "345px"
			},
			mbhead : ["Long Positions","Shorts Positions"],
			linkPath : [
				"/dashboard/longposition",
				"/dashboard/shortsposition"
			]
		}
	},
	computed : {
		asChartData(){
			return this.$store.getters.getAssetsValue;
		},
		gsChartData(){
			return this.$store.getters.assetInvestedGrowth;
		},
		tabuList(){
	    	return this.$store.getters.getAllocation;
	    }
	},
	mounted(){
		this.$router.push("/dashboard/longposition");
	},
	components : {
		UserInfo,
		NewsNote,
    	DocumentsNote,
    	AssetBar,
    	AssetAllocation,
    	AssetStockChart
	}
}
</script>

<style scoped>
div.dashBoard::after,div.dashBoard-main-top::after{ content: ""; display: block; clear: both; width: 0; height: 0;}

div.dashBoard-aside{ width: 14%; margin: 10px 0 0 1%; float: left;}

div.dashBoard-main{ width: 85%; float: left; }

div.dashBoard-main-top{ width: 100%;}

div.dashBoard-main-top-left,div.dashBoard-main-top-right{ width: 50%; float: left; }

div.dashBoard-asetAlloc{ margin: 10px 0 0 2%; }

div.dashBoard-asetsChart{ margin: 10px 2% 0 2%; }

div.dashBoard-main-bottom{ margin: 1% 1% 0 1%; background: #FFF; border-radius: 5px; }

div.dashBoard-main-bottom>ul{ margin: 0; padding: 0; list-style: none; height: 60px; line-height: 60px;
							  border-bottom: 1px solid #eaeaea;}

li.main-bottom-header{ float: left; margin-left: 5%; cursor: pointer; }

li.main-bottom-header.router-link-active{ border-bottom: 2px solid #f5af71; }
</style>