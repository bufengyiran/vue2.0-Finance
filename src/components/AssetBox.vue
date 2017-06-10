<template>
	<div class="assetBox" :style="{flex:asetBoxFlex,borderBottomColor:asetBoxColor}">
		<h3 class="assetBox-value" :style="{color:asetBoxColor}">{{asetBoxValue}}</h3>
		<p class="assetBox-sum">{{asetBoxSum}}</p>
		<p class="assetBox-date">{{asetBoxDate}}</p>
	</div>
</template>

<script>
export default {
	name : "AssetBox",
	props : ["asetBoxFlex","asetBoxColor","asetBoxValue","asetBoxSum","asetBoxDate"]
}
</script>

<style scoped>
div.assetBox{ width: 46%; height: 135px; margin: 10px 0 0 2%; padding: 10px 0 20px 2%; border-radius: 5px; font-size: 14px; 
	          border-bottom-width: 3px; border-bottom-style: solid; background: #FFF; float: left;}

h3.assetBox-value{ font-weight: normal; }

p.assetBox-sum,p.assetBox-date{ margin: 0; padding: 0; }

p.assetBox-date{ margin-top : 5px; }
</style>