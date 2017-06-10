<template>
	<nav class="subNav">
		<div class="subNav-back" @click="back">
			<img class="subNav-back-icon" src="/static/larrow.png" alt="">
		</div>
		<div class="subNav-item">{{subNavItem}}</div>
		<ul>
			<router-link class="subNav-subItem" v-for="(item,index) in subNavSubItem" :key="item.id" :to="linkPath[index]" tag="li">{{item}}</router-link>
		</ul>
	</nav>
</template>


<script>
export default {
	name : "SubNav",
	props : ["subNavItem","subNavSubItem","linkPath"],
	methods : {
		back(){
			this.$router.push("/dashboard");
		}
	}
}
</script>

<style scoped>
nav.subNav{ width: 100%; height: 50px; position: relative; float: left; background: #fafbfd; border-bottom: 1px solid #FFF; 
			box-shadow: 0 0 8px #e6e6e6;}

div.subNav-back{ width: 5%; height: 50px; background: #021b3f; float: left; position: relative; cursor: pointer;}

img.subNav-back-icon{ width: 30px; height: 30px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}

div.subNav-item{ height: 20px; background: #296ecc; float: left; padding: 15px 3%; color: #fff; font-size: 18px;}

nav.subNav>ul{ list-style: none; height: 50px; line-height: 50px; margin: 0; padding: 0; float: left;}

li.subNav-subItem{ float: left; margin-left: 40px; cursor: pointer;}

.router-link-active{ border-bottom: 2px solid #296ecc; color: #296ecc;}
</style>