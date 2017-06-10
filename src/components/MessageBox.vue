<template>
	<div class="msgbox" :style="{flex:boxFlex}">
		<div class="msgbox-character">
			<img class="msgbox-icon" :src="boxImg"></img>
		</div>
		<div class="msgbox-number">
			<h1 class="msgbox-text" :style="{color:boxTextColor}">{{boxNum}}</h1>
			<p class="msgbox-intro">{{boxIntro}}</p>
		</div>
	</div>
</template>

<script>
export default {
	name : "MessageBox",
	props : ["boxFlex","boxImg","boxIntro","boxNum","boxTextColor"]
}
</script>

<style scoped>
div.msgbox{ padding: 20px 0 20px 2%; position: relative; }

div.msgbox::after{ content: ""; position: absolute; top: 20px; width: 2px; height: 70%; background: #e6e6e6; z-index:100;}

div.msgbox:last-child::after{ background: none; }

div.msgbox-character{ width: 30%; float: left; }

img.msgbox-icon{ width: 100%; border-radius: 50%; border: 2px solid #e6e6e6;}

div.msgbox-number{ width: 66%; float: left; padding-left: 4%; margin-top: 2.5%;}

h1.msgbox-text{ margin: 0; font-weight: normal;}

p.msgbox-intro{ margin: 0; padding: 0; font-size: 15px;}
</style>