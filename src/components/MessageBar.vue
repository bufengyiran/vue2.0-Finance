<template>
	<div class="msgBar">
		<MessageBox v-for="(box,index) in boxData" :key="box.id" :boxFlex="box.boxFlex" :boxImg="box.boxImg" :boxIntro="box.boxIntro" :boxNum="getNum[index]" :boxTextColor="box.boxTextColor"></MessageBox>
	</div>
</template>

<script>
import MessageBox from './MessageBox.vue'     /*路径：不能加/components！！！ 组件都在同一文件夹下，直接引用即可*/
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
	name : "MessageBar",
	data(){
		return {
			boxData : [
				{
					boxFlex : 1,
			  		boxImg : "/static/users.png",
			  		boxIntro : "Registered Users",
			  		boxTextColor : "#296ecc"
				},
				{
					boxFlex : 1,
			  		boxImg : "/static/accounts.png",
			  		boxIntro : "Managed Accounts",
			  		boxTextColor : "#ffae00"
				},
				{
					boxFlex : 1,
			  		boxImg : "/static/log.png",
			  		boxIntro : "Up To Now",
			  		boxTextColor : "#27c0d9"
				},
				{
					boxFlex : 1,
			  		boxImg : "/static/view.png",
			  		boxIntro : "Up To Now",
			  		boxTextColor : "#6278eb"
				}
			]
		}
	},
	computed : {
		...mapState([
			"logNum",
			"viewNum"
		]),
		...mapGetters([
			"getAllNewUsers",
			"getAllNewAccounts"
		]),
		getNum(){
			var arr = [];
			arr.push(this.getAllNewUsers.length,this.getAllNewAccounts.length,this.logNum,this.viewNum);
			return arr;
		}
	},
	components : {
		MessageBox
	}
}
</script>


<style scoped>
div.msgBar{ display: flex; flex-direction: row; box-shadow: 0 0 8px #e6e6e6; border-radius : 5px; background: #fff;}
</style>