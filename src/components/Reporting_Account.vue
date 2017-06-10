<template>
	<div class="reporting-Account">
		<AccountTabulation></AccountTabulation>
	</div>
</template>

<script>
import AccountTabulation from './AccountTabulation.vue'

export default {
	name : "Reporting_Account",
	components : {
		AccountTabulation
	}
}
</script>

<style scoped>
div.reporting-Account{ padding: 90px 5% 60px; background: #fff; }
</style>