
/*j
Query(document).ready(function($) {
	
	$(".tab_nav").on('click',function(event) {
		//event.preventDefault();
		var targetLink = $(this).attr('href');
		$(targetLink).siblings().removeClass('active');
		setTimeout(function(){
			$(targetLink).siblings('.about_content').hide();
			$(targetLink).css('display','flex');
			setTimeout(function(){
				$(targetLink).addClass('active');
			},500);
		},1000);
		
	});
	
});*/

function myFunction(pageshow,pagehide) {
  var x = document.getElementById(pageshow).style.display = 'block';
  var y = document.getElementById(pagehide).style.display = 'none';
  return false;
}