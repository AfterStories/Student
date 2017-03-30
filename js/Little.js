// Little.js
layui.use('layer', function(){
  var layer = layui.layer;      


});

function buylesson(lessonid){

      layer.open({
        type: 2,
        title: "课程目录",
        shadeClose: true,
        resize:false,
        shade: false,
        maxmin: false, 
        scrollbar: false,
        area: ['770px', '525px'],
        content: 'catalog.html?lessonId='+lessonid
      });
    
}
function getCookie(c_name) {
  var c_value = document.cookie;
  var c_start = c_value.indexOf(" " + c_name + "=");
  if (c_start == -1) {
      c_start = c_value.indexOf(c_name + "=");
  }
  if (c_start == -1) {
      c_value = null;
  }
  else {
      c_start = c_value.indexOf("=", c_start) + 1;
      var c_end = c_value.indexOf(";", c_start);
      if (c_end == -1) {
          c_end = c_value.length;
      }
      c_value = unescape(c_value.substring(c_start, c_end));
  }
  return c_value;
}



var Sessionid = getCookie("JSESSIONID");





var myDate = new Date();
//获取当前年
var year=myDate.getFullYear();
//获取当前月
var month=myDate.getMonth()+1;
//获取当前日
var date=myDate.getDate(); 
var h=myDate.getHours();       //获取当前小时数(0-23)
var m=myDate.getMinutes();     //获取当前分钟数(0-59)
var s=myDate.getSeconds();  

var nowNY=year+'-'+month+"-";
var riqi = date;
var ZTime = " 00:00:00";

var NowRiQi = nowNY+(riqi+1)+ZTime;


console.log(NowRiQi);


function GetLesson(minD,maxD){
	$.ajax({
        type: "POST",
        url: '211.159.152.210:8188/AreTalkServer/Web/Api/getLessonsByDate.action;jsessionid='+Sessionid,
        data: {minDate:minD,
        	   maxDate:maxD,
        	   type:"1"
        	},
        success: function (data) {
        	// 大图课
        	$("#remind-lesson #remind-lesson-img").attr("src","http://211.159.152.210:8188"+data.data.lessonList[0].headurl);
        	$("#lesson-name").html(data.data.lessonList[0].title);

        	for (var i = 0; i<data.data.lessonList[0].lessonLabel.length; i++) {
        			$("#lv-tag").html("").append(data.data.lessonList[0].lessonLabel[i].label);
        		}
        	$("#les-dur").html(data.data.lessonList[0].duration+"Min");
           	
        	$("#teacher-name").html("教师："+data.data.lessonList[0].name);
        	$("#teacherHead img").attr("src","http://211.159.152.210:8188"+data.data.lessonList[0].userImgUrl);
 

  /*小图课*/
        	$("#CARD").empty();//清空之前内容再添加       
 			    var headurl;var Time;
        	for (var i = 1; i<data.data.lessonList.length; i++) {
        		   var Time = data.data.lessonList[i].time.slice(11,19);        		
        		if(data.data.lessonList[i].headurl!==null){                   
                    headurl = 'http://211.159.152.210:8188'+data.data.lessonList[i].headurl;                   
                  }else{
                  headurl = "../img/card.png"                  
                  };

			var Les_Card ='<div class="Card mask-wrapper"><div class="card-pic" style="background-image:url('+headurl+')";></div><div class="card-text">'+data.data.lessonList[i].name+'老师：'+data.data.lessonList[i].title+'</div><div class="card-info"><img src="../img/clock.png" alt=""><span>'+Time+'</span></div><img class="card-teacherImg" src="http://211.159.152.210:8188'+data.data.lessonList[i].userImgUrl+'" alt=""><div class="mask-inner">'+data.data.lessonList[i].lessonDescribe+'<div class="buybuybuy">购买本课</div></div></div>'
			$("#CARD").append(Les_Card);
        	};     

        },
        error: function () {
                	/*alert("登陆超时，请重新登陆");*/
                 }
        });

}






/*$(document).ready(function() {
  var todaystar = nowNY+riqi+ZTime;
  var todayend = nowNY+(riqi+4)+ZTime;
  GetLesson(todaystar,todayend);

})
*/

$("#today").click(function(){
  var star = nowNY+riqi+ZTime;
  var end = nowNY+(riqi+1)+ZTime;
  GetLesson(star,end);

});



$("#tomor").click(function(){
  var star = nowNY+(riqi+1)+ZTime;
  var end = nowNY+(riqi+2)+ZTime;

  GetLesson(star,end);
});


$("#after").click(function(){
  var star = nowNY+(riqi+2)+ZTime;
  var end = nowNY+(riqi+3)+ZTime;

  GetLesson(star,end);
});

$("#4Day").click(function(){
  var star = nowNY+(riqi+3)+ZTime;
  var end = nowNY+(riqi+4)+ZTime;

  GetLesson(star,end);
});

$("#5Day").click(function(){
  var star = nowNY+(riqi+4)+ZTime;
  var end = nowNY+(riqi+5)+ZTime;

  GetLesson(star,end);
});

$("#6Day").click(function(){
  var star = nowNY+(riqi+5)+ZTime;
  var end = nowNY+(riqi+6)+ZTime;

  GetLesson(star,end);
});

$("#7Day").click(function(){
  var star = nowNY+(riqi+6)+ZTime;
  var end = nowNY+(riqi+7)+ZTime;

  GetLesson(star,end);
});


