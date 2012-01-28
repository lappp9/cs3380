(function($){	
	//onload
	$(function(){
		
		$("li.nav").click(function(e){
    		$("li.active").removeClass("active");
   			$(this).addClass("active");
   			$content = $("#content");
   			$targetResource=$("li.active").children().html().toLowerCase();
   			$newContent = $.ajax("partials/"+$targetResource + ".html", {"success": 
   				function(){
		   			$("#content").html($newContent.responseText);
   				}
   			});
		});
		
		
	});
})(jQuery);
