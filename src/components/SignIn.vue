<template>
	<div class="signIn">
		<div class="signInBox">
			<div class="signInBox-title">
				<h1>Finance</h1>
			</div>
			<form>
				<input type="text" name="username" placeholder="Name" v-model="username">
				<input type="password" name="password" placeholder="Password" v-model="password" @keyup.enter="submitForm"> 
				<p class="fail" v-if="showFail">用户名或密码不正确</p>
				<span @click="submitForm" class="submit">SIGN IN</span>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name : "SignIn",
	data(){
		return {
			username : "",
			password : ""
		}
	},
	computed : {
		showFail(){
			return this.$store.state.signinFail;
		}
	},
	methods : {
		submitForm(){
			if( this.username=="" || this.password=="" )
			{
				alert("用户名和密码不能为空");
			}
			else
			{
				this.$store.dispatch("getUserData",{
					username : this.username,
					password : this.password
				});
				this.$router.push("/");
			}
		}
	}
}
</script>

<style scoped>
div.signIn{ position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); background: #fff; border: 5px solid #d8e0e9;
			border-radius: 5px; }

div.signInBox{ width: 300px; text-align: center; padding: 30px; box-shadow: 0 0 8px #dde3e8; }

div.signInBox-title h1{ color: #4b83d4; }

div.signInBox input{ margin-top: 20px; width: 98%; height: 30px; border-radius: 5px; border: 2px solid #c9d3df;
					 text-indent: 20px;}

p.fail{ margin: 0; padding: 0; color: #C32626;}

span.submit{ display: block; height: 40px; line-height: 40px; background: #4b83d4; margin: 30px auto; cursor: pointer;
			 border-radius: 5px; text-align: center; color: #fff;}
</style>