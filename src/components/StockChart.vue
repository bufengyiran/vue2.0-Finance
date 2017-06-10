<template>
	<div class="stockChart">
		<div :id="sChartId" :style="{width:sChartWidth,height:sChartHeight}"></div>
	</div>
</template>

<script>
import Highcharts from 'highcharts/highstock'    //highcharts模块必须且仅需在需要的组件中引入，无需全局引入

export default {
	name : "StockChart",
	props : ["sChartId","sChartWidth","sChartHeight","sChartData"],
	data(){
		return {
			marginData : "",
			options : {
				chart : {
					renderTo : this.sChartId,
					backgroundColor : "",
					events : {
						redraw(event){
							if(this.MaxId>0)
							{
						        event.target.yAxis[0].removePlotLine(this.MaxId--);
							}
							
							this.MaxId++;
							event.target.yAxis[0].addPlotLine({ 
					            value : this.yAxis[0].dataMax,
					            label : {
							        text : this.yAxis[0].dataMax,     
							        align : 'left', 
							        x : 10
							    },
					            width : 1, 
					            color : '#000', 
					            id : this.MaxId, 
					        });
							
							if(this.MinId>10)
							{
						        event.target.yAxis[0].removePlotLine(this.MinId--);
							}
							
							this.MinId++;
							event.target.yAxis[0].addPlotLine({ 
					            value : this.yAxis[0].dataMin,
					            label : {
							        text : this.yAxis[0].dataMin,     
							        align : 'left', 
							        x : 10
							    },
					            width : 1, 
					            color : '#000', 
					            id : this.MinId, 
					        });
						}
					}
				},
	            title : {
	                text : null
	            },
	            credits : {
        			enabled : false
    			},
	            scrollbar : {
	                enabled : false
	            },
	            rangeSelector : {
	            	enabled : true,
	           		selected : 1
	            },
	            navigator : {
			        handles : {
			            backgroundColor : '#eeeff0',
			            borderColor : '#9aa9bc'
			        },
			        height : 25,
			        margin : 0,
			        maskFill : 'rgba(219,227,243,0.4)',  //导航条遮罩色
			        xAxis : {
			          tickWidth : 0,
			          lineWidth : 0,
			          gridLineWidth : 0,
			          tickPixelInterval : 200,
			          labels : {
			        	 enabled : false  		 	
			          }      
			        },
			        series : {
			        	fillColor : "#eeeff0",
			            color : "#eeeff0",
			            lineWidth  : 1
			        }
			    },
	            xAxis : {
	                dateTimeLabelFormats : {
	                    millisecond : '%H:%M:%S.%L',
	                    second : '%H:%M:%S',
	                    minute : '%H:%M',
	                    hour : '%H:%M',
	                    day : '%m/%d/%Y',
	                    week : '%m/%d/%Y',
	                    month : '%m/%Y',
	                    year : '%Y'
	                },
	                lineWidth : 1,
	                lineColor : "#000",
	                tickLength : 5,
	                tickWidth : 1,
	                tickColor : "#000"
	            },
	            yAxis : {
	            	labels : {
		                align : 'right',
		                x : -10,
		                y : 4
		            },
		            opposite : false,
	                lineWidth : 1,
	                lineColor : "#000",
	            	tickLength : 5,
	                tickWidth : 1,
	                tickColor : "#000"
	            },
                tooltip : {
                    valueDecimals : 2,  //保留小数点后2位
		            pointFormat : 'Value: <b>{point.y}</b>'
                },
	            series : [{
	                type : 'areaspline',  
	                data : this.sChartData,
	                fillColor : {
                    linearGradient : {
                        x1 : 0,
                        y1 : 0,
                        x2 : 0,
                        y2 : 1
                    },
                    stops : [
                        [0, 'rgba(216,232,255,1)'],
                        [1, 'rgba(216,232,255,0)']
                    ]
	                },
	                color : "#3683f8",
	                threshold : null
	            }],
	            responsive : {
	            	rules : [{
		            	condition : {
		            		maxWidth : 416
		            	},
		            	chartOptions : {
		            		rangeSelector : {
		            			enabled : false
		            		}
		            	}
	            	}]
	            }		
			}
		}
	},
	mounted(){
		this.addChart();
	},
	methods : {
		addChart(){
			new Highcharts.StockChart(this.options,function(c){
				c.MaxId = 0;   //自定义属性
				c.MinId = 10;
			});
		}
	}
}
</script>