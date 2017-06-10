<template>
	<div class="tabu" :style="{width:tabuWidth}">
		<div class="tabu-head" :style="{height:tabuHeadHeight,lineHeight:tabuHeadHeight,background:tabuHeadBg}">
			<span class="tabu-header" v-for="(header,index) in tabuHead" :style="{flex:tabuFlex[index]}">
				<i class="tabu-header-content">{{header}}</i>
			</span>
		</div>
		<div class="tabu-body">
			<ul>
				<li :class="'tabu-list '+(idx%2===0?'list-change':'')" :style="{background:tabuListBg}" v-for="(list,idx) in tabuList">
					<span class="tabu-item" :style="{flex:tabuFlex[0]}" v-if="idxShow"><i class="tabu-item-content">{{idx+1}}</i></span>
					<span class="tabu-item" v-for="(item,index) in list" :style="{flex:tabuFlex[index+(idxShow?1:0)]}">
						<i class="tabu-item-content">{{item}}</i>
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>


<script>
export default {
	name : "Tabulation",
	props : ["tabuWidth","tabuFlex","tabuHead","tabuList","tabuHeadHeight","tabuHeadBg","tabuListBg","idxShow"]
}
</script>

<style scoped>
div.tabu{ font-size: 14px; }

div.tabu-body>ul{ list-style: none; margin: 0; padding: 0; }

div.tabu-head,li.tabu-list{ display: flex; }

div.tabu-head{ height: 30px; line-height: 30px;}

li.tabu-list{ height: 50px; line-height: 50px; border-top: 1px solid #e6e6e6; color: #666666;}

.list-change{ background: #f7fafc; }

span.tabu-header,span.tabu-item{ padding-left: 2%; }

i.tabu-header-content,i.tabu-item-content{ font-style: normal; }

i.tabu-header-content{ font-size: 1.1em; }
</style>