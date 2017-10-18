
;(function($){
	function esconder(){
					$(".opcoes").css({"width": 0
								,"padding": 0
								,"height": "100%"
								,"background": "transparent"
								,"font-size": 0
							});
					$(".opcoes img").css("width", "0");
				}
				function mostrar(){
					$(".opcoes").css({
						"width": "300px"
						,"padding": "5px"
						,"height": "100%"
						,"background": "black"
						,"font-size": "1em"
					});
					$(".opcoes img").css("width", "30px");

				}
$.fn.slideMenu=function(){
		
				esconder();

				$(".abrir").click(function(){
					mostrar();
				})
				$(".fechar").click(function(){
					esconder();
					
				})
				$(".fix").mouseleave(function(){
					esconder();
					$(".fechar").attr("class","abrir");
				})
	}

}) (jQuery);