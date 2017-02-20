//封装document.getElementById()
function byId(id) {
	return (typeof id === "string")?document.getElementById(id):id;
}

var timer=null,
	index=0,
	pics=byId('banner').getElementsByTagName('div'),
	len=pics.length,
	titles=byId('title').getElementsByTagName('li');
	
function slideImg() {
	var cont=byId('container');
	//鼠标停留在整个页面上时停止播放
	cont.onmouseover=function(){
		if(timer) clearInterval(timer);
	}
	//离开时图片每隔1s切换一次
	cont.onmouseout=function() {
		timer=setInterval(function(){
			index++;
			if(index>=len) index=0;
			chengeImg();
		},1000);
	}
	//在cont上自动触发鼠标离开事件
	cont.onmouseout();

	//点击切换标题时显示对应图片
	for(var j=0;j<len;j++) {
		titles[j].id=j;
		titles[j].onclick=function() {
			index=this.id;
			chengeImg();
		}
	}
}

//切换图片
function chengeImg() {
	//让所有图片都隐藏,取消所有切换标题的背景
	for(var i=0;i<len;i++) {
		pics[i].style.display="none";
		titles[i].className="";
	}
	//显示当前图片和当前切换标题的背景
	pics[index].style.display="block";
	titles[index].className="active";
}

slideImg();