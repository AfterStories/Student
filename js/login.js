var LoginURL = "http://192.168.1.3:8090/AreTalkServer/Web/Login/"
    

    function Login() {
        var userName = $("#username").val();

        var password = hex_md5($("#Password").val());
        
    if (!userName || !password) {
            alert('请输入您的用户名与密码。');
            return false;
        }else{
            
                $.ajax({
                    type: "POST",
                    url: LoginURL+"login.action?userName="+userName+"&password="+password+"&userType=1",
                    data: {},
                    success: function (data) {                        

                        CreateCookie(userName, password, 30);
                        CreateCookie("JSESSIONID", data.data.JSESSIONID, 30);
                        if(data.data.status=="success"){
                            alert("登录成功！");
                           /* location.href="../index.html?LoginedName="+userName;*/
                            var isLogin = true;

                           

             var Sessionid = getCookie("JSESSIONID");
              alert(Sessionid);
             var Payurl = 'http://192.168.1.3:8090/AreTalkServer/Servlet/AlipayServlet;jsessionid='
             $("#fofo").attr("action",Payurl+Sessionid);

                        }else{
                            alert("失败，密码错误！");
                             }                        
                      
                        },
                    error: function () {
                        alert("网络连接超时");
                         }
                    });
            }                 

    }




        function getSessionId(){  
                var c_name = 'JSESSIONID';  
                if(document.cookie.length>0){  
                   c_start=document.cookie.indexOf(c_name + "=")  
                   if(c_start!=-1){   
                     c_start=c_start + c_name.length+1   
                     c_end=document.cookie.indexOf(";",c_start)  
                     if(c_end==-1) c_end=document.cookie.length  
                     return unescape(document.cookie.substring(c_start,c_end));  
                   }  
                }  
            } 


        function CreateCookie(name, value, days) {
            if (days) {
                var date = new Date;
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1E3);
                var expires = "; expires=" + date.toGMTString()
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/"

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


        
        $(document).keypress(function (evt) {
            evt = (evt) ? evt : ((event) ? event : null);
            var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
            if ((evt.keyCode == 13) && (node.type == "text" || node.type == "password")) {
                if (node.id == "username" && node.value) {
                    if ($("#Password").val()) {
                        $(".submit_btn").click();
                    } else {
                        $("#Password").focus();
                    }
                }
                if (node.id == "Password" && node.value) {
                    if ($("#username").val()) {
                        $(".submit_btn").click();
                    } else {
                        $("#username").focus();
                    }
                }

                return false;
            }
            return true;
        });