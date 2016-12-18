 //数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//封装banner插件
function createBanner(option){//创建轮播函数
	var data = option.data,//传入data的参数
		dataLen = data.length,//获得data的长度
		element = document.getElementById(option.element),//获得element的ID
		fragment = document.createDocumentFragment(),//创建文档碎片
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item)); 
		}),
		timer = createTimer();
	function createImage(option){//创建图片方法
		var a = document.createElement("a");//创建a标签
		a.href = option.href;//传入data图片地址
		a.title = option.title;//传入data的title
		a.style.backgroundImage = "url(" + option.url + ")";//给a标签传入背景图片
		return a;//然后扔出a标签
	}
	function createTimer(){//创建定时器方法,也就是图片轮播的间隔时间
		return setInterval(function(){//创建定时器
			var _a = a;
			a = a >= dataLen - 1 ? 0 : a + 1;
			images[_a].className = "";
			images[a].className = "current";
		}, 4000);
	}
	function createButton(className){
		var i = document.createElement("i");//创建一个i标签
		i.className = "icon " + className;//给i添加类名className
		i.onclick = function(){//给i添加点击事件
			clearInterval(timer);//清除定时器
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a - 1 : dataLen - 1;
			}else{
				a = a >= dataLen - 1 ? 0 : a + 1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	}
	images[a].className = "current";
	//创建左右按钮
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
}
var bannerData = [
	{
		title : "广告",
		href : "/ad",
		url : "./images/b1.jpg"
	},
	{
		title : "大风车",
		href : "/dfc",
		url : "./images/b2.jpg"
	},
	{
		title : "车牛",
		href : "/cn",
		url : "./images/b3.jpg"
	}
];
createBanner({
	element : "banner",
	data : bannerData
});
//车展览
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>"
				+ "<p>" + option.label + "</p>"
				+ "<img src=\"" + option.smallUrl + "\" />";
	return a;
}
var exhibitionData = [
	{
		href : "/a",
		bigUrl : "./images/z1.jpg",
		smallUrl : "./images/zx1.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦"
	},
	{
		href : "/a",
		bigUrl : "./images/z2.jpg",
		smallUrl : "./images/zx2.png",
		title : "百年大厂杰作",
		label : "时间在流逝,品质用流传!"
	},
	{
		href : "/a",
		bigUrl : "./images/z3.jpg",
		smallUrl : "./images/zx3.png",
		title : "便宜才是王道",
		label : "谁说便宜没好车?"
	},
	{
		href : "/a",
		bigUrl : "./images/z4.jpg",
		smallUrl : "./images/zx4.png",
		title : "驾校毕业生",
		label : "那些年,我们练过的普桑和捷达"
	},
	{
		href : "/a",
		bigUrl : "./images/z5.jpg",
		smallUrl : "./images/zx5.png",
		title : "明星也抠门",
		label : "明星也买二手车了,你还在等什么?"
	},
	{
		href : "/a",
		bigUrl : "./images/z6.jpg",
		smallUrl : "./images/zx6.png",
		title : "全能的大玩具",
		label : "越野帮手,四驱利器"
	}
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
document.getElementById("top1").onclick = function(){
	scrollTo(0, 0);
};
var tops = document.getElementById("top");
tops.style.background = "white" ;
var topClassName = tops.className;
onscroll = function(){
	tops.className = topClassName + (scrollY >= 100 ? " fixed" : " normal");
};


















