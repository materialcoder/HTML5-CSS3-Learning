function findDays(){
	var y=parseInt(prompt("请输入您的出生年份")),
		m=parseInt(prompt("请输入您的出生月份")),
		//d=parseInt(prompt("请输入您的出生日期")),
		months=[31,28,31,30,31,30,31,31,30,31,30,31],
		day=0,days;
	
	//判断输入月份是否正确
	if(m>12 || m<1) {
		alert("请输入正确的月份（1~12）");
		return;
	}

	//判断输入日期是否正确
	var	d=parseInt(prompt("请输入您的出生日期"));
	/*if(d>months[m-1] || d<1) {
		if(y%4==0 && m==2){
			alert("2月最多有29天哦");
		}else {
			alert(m+"月最多只有"+months[m-1]+"天哦");
		}
		return;
	}*/

	//计算天数
	for(var i=0;i<m-1;i++){
		day+=months[i];
	}
	days=day+d;

	//如果是闰年，二月及之后的总天数要多一天
	if(((y%4==0 && y%100!=0) || y%400==0) && m>2) {
		days=days+1;
	}
	document.write("您的生日在"+y+"年是第"+days+"天");
}
findDays();