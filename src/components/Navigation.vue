<template>
	<nav class="masterNav">
		<div class="masterNav-logo">
			<span>Finance</span>
		</div>
		<ul>
			<router-link class="masterNav-item" to="/dashboard" tag="li" @click.native="addlongposition">Dashboard</router-link>
			<router-link class="masterNav-item" to="/reporting" tag="li" @click.native="addoverview">Reporting</router-link>
		</ul>
		<div class="userMsg">
			<div class="userMsg-avatar">
				<img :src="getAvatar">
			</div>
			<div class="userMsg-arrow">
				<img src="/static/darrow.png">
			</div>
			<ul>
				<router-link class="userMsg-list nav-list" to="/dashboard" tag="li" @click.native="addlongposition">Dashboard</router-link>
				<router-link class="userMsg-list nav-list" to="/reporting" tag="li" @click.native="addoverview">Reporting</router-link>
				<li class="userMsg-list" @click="logout">LOG OUT</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name : "Navigation",
	computed : {
		getAvatar(){
			return this.$store.state.userInfoData.avatar;
		}
	},
	methods : {
		logout(){
			this.$store.dispatch("userlogout");
			sessionStorage.removeItem("user");
			this.$router.push("/");
			document.body.style.background = "#151e38";
		},
		addlongposition(){
			this.$router.push("/dashboard/longposition");
			this.$store.dispatch("viewcount");
		},
		addoverview(){
			this.$router.push("/reporting/overview");
			this.$store.dispatch("viewcount");
		}
	}
}
</script>

<style scoped>
nav.masterNav{ height: 60px; background: #16253c; position: relative;}

div.masterNav-logo{ height: 60px; line-height: 60px; padding: 0 50px; float: left; border-right: 1px solid #5D5C5C; 
					text-align: center;}

div.masterNav-logo>span{ font-size: 35px; color: #fff;}

nav.masterNav>ul{ list-style: none; margin: 0; padding: 0; float: left;}

li.masterNav-item{ float: left; margin-left: 20px; padding: 20px; cursor: pointer; color: #FFF;}

li.router-link-active{ background: #3b517e; padding: 5px 10px; margin-top: 15px; margin-bottom: 15px; border-radius: 5px;}

div.userMsg{ position: absolute; top: 0; right: 10%;}

div.userMsg-avatar{ float: left; margin: 10px 0;}

div.userMsg-avatar>img{ width: 40px; height: 40px; border-radius: 50%;}

div.userMsg-arrow{ float: left; margin: 20px 0 20px 5px;}

div.userMsg-arrow>img{ width: 8px; height: 8px;  }

div.userMsg>ul{ display: none; margin: 0; padding: 0; list-style: none; position: absolute; top: 50px; left: 0; 
				background: #20375a; z-index: 1000; color: #fff; border-radius: 5px;}

li.userMsg-list{ width: 80px; height: 20px; line-height: 20px; text-align: center; padding: 8px; }

li.nav-list{ display: none; }

div.userMsg:hover{ cursor: pointer; }

div.userMsg:hover>ul{ display: block; }
</style>