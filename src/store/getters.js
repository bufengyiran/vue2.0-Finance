export default {
	getAssetsValue(state){
		if(state.userInfoData.assetsvalue)
		{
			var asetsvalarr = [];
			state.userInfoData.assetsvalue.forEach(item => {
				var arr = [];
				arr.push(item["date"],item["value"]);
				asetsvalarr.push(arr);
			});
			return asetsvalarr;
		}
	},
	getLongPositions(state){
		if(state.userInfoData.positions)
		{
			var longarr = [];
			state.userInfoData.positions.filter(item => item.Positions==="Long").forEach(item => {
				var arr = [];
				arr.push(item["Symbol"],item["Asset Type"],item["Long Value"],item["Long Value % GMV"]);
				longarr.push(arr);
			});
			return longarr;
		}
	},
	getShortPositions(state){
		if(state.userInfoData.positions)
		{
			var shortarr = [];
			state.userInfoData.positions.filter(item => item.Positions==="Short").forEach(item => {
				var arr = [];
				arr.push(item["Symbol"],item["Asset Type"],item["Short Value"],item["Short Value % GMV"]);
				shortarr.push(arr);
			});
			return shortarr;
		}
	},
	getAllocation(state){
		if(state.userInfoData.allocation)
		{
			var allocation = state.userInfoData.allocation;
			var allocarr = [];
			var sum = null;
			allocation.forEach(item => {
				sum += item["value"];
				return sum;
			})
			allocation.forEach(item => {
				var arr = [];
				arr.push(item["name"],item["value"],parseFloat(((item["value"]/sum)*100).toFixed(2))+"%");
				allocarr.push(arr);
			});
			return allocarr;
		}
	},
	getAllAssetsValue(state){
		if(state.alluserData.allAssetsValue)
		{
			var allasetsvalarr = [];
			state.alluserData.allAssetsValue.forEach(item => {
				var arr = [];
				arr.push(item["_id"],item["value"]);
				allasetsvalarr.push(arr);
			});
			return allasetsvalarr;
		}
	},
	getAllAllocation(state){
		if(state.alluserData.allAllocation)
		{
			var allAllocation = state.alluserData.allAllocation;
			var allallocarr = [];
			var sum = null;
			allAllocation.forEach(item => {
				sum += item["value"];
				return sum;
			})
			allAllocation.forEach(item => {
				var arr = [];
				arr.push(item["_id"],parseFloat(item["value"].toFixed(2)),parseFloat(((item["value"]/sum)*100).toFixed(2))+"%");
				allallocarr.push(arr);
			});
			return allallocarr;
		}
	},
	getAllNewUsers(state){
		if(state.alluserData.allUsersInfo)
		{
			var allUsersInfo = state.alluserData.allUsersInfo;
			var allnewuserarr = [];
			allUsersInfo.forEach(item => {
				var arr = [];
				var createDate = new Date(item["assetsvalue"][0]["date"]);
				var year = createDate.getFullYear();
				var month = (createDate.getMonth()+1)<10? "0" + (createDate.getMonth()+1) : (createDate.getMonth()+1);
				var day = createDate.getDate()<10 ? '0'+createDate.getDate() : createDate.getDate();
				var dateStr = year + "-" + month + "-" + day;
				arr.push(item["name"],item["email"],dateStr);
				allnewuserarr.push(arr);
			})
			return allnewuserarr;
		}
	},
	getAllNewAccounts(state){
		if(state.alluserData.allUsersInfo)
		{
			var allUsersInfo = state.alluserData.allUsersInfo;
			var allnewaccountarr = [];
			allUsersInfo.forEach(item => {
				var arr = [];
				var createDate = new Date(item["assetsvalue"][0]["date"]);
				var year = createDate.getFullYear();
				var month = (createDate.getMonth()+1)<10? "0" + (createDate.getMonth()+1) : (createDate.getMonth()+1);
				var day = createDate.getDate()<10 ? '0'+createDate.getDate() : createDate.getDate();
				var dateStr = year + "-" + month + "-" + day;
				arr.push(item["accountId"],item["email"],dateStr);
				allnewaccountarr.push(arr);
			})
			return allnewaccountarr;
		}
	},
	assetInvestedGrowth(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var growtharr = [];
			var initialval = getters.getAssetsValue[0][1];
			getters.getAssetsValue.filter((item,index) => index>0).forEach(item => {
				var arr = [];
				arr.push(item[0],parseFloat((((item[1]-initialval)/initialval)*100).toFixed(2)));
				growtharr.push(arr);
			});
			return growtharr;
		}
	},
	allAssetGrowth(state,getters){
		if(state.alluserData.allAssetsValue)
		{
			var growtharr = [];
			var allinitialval = getters.getAllAssetsValue[0][1];
			getters.getAllAssetsValue.filter((item,index) => index>0).forEach(item => {
				var arr = [];
				arr.push(item[0],parseFloat((((item[1]-allinitialval)/allinitialval)*100).toFixed(2)));
				growtharr.push(arr);
			});
			return growtharr;
		}
	},
	currentPortfolio(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var assetsvalue = getters.getAssetsValue;
			var currentarr = assetsvalue.filter((item,index) => index===assetsvalue.length-1);
			return currentarr;
		}
	},
	currentAllAssets(state,getters){
		if(state.alluserData.allAssetsValue)
		{
			var allasetsvalue = getters.getAllAssetsValue;
			var currentallarr = allasetsvalue.filter((item,index) => index===allasetsvalue.length-1);
			return currentallarr;
		}
	},
	lastMonth(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var assetsvalue = getters.getAssetsValue;
			var currenttimestamp = getters.currentPortfolio[0][0];
			var callastmontimestamp = currenttimestamp-((new Date(currenttimestamp).getDate())*1000*60*60*24);
			var lastmonth = assetsvalue.filter(item => item[0]===callastmontimestamp);
			return lastmonth;
		}
	},
	allastMonth(state,getters){
		if(state.alluserData.allAssetsValue)
		{
			var allasetsvalue = getters.getAllAssetsValue;
			var currenttimestamp = getters.currentAllAssets[0][0];
			var callastmontimestamp = currenttimestamp-((new Date(currenttimestamp).getDate())*1000*60*60*24);
			var allastmonth = allasetsvalue.filter(item => item[0]===callastmontimestamp);
			return allastmonth;
		}
	},
	inception(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			return getters.getAssetsValue[0];
		}
	},
	ytd(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var assetsvalue = getters.getAssetsValue;
			var currentyear = new Date(getters.currentPortfolio[0][0]).getFullYear();
			var ytdtimestamp = Date.UTC(currentyear,0,1);
			var ytd = assetsvalue.filter(item => item[0]===ytdtimestamp);
			return ytd;
		}
	},
	lastMonthRate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var currentval = getters.currentPortfolio[0][1];
			var lastmonthval = getters.lastMonth[0][1];
			return parseFloat((((currentval-lastmonthval)/lastmonthval)*100).toFixed(2)) + "%";
		}
	},
	allYesterdayDValue(state,getters){
		if(state.alluserData.allAssetsValue)
		{
			var allAssetsValue = getters.getAllAssetsValue;
			var currentallval = getters.currentAllAssets[0][1];
			var allyesval = allAssetsValue.filter((item,index) => index===allAssetsValue.length-2)[0][1];
			return (currentallval-allyesval).toFixed(2);
		}
	},
	allastLast7DValue(state,getters){
		if(state.alluserData.allAssetsValue)
		{
			var allAssetsValue = getters.getAllAssetsValue;
			var currentallval = getters.currentAllAssets[0][1];
			var allLast7val = allAssetsValue.filter((item,index) => index===allAssetsValue.length-8)[0][1];
			return (currentallval-allLast7val).toFixed(2);
		}
	},
	allastMonthDValue(state,getters){
		if(state.alluserData.allAssetsValue)
		{
			var currentallval = getters.currentAllAssets[0][1];
			var allastmonthval = getters.allastMonth[0][1];
			return (currentallval-allastmonthval).toFixed(2);
		}
	},
	inceptionRate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var currentval = getters.currentPortfolio[0][1];
			var inceptionval = getters.inception[1];
			return parseFloat((((currentval-inceptionval)/inceptionval)*100).toFixed(2)) + "%";
		}
	},
	ytdRate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var currentval = getters.currentPortfolio[0][1];
			var ytdval = getters.ytd[0][1];
			return parseFloat((((currentval-ytdval)/ytdval)*100).toFixed(2)) + "%";
		}
	},
	lastMonthDate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var lastmonDate = new Date(getters.lastMonth[0][0]);
			var year = lastmonDate.getFullYear();
			var month = (lastmonDate.getMonth()+1)<10? "0" + (lastmonDate.getMonth()+1) : (lastmonDate.getMonth()+1);
			var dateStr = month + "/" + year;
			return dateStr;
		}
	},
	inceptionDate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var inceptionDate = new Date(getters.inception[0]);
			var year = inceptionDate.getFullYear();
			var month = (inceptionDate.getMonth()+1)<10? "0" + (inceptionDate.getMonth()+1) : (inceptionDate.getMonth()+1);
			var day = inceptionDate.getDate()<10 ? '0'+inceptionDate.getDate() : inceptionDate.getDate();
			var dateStr = "From " + month + "/" + day + "/" + year;
			return dateStr;
		}
	},
	ytdDate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var year = new Date(getters.currentPortfolio[0][0]).getFullYear();
			var dateStr = "From " + "01" + "/" + "01" + "/" + year;
			return dateStr;
		}
	},
	currentDate(state,getters){
		if(state.userInfoData.assetsvalue)
		{
			var currentDate = new Date(getters.currentPortfolio[0][0]);
			var year = currentDate.getFullYear();
			var month = (currentDate.getMonth()+1)<10? "0" + (currentDate.getMonth()+1) : (currentDate.getMonth()+1);
			var day = currentDate.getDate()<10 ? '0'+currentDate.getDate() : currentDate.getDate();
			var dateStr = month + "/" + day + "/" + year;
			return dateStr;
		}
	}
}