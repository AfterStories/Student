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

$(document).ready(function() {

//获取国家列表
var countryArry =[];
/*getcountry();*/
 getMyWallet();

function getcountry(){
    $.ajax({
          dataType:'json',
          type:'GET',
          async:false, 
          data:{},       
          url: 'http://211.159.152.210:8188/AreTalkServer/Web/Api/getCommonTable.action;jsessionid='+Sessionid,
          success:function(data) {
          for (var i = 0;i<data.data.country.length; i++) {               
                var countryId = data.data.country[i].id;
                countryArry[countryId] = {
                  countryNameCn:data.data.country[i].countryNameCn,
                  countryNameEn:data.data.country[i].countryNameEn,
                  countryNameSelf:data.data.country[i].countryNameSelf
                }
          }    console.log(countryArry)              
              },
          error:function() {
                
              }    
          });
};

function getMyWallet(){
		$.ajax({
            dataType:'json',
            type:'GET',
            async:false, 
            data:{},       
            url: 'http://211.159.152.210:8188/AreTalkServer/Web/Api/getMyWallet.action;jsessionid='+Sessionid,
            success:function(data) {
             		$("#AT").html(data.data.amountInfo.balance+"AT");
             		if (data.data.VipStatus == null) {
             			$("#MyVIP").html("未开通VIP会员");
             			$("#IFVIP").attr('src','../img/VIPfalse.png');
             		}else{
             			$("#MyVIP").text("2016-09-09"/*data.data.VipStatus*/);
             			$("#IFVIP").attr('src','../img/VIPture.png');
             		}
              },
          error:function() {
                
              }    
          });
}


        $.ajax({
              dataType:'json',
              type:'GET',
              async:false,
              data:{},       
              url: 'http://211.159.152.210:8188/AreTalkServer/Web/Api/getMyInfo.action;jsessionid='+Sessionid,
              success:function(data) {
            /*头像*/$('#userHeadimg').attr('src','http://211.159.152.210:8188'+data.data.userInfo.avatar);
            /*姓名*/$('#name').html(data.data.userInfo.user.name); 
            /*生日*/$('#brth').html((data.data.userInfo.user.birthday).slice(0,10));  
        /*注册时间*/$('#registryTime').html((data.data.userInfo.user.registryTime).slice(0,10));

            /*母语*//*$('#motherland').html(countryArry[data.data.userInfo.user.motherlandId].countryNameCn);*/
            /*国家*//*$('#country').html(countryArry[data.data.userInfo.user.countryId].countryNameCn);*/
            /*电话*/$('#phonenum').html(data.data.userInfo.user.phoneNumber);
            /*邮件*/$('#Email').html(data.data.userInfo.user.email);
               		
	/*想学习的语言*/for(i=0;i<data.data.userInfo.want.length;i++){
						if(i == data.data.userInfo.want.length-1){
							$("#want").append(data.data.userInfo.want[i].lang);
						}else{
							$("#want").append(data.data.userInfo.want[i].lang+"、");
						}
					}
										
				
            /*性别*/if(data.data.userInfo.user.sex =="1"){
               			$('#sex').html("男");
               		}else if(data.data.userInfo.user.sex =="2"){
               			$('#sex').html("女");
               		};
               		
            /*VIP*/if(data.data.userInfo.status =="1"){
               			$('#VIPIcon').attr('src','../img/VIPture.png');
               		}else{
               			$('#VIPIcon').attr('src','../img/VIPfalse.png');
               		};

                  		},
              error:function(data,a,b,c) {
                alert("登录超时请重新登陆")
                  }
                        });

});