<template>
	<div class="pChart">
		<div :id="pieId" :style="{height:pieHeight}"></div>
	</div>
</template>

<script>
import Highcharts from 'highcharts'

export default {
	name : "PieChart",
	props : ["pieId","pieHeight","pieData"],
	data(){
		return {
			chart : null,
			options : {
				chart : {
			    	renderTo : this.pieId
			    },
		        title : {
		            text : null,
		        },
		        credits : {
        			enabled : false
    			},
		        tooltip : {
		            headerFormat : '{series.name}<br>',
		            pointFormat : '{point.name}: <b>{point.percentage:.2f}%</b>'
		        },
		        plotOptions : {
		            pie : {
		                dataLabels : {
		                    enabled : false,
		                    distance : -30,
		                    style : {
		                        color : '#000',
		                    }
		                },
		            }
		        },
		        series : [{
		            type : 'pie',
		            name : 'Investment',
		            innerSize : '50%',
		            data : this.pieData
		        }]
			}
		}
	},
	mounted(){
		this.addChart();
	},
	methods : {
		addChart(){
			this.chart = new Highcharts.Chart(this.options);
		}
	}
}
</script>