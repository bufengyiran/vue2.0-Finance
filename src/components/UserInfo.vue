<template>
	<div class="userInfo">
		<div class="userInfo-nameInfo">
			<h3 class="userInfo-nameInfo-name">{{getInfo.name}}</h3>
			<p class="userInfo-nameInfo-email">{{getInfo.email}}</p>
		</div>
		<div class="userInfo-assetInfo">
			<h5 class="userInfo-assetInfo-title">Total Asset:</h5>
			<p class="userInfo-assetInfo-value">{{"$"+totalAsset}}</p>
			<p class="userInfo-assetInfo-date">{{currentDate}}</p>
		</div>
		<div class="userInfo-accountInfo">
			<div class="userInfo-accountInfo-head">
				<h5 class="userInfo-accountInfo-header">ACCOUNTS</h5>
			</div>
			<div class="userInfo-accountInfo-body" @click="showOverview">
				<p :class="'userInfo-accountInfo-title '+(showRadius?'addradius':'')">Overview
					<span class="userInfo-accountInfo-remind">3</span>
				</p>
				<div class="userInfo-accountInfo-detail" v-if="showList">
					<ul>
						<li class="userInfo-accountInfo-list">task1</li>
						<li class="userInfo-accountInfo-list">task2</li>
						<li class="userInfo-accountInfo-list">task3</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
export default {
	name : "UserInfo",
	data(){
		return {
			showList : false,
			showRadius : true,
		}
	},
	computed : {
		getInfo(){
			return this.$store.state.userInfoData;
		},
		totalAsset(){
			return this.$store.getters.currentPortfolio[0][1];
		},
		currentDate(){
			return this.$store.getters.currentDate;
		}
	},
	methods : {
		showOverview(){
			this.showList = true;
			this.showRadius = false;
		}
	}
}
</script>

<style scoped>
div.userInfo{ background: #FFF; border-radius: 5px; border: 1px solid #f1f5f7;}

div.userInfo-nameInfo{ padding: 2.5% 5%; border-bottom: 1px solid #eaeaea; background: #fafeff; border-top-left-radius: 5px;
					   border-top-right-radius: 5px;}

p.userInfo-nameInfo-email{ font-size: 12px; }

div.userInfo-assetInfo{ padding: 0 5%; border-bottom: 1px solid #f6f8fb;}

p.userInfo-assetInfo-value{ font-weight: bold; color: #1d66ca; }

p.userInfo-assetInfo-date{ text-align: right; font-size: 14px;}

div.userInfo-accountInfo-head{ background: #fafeff; }

h5.userInfo-accountInfo-header{ height: 30px; line-height: 30px; padding-left: 5%; margin: 0; padding: 5% 0 5% 6.25%; 
								position: relative;}

h5.userInfo-accountInfo-header::after{ content: "*"; width: 15px; height: 15px; position: absolute; right: 6.25%;}

p.userInfo-accountInfo-title{ margin: 0; padding: 5%; height: 15px; line-height: 15px; position: relative; background: #286ecc; 
							  color: #FFF; cursor: pointer; font-size: 14px;}

.addradius{ border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;}						 

p.userInfo-accountInfo-title::before{ content: "&"; width: 15px; height: 15px; margin-right: 5%; }

span.userInfo-accountInfo-remind{ content: ""; width: 15px; height: 15px; line-height: 15px; position: absolute; right: 6.25%; 
                                  background: #feb847; border-radius: 3px; text-align: center;}

div.userInfo-accountInfo-detail>ul{ list-style: none; margin: 0; padding: 0;}

li.userInfo-accountInfo-list{ padding: 5%; height: 15px; line-height: 15px; }

li.userInfo-accountInfo-list::before{ content: "$"; width: 15px; height: 15px; margin-right: 5%; }
</style>