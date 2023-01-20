$(document).ready(function(){
    var mixer = mixitup('.portfolio');
	//SMOOTH SCROLL FOR IE/SAFARI/EDGE

		$("a").on('click',function (event){
			
			if (this.hash !== ""){
				event.preventDefault();
				var hash = this.hash;
				$('html,body').animate({
					scrollTop: $(hash).offset().top
				}, 800,function(){
					window.location.hash = hash;
				});
			}
		});
});