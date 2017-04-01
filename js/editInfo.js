layui.use('layer', function(){
  var layer = layui.layer;      

});


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



function save() {
      var updata = {}
      var nickname= $("#nameinput").val();
      var brth= $("#brthinput").val();      
      var sex = $("input[type='radio']:checked").val();

    if (nickname!=undefined) {
         updata.nickname = nickname;
     }
    if(brth!=undefined){
        updata.sex= sex;          
     }
     if(sex!=undefined){
        updata.birthday= brth;          
     }

    alert(JSON.stringify(updata));


   $.ajax({
       type: "GET",
       url: 'http://211.159.152.210:8188/AreTalkServer/Web/Api/updateUserInfo.action;jsessionid='+Sessionid,
       data: updata,
       success: function (data) {  
       alert("成功")                      
             layer.msg('保存成功'); 
         
           },
       error: function (a,b,c) {
           /*alert("登陆超时，请重新登陆");*/
            }
       });
          
}


$(".tips").click(function(e) {  
    $(this).show();  
        e.stopPropagation();  
});  
$(document).click(function(e) {  
  
    $(".tips").hide();  
      e.stopPropagation();  
});


