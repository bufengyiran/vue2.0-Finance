<template>
	<div class="note">
		<div class="note-header">
			<h4 class="note-head">{{noteHead}}</h4>
		</div>
		<div class="note-body">
			<ul>
				<li class="note-content" v-for="note in noteData">{{note.text}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name : "Note",
	props : ["noteHead","noteData"]
}
</script>

<style scoped>
div.note{ border-radius: 5px; background: #FFF;}

div.note-header{ width: 100%; height: 45px; border-bottom: 1px solid #e6e6e6; background: #fafeff; border-top-left-radius: 5px;
				 border-top-right-radius: 5px;}

h4.note-head{ margin: 0 0 0 15px; padding: 0; line-height: 45px;}

div.note-body{ padding: 20px 8% 10px 10px; }

div.note-body>ul{ padding-left: 20px; margin: 0; list-style: none;}

li.note-content{ margin-bottom: 20px; position: relative;}

li.note-content::before{ content:""; position: absolute; left: -20px; top: 5px; width: 8px; height: 8px; background: #03c1d9; 
						 border-radius: 50%;}
</style>