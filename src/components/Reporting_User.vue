<template>
	<div class="reporting-User">
		<UserTabulation></UserTabulation>
	</div>
</template>

<script>
import UserTabulation from './UserTabulation.vue'

export default {
	name : "Reporting_User",
	components : {
		UserTabulation
	}
}
</script>

<style scoped>
div.reporting-User{ padding: 90px 5% 60px; background: #fff; }
</style>