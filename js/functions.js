$(window).ready(function() {
	$('.code-images').each(function(i) {
		var el = $('.code-images').eq(i);
		el.css({'filter' : 'blur('+ el.attr('blur') +'px)',
				'width' : el.attr('size')+'%'})
		// console.log($('.code-images').eq(i).attr('blur'));
		
	});
})

$(window).scroll(function() {

	var wScroll = $(this).scrollTop();
	
	$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll / 2 +'%)'
	})

	$('.back-bird').css({
		'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
	})

	$('.fore-bird').css({
		'transform' : 'translate(0px, -'+ wScroll / 40 +'%)'
	})

	$('.code-images').css({
		'transform' : 'translate(0px, -'+ wScroll / 2 +'%)'
	})


	if(wScroll > $('#games-section').offset().top - ($(window).height() / 1.2)) {

		$('#games-section figure').each(function(i) {

			setTimeout(function(){
				$('#games-section figure').eq(i).addClass('is-showing');
			}, 150 * (i+1));
			

		});
	} else {
		$('#games-section figure').each(function(i) {

			setTimeout(function(){
				$('#games-section figure').eq(i).removeClass('is-showing');
			}, 150 * (i+1));
			

		});
	}

	// if(wScroll > $('.large-window').offset().top - $(window).height()){
	// 	$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
	
	// 	var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)
	// 	$('.window-tint').css({'opacity': opacity})

	// }

	if(wScroll > $('.blog-posts').offset().top - $(window).height()){
		// console.log("teste");
		var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

		$('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

		$('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

	}

	// if(wScroll > $('.apps').offset().top - $(window).height()){
	// 	// console.log("teste");
	// 	var offset = Math.min(0, wScroll - $('.apps').offset().top + $(window).height() - 350);

	// 	$('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

	// 	$('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

	// }

	// var offsetFooter = Math.min(0, wScroll - $('.f-over').offset().top + $(window).height() - 350);
	$('.f-over').css({'transform': 'scale('+ wScroll/5 +'%)'});

	if(wScroll > $('.avatar').offset().top - $(window).height() + 600
		&& wScroll < $('.avatar').offset().top - $(window).height() + 700){
		
		$('.avatar').css({'background-position': '35%'})

	} else if(wScroll > $('.avatar').offset().top - $(window).height() + 700
		&& wScroll < $('.avatar').offset().top - $(window).height() + 800){

		$('.avatar').css({'background-position': '70%'})

	} else if(wScroll > $('.avatar').offset().top - $(window).height() + 800){

		$('.avatar').css({'background-position': '105%'})

	} else {
		$('.avatar').css({'background-position': '-13%'})
	}

	$('.code-side').css({
			'transform' : 'translate(0px, '+ wScroll / 40+'%)'
	});

	if(wScroll > $('.avatar').offset().top - $(window).height() + 600
                && wScroll < $('.avatar').offset().top - $(window).height() + 700){

	       $('.avatar1').css({'opacity': '0'})
	       $('.avatar2').css({'opacity': '1'})
	       $('.avatar3').css({'opacity': '0'})
	       $('.avatar4').css({'opacity': '0'})

	} else if(wScroll > $('.avatar').offset().top - $(window).height() + 700
	        && wScroll < $('.avatar').offset().top - $(window).height() + 800){

	       $('.avatar1').css({'opacity': '0'})
	       $('.avatar2').css({'opacity': '0'})
	       $('.avatar3').css({'opacity': '1'})
	       $('.avatar4').css({'opacity': '0'})

	} else if(wScroll > $('.avatar').offset().top - $(window).height() + 800){

	       $('.avatar1').css({'opacity': '0'})
	       $('.avatar2').css({'opacity': '0'})
	       $('.avatar3').css({'opacity': '0'})
	       $('.avatar4').css({'opacity': '1'})

	} else {
	       
	       $('.avatar1').css({'opacity': '1'})
	       $('.avatar2').css({'opacity': '0'})
	       $('.avatar3').css({'opacity': '0'})
	       $('.avatar4').css({'opacity': '0'})
	}

	// if(wScroll >= $('#unique').offset().top - $(window).height() && wScroll < $('#fine').offset().top - $(window).height()){
	// 	$("#button-unique").css({"background-color" : "gray"});
	// 	$("#button-fine").css({"background-color" : "black"});
	// 	$("#button-rich").css({"background-color" : "black"});
	// } else if(wScroll >= $('#fine').offset().top - $(window).height() && wScroll < $('#rich').offset().top - $(window).height()){
	// 	$("#button-fine").css({"background-color" : "gray"});
	// 	$("#button-unique").css({"background-color" : "black"});
	// 	$("#button-rich").css({"background-color" : "black"});

	// } else if (wScroll >= $('#rich').offset().top - $(window).height()){
	// 	$("#button-rich").css({"background-color" : "gray"});
	// 	$("#button-fine").css({"background-color" : "black"});
	// 	$("#button-unique").css({"background-color" : "black"});
	// }

});


