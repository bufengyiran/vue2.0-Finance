<template>
	<div class="documentNote">
		<Note :noteHead="noteHead" :noteData="noteData"></Note>
	</div>
</template>


<script>
import Note from './Note.vue'

export default {
	name : "DocumentsNote",
	data(){
		return {
			noteHead : "Documents",
			noteData : [    //演示数据
				{
					text : "This is a demo"
				},
				{
					text : "欢迎使用我们的产品"
				},
				{
					text : "This is a demo"
				},
				{
					text : "This is a demo"
				},
				{
					text : "欢迎使用我们的产品"
				},
				{
					text : "This is a demo"
				},
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
div.documentNote{ margin-top: 5%; border-radius: 5px;}
</style>