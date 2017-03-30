/*Mylesson.js*/
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
$(document).ready(function(){
    $.ajax({
        type: "POST",
        url: 'http://211.159.152.210:8188/AreTalkServer/Web/Api/getMyLessons.action;jsessionid='+Sessionid+"?type=1",
        data: {},
        success: function (data) {
        	// 大图课
        	$("#remind-lesson #remind-lesson-img").attr("src","http://211.159.152.210:8188"+data.data.lessonList[0].headurl);
        	$("#lesson-name").html(data.data.lessonList[0].title);

        	for (var i = 0; i<data.data.lessonList[0].lessonLabel.length; i++) {
        			$("#lv-tag").append(data.data.lessonList[0].lessonLabel[i].label);
        		}

        	$("#les-dur").html(data.data.lessonList[0].duration+"Min");        	     	
        	$("#teacher-name").html("教师："+data.data.lessonList[0].name);
        	$("#teacherHead img").attr("src","http://211.159.152.210:8188"+data.data.lessonList[0].userImgUrl);


        	/*小图课*/
 			var headurl;var Time;

        	for (var i = 1; i<data.data.lessonList.length; i++) {
        		    var Time = data.data.lessonList[i].time.slice(11,19);
        		
        		if(data.data.lessonList[i].headurl!==null){                   
                headurl = 'http://211.159.152.210:8188'+data.data.lessonList[i].headurl;                   
              }else{
                headurl = "../img/card.png" 
              };


var Les_Card ='<div class="Card mask-wrapper"><div class="card-pic"><img src='+headurl+'></div><div class="card-text">'+data.data.lessonList[i].name+'老师：'+data.data.lessonList[i].title+'</div><div class="card-info"><img src="../img/clock.png" alt=""><span>'+Time+'</span></div><img class="card-teacherImg" src="http://211.159.152.210:8188'+data.data.lessonList[i].userImgUrl+'" alt=""><div class="mask-inner">'+data.data.lessonList[i].lessonDescribe+'<div id="baoming">'+data.data.lessonList[i].currentStudents+'人已报名</div></div></div>'
			     $("#CARD").append(Les_Card);			
        	}
          

     

        },
        error: function () {
              /*  	alert("登陆超时，请重新登陆");
                  parent.location.href="../html/index.html";*/
                 }
        });

				

})