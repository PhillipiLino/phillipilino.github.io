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

	if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

		$('.clothes-pics figure').each(function(i) {

			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			}, 150 * (i+1));
			

		});
	} else {
		$('.clothes-pics figure').each(function(i) {

			setTimeout(function(){
				$('.clothes-pics figure').eq(i).removeClass('is-showing');
			}, 150 * (i+1));
			

		});
	}

	if(wScroll > $('.large-window').offset().top - $(window).height()){
		$('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});
	
		var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5)
		$('.window-tint').css({'opacity': opacity})

	}

	if(wScroll > $('.blog-posts').offset().top - $(window).height()){
		// console.log("teste");
		var offset = Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 350);

		$('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

		$('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

	}

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

	$('.side-menu').css({
			'transform' : 'translate(0px, -'+ wScroll / 15+'%)'
	});

});


