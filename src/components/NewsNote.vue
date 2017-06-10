<template>
	<div class="newNote">
		<Note :noteHead="noteHead" :noteData="noteData"></Note>
	</div>
</template>


<script>
import Note from './Note.vue'

export default {
	name : "NewsNote",
	data(){
		return {
			noteHead : "News",
			noteData : [
				{
					text : "This is a demo"
				},
				{
					text : "欢迎使用我们的产品"
				},
				{
					text : "This is a demo"
				}
			]
		}
	},
	components : {
		Note
	}
}
</script>


<style scoped>
div.newNote{ margin-top: 5%; }
</style>