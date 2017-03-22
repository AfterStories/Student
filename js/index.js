
	//左侧导航按钮切换
	$('#MyLesson').click(function(){
		
		$('.MyLesson-selected').show();
		$('.MyLesson').hide();
		
	});

	$('.MyLesson').click(function(){		
		$('.MyLesson-selected').show();
		$('.MyLesson').hide();
		$('.little-selected').hide();
		$('.little').show();
		$('.myinfo-selected').hide();
		$('.myinfo').show();		
		$('.one-selected').hide();
		$('.one').show();
		$('#MyUl').show().siblings('.layui-tab-title').hide();
	});


	$('#one').click(function(){
		$('.MyLesson-selected').hide();
		$('.MyLesson').show();
		$('.little-selected').hide();
		$('.little').show();
		$('.myinfo-selected').hide();
		$('.myinfo').show();		
		$('.one-selected').show();
		$('.one').hide();
		$('#OneToOneUl').show().siblings('.layui-tab-title').hide();

		
	});




	$('#little').click(function(){
		$('.MyLesson-selected').hide();
		$('.MyLesson').show();
		$('.little-selected').show();
		$('.little').hide();
		$('.myinfo-selected').hide();
		$('.myinfo').show();			
		$('.one-selected').hide();
		$('.one').show();
		$('#littleUl').show().siblings('.layui-tab-title').hide();
	});

	$('#myinfo').click(function(){
		$('.MyLesson-selected').hide();
		$('.MyLesson').show();
		$('.little-selected').hide();
		$('.little').show();
		$('.myinfo-selected').show();
		$('.myinfo').hide();		
		$('.one-selected').hide();
		$('.one').show();
		$('#infoUl').show().siblings('.layui-tab-title').hide();	
	});

    $(document).ready(function() {

    		$(document.body).css({
				"overflow-x":"hidden",
				"overflow-y":"hidden"
			});
			$('#Lessoniframe').css({
				"overflow-x":"hidden",
				"overflow-y":"hidden"
			});

    });

	layui.use(['jquery','layer','element'],function(){
	var element = layui.element(); //Tab的切换功能，切换事件监听等，需要依赖element模块
	var layer = layui.layer;
//消息弹窗
function tanchuang(Title_name,page){

  	  layer.open({
  	    type: 2,
  	    title: Title_name,
  	    shadeClose: true,
  	    resize:false,
  	    shade: false,
  	    maxmin: false, 
  	    scrollbar: false,
  	    area: ['770px', '525px'],
  	    content: page+'.html'
  	  });
  	
}
$("#menu li").bind("click",function(){  

	var Li_title = $(this).find("a").html();
	var openpage = $(this).attr('id');

	tanchuang(Li_title,openpage);
 }
 );

  
});