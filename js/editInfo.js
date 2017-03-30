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

        var userName = $("#username").val();
        TheuserName = userName;
        var password = hex_md5($("#Password").val());
        Thepassword = password;
    
    if (!userName || !password) {
            alert('请输入您的用户名与密码。');
            return false;
        }else{

                $.ajax({
                    type: "GET",
                    url: LoginURL+"login.action?userName="+userName+"&password="+password+"&userType=1",
                    data: {},
                    crossDomain: true, 
                    dataType:'jsonp',
                    jsonp:"callback",
                    jsonpCallback:'loginHandler',
                    success: function (data) {                        
                       
                      
                        },
                    error: function (a,b,c) {
                        alert(JSON.stringify(a));alert(b);alert(c);
                         }
                    });

            }   
}


$(".tips").click(function(e) {  
    $(this).show();  
        e.stopPropagation();  
});  
$(document).click(function(e) {  
  
    $(".tips").hide();  
      e.stopPropagation();  
});


