jQuery.noConflict();

jQuery(document).ready(function() {
					
	// VARIABLES

	isMenuVis=false;
	
	
	// EVENT HANDLERS
	jQuery(".menuButton").on("click", function(event){
		event.preventDefault()

		if (isMenuVis == false){
			jQuery(".mainMenu").fadeIn(750)
			jQuery(".mainMenu").css("left", "0")
			jQuery(".menuButtonDifColor").fadeIn(750)
			isMenuVis=true
		} else{
			jQuery(".mainMenu").css("left", "-100vw")
			jQuery(".mainMenu").fadeOut(250)
			jQuery(".menuButtonDifColor").fadeOut(250)
			isMenuVis=false
		}
	})

	jQuery(".knifeClue").on("click", function(event){
		event.preventDefault()

		jQuery(".knifeBubble").fadeToggle(500)
	})

	jQuery(".footClue").on("click", function(event){
		event.preventDefault()

		jQuery(".footBubble").fadeToggle(500)
	})

	jQuery(".fingerClue").on("click", function(event){
		event.preventDefault()

		jQuery(".fingerBubble").fadeToggle(500)
	})



	jQuery(".q1next").on("click", function(event){
		event.preventDefault()

		jQuery(".q1").fadeOut(500)
		jQuery(".q2").delay(300).fadeIn(700)
	})

	jQuery(".q2back").on("click", function(event){
		event.preventDefault()

		jQuery(".q2").fadeOut(500)
		jQuery(".q1").delay(300).fadeIn(700)
	})

	jQuery(".q2next").on("click", function(event){
		event.preventDefault()

		jQuery(".q2").fadeOut(500)
		jQuery(".q3").delay(300).fadeIn(700)
	})

	jQuery(".q3back").on("click", function(event){
		event.preventDefault()

		jQuery(".q3").fadeOut(500)
		jQuery(".q2").delay(300).fadeIn(700)
	})

	jQuery(".q3next").on("click", function(event){
		event.preventDefault()

		jQuery(".q3").fadeOut(500)
		jQuery(".q4").delay(300).fadeIn(700)
	})

	jQuery(".q4back").on("click", function(event){
		event.preventDefault()

		jQuery(".q4").fadeOut(500)
		jQuery(".q3").delay(300).fadeIn(700)
	})

	jQuery(".q4next").on("click", function(event){
		event.preventDefault()

		jQuery(".q4").fadeOut(500)
		jQuery(".q5").delay(300).fadeIn(700)
	})

	jQuery(".q5back").on("click", function(event){
		event.preventDefault()

		jQuery(".q5").fadeOut(500)
		jQuery(".q4").delay(300).fadeIn(700)
	})

	jQuery(".q5next").on("click", function(event){
		event.preventDefault()

		jQuery(".q5").fadeOut(500)
		jQuery(".confirm").delay(300).fadeIn(700)
	})

	jQuery(".confirmBack").on("click", function(event){
		event.preventDefault()

		jQuery(".confirm").fadeOut(500)
		jQuery(".q5").delay(300).fadeIn(700)
	})




	jQuery(".firstButton").on("click", function(event){
		event.preventDefault()

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#setting").offset().top
	    }, 1000);
	});

	jQuery(".settingButton").on("click", function(event){
		event.preventDefault()
			jQuery(".mainMenu").css("left", "-100vw")
			jQuery(".mainMenu").fadeOut(250)
			jQuery(".menuButtonDifColor").fadeOut(250)
			isMenuVis=false

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#setting").offset().top
	    }, 1000);
	});

	jQuery(".companionButton").on("click", function(event){
		event.preventDefault()
		jQuery(".mainMenu").css("left", "-100vw")
		jQuery(".mainMenu").fadeOut(250)
		jQuery(".menuButtonDifColor").fadeOut(250)
		isMenuVis=false

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#companions").offset().top
	    }, 1000);
	});

	jQuery(".informationButton").on("click", function(event){
		event.preventDefault()
		jQuery(".mainMenu").css("left", "-100vw")
		jQuery(".mainMenu").fadeOut(250)
		jQuery(".menuButtonDifColor").fadeOut(250)
		isMenuVis=false

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#information").offset().top
	    }, 1000);
	});

	jQuery(".entertainmentButton").on("click", function(event){
		event.preventDefault()
		jQuery(".mainMenu").css("left", "-100vw")
		jQuery(".mainMenu").fadeOut(250)
		jQuery(".menuButtonDifColor").fadeOut(250)
		isMenuVis=false

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#entertainment").offset().top
	    }, 1000);
	});

	jQuery(".reservationButton").on("click", function(event){
		event.preventDefault()

		jQuery(".mainMenu").css("left", "-100vw")
		jQuery(".mainMenu").fadeOut(250)
		jQuery(".menuButtonDifColor").fadeOut(250)
		isMenuVis=false

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#reservation").offset().top
	    }, 1000);

	    console.log("done")
	});

	jQuery(".contactButton").on("click", function(event){
		event.preventDefault()
		jQuery(".mainMenu").fadeOut(250)
		jQuery(".menuButtonDifColor").fadeOut(250)
		isMenuVis=false

	    jQuery([document.documentElement, document.body]).animate({
	        scrollTop: jQuery("#footer").offset().top
	    }, 1000);
	});



	jQuery(".host1").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host1").hasClass("active") || jQuery(".nepoBaby1").hasClass("active") || jQuery(".wineAunt1").hasClass("active") || jQuery(".cat1").hasClass("active")){
			hide1();
		} else{
			jQuery(".host1").addClass("active")
			jQuery(".nepoBaby1").css("opacity", "25%")
			jQuery(".wineAunt1").css("opacity", "25%")
			jQuery(".cat1").css("opacity", "25%")
			document.getElementById("text1").innerHTML="I was out on the town when my wife was murdered. Whoever it was may have waited for me to leave to prevent there from being a witness. <br> <br> As for my alibi, well, I suppose you'll just have to trust me as the host.";
			if (jQuery(window).width() < 768){
				jQuery(".speech1").css("margin-left", "0")
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech1").css("margin-left", "25.833%")
			} else{
				jQuery(".speech1").css("margin-left", "17.178%")
			}
			jQuery(".speech1").fadeIn(750)
		}
	});

	jQuery(".nepoBaby1").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host1").hasClass("active") || jQuery(".nepoBaby1").hasClass("active") || jQuery(".wineAunt1").hasClass("active") || jQuery(".cat1").hasClass("active")){
			hide1();
		} else{
			jQuery(".nepoBaby1").addClass("active")
			jQuery(".host1").css("opacity", "25%")
			jQuery(".wineAunt1").css("opacity", "25%")
			jQuery(".cat1").css("opacity", "25%")
			document.getElementById("text1").innerHTML="Uhhhhhhh you're asking me? I'm Kathy's niece! <br><br> My mom, Lizzy, probably knows more than me.";
			if (jQuery(window).width() < 768){
				jQuery(".speech1").css("margin-left", "26.786%")
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech1").css("margin-left", "34.444%")
			} else{
				jQuery(".speech1").css("margin-left", "34.356%")
			}
			jQuery(".speech1").fadeIn(750)
		}
	});

	jQuery(".wineAunt1").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host1").hasClass("active") || jQuery(".nepoBaby1").hasClass("active") || jQuery(".wineAunt1").hasClass("active") || jQuery(".cat1").hasClass("active")){
			hide1();
		} else{
			jQuery(".wineAunt1").addClass("active")
			jQuery(".host1").css("opacity", "25%")
			jQuery(".nepoBaby1").css("opacity", "25%")
			jQuery(".cat1").css("opacity", "25%")
			if (jQuery(window).width() < 768){
				jQuery(".speech2").css("margin-left", "0")
				document.getElementById("text2").innerHTML="I am Elizabeth. My sister did pass recently, yes, but I had nothing to do with it. <br><br> Perhaps you should look to her husband, who stands to gain substantially from her life insurance and full access to her extensive wealth.";
				jQuery(".speech2").fadeIn(750)
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech2").css("margin-left", "25.833%")
				document.getElementById("text2").innerHTML="I am Elizabeth. My sister did pass recently, yes, but I had nothing to do with it. <br><br> Perhaps you should look to her husband, who stands to gain substantially from her life insurance and full access to her extensive wealth.";
				jQuery(".speech2").fadeIn(750)
			} else{
				jQuery(".speech1").css("margin-left", "24.767%")
				document.getElementById("text1").innerHTML="I am Elizabeth. My sister did pass recently, yes, but I had nothing to do with it. <br><br> Perhaps you should look to her husband, who stands to gain substantially from her life insurance and full access to her extensive wealth.";
				jQuery(".speech1").fadeIn(750)
			}
		}
	});

	jQuery(".cat1").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host1").hasClass("active") || jQuery(".nepoBaby1").hasClass("active") || jQuery(".wineAunt1").hasClass("active") || jQuery(".cat1").hasClass("active")){
			hide1();
		} else{
			jQuery(".cat1").addClass("active")
			jQuery(".host1").css("opacity", "25%")
			jQuery(".nepoBaby1").css("opacity", "25%")
			jQuery(".wineAunt1").css("opacity", "25%")
			if (jQuery(window).width() < 768){
				jQuery(".speech2").css("margin-left", "26.786%")
				document.getElementById("text2").innerHTML="mrrrrrrrrrrr* <br> <br> *I’m Belladonna. I didn’t do it, so leave me alone!";
				jQuery(".speech2").fadeIn(750)
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech2").css("margin-left", "34.444%")
				document.getElementById("text2").innerHTML="mrrrrrrrrrrr* <br> <br> *I’m Belladonna. I didn’t do it, so leave me alone!";
				jQuery(".speech2").fadeIn(750)
			} else{
				jQuery(".speech1").css("margin-left", "42.945%")
				document.getElementById("text1").innerHTML="mrrrrrrrrrrr* <br> <br> *I’m Belladonna. I didn’t do it, so leave me alone!";
				jQuery(".speech1").fadeIn(750)
			}
		}
	});



	jQuery(".host2").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host2").hasClass("active") || jQuery(".nepoBaby2").hasClass("active") || jQuery(".wineAunt2").hasClass("active") || jQuery(".cat2").hasClass("active")){
			hide2();
		} else{
			jQuery(".host2").addClass("active")
			jQuery(".nepoBaby2").css("opacity", "25%")
			jQuery(".wineAunt2").css("opacity", "25%")
			jQuery(".cat2").css("opacity", "25%")
			document.getElementById("text3").innerHTML="How SCANDALOUS! The host, a murderer! <br><br> I'm afraid you'll have to remember that I am the one who made this website. Why would I cast doubt on myself?";
			if (jQuery(window).width() < 768){
				jQuery(".speech3").css("margin-left", "0")
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech3").css("margin-left", "25.833%")
			} else{
				jQuery(".speech3").css("margin-left", "17.178%")
			}
			jQuery(".speech3").fadeIn(750)
		}
	});

	jQuery(".nepoBaby2").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host2").hasClass("active") || jQuery(".nepoBaby2").hasClass("active") || jQuery(".wineAunt2").hasClass("active") || jQuery(".cat2").hasClass("active")){
			hide2();
		} else{
			jQuery(".nepoBaby2").addClass("active")
			jQuery(".host2").css("opacity", "25%")
			jQuery(".wineAunt2").css("opacity", "25%")
			jQuery(".cat2").css("opacity", "25%")
			document.getElementById("text3").innerHTML="I would never! Kathy was always so nice to me. <br><br> I already have enough money for everything I want, so I would never hurt family!";
			if (jQuery(window).width() < 768){
				jQuery(".speech3").css("margin-left", "26.786%")
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech3").css("margin-left", "34.444%")
			} else{
				jQuery(".speech3").css("margin-left", "34.356%")
			}
			jQuery(".speech3").fadeIn(750)
		}
	});

	jQuery(".wineAunt2").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host2").hasClass("active") || jQuery(".nepoBaby2").hasClass("active") || jQuery(".wineAunt2").hasClass("active") || jQuery(".cat2").hasClass("active")){
			hide2();
		} else{
			jQuery(".wineAunt2").addClass("active")
			jQuery(".host2").css("opacity", "25%")
			jQuery(".nepoBaby2").css("opacity", "25%")
			jQuery(".cat2").css("opacity", "25%")
			if (jQuery(window).width() < 768){
				jQuery(".speech4").css("margin-left", "0")
				document.getElementById("text4").innerHTML="So, you found me out. <br><br> I suppose you'll have to go too. Say thank you to my sister, alright?";
				jQuery(".speech4").fadeIn(750)
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech4").css("margin-left", "25.833%")
				document.getElementById("text4").innerHTML="So, you found me out. <br><br> I suppose you'll have to go too. Say thank you to my sister, alright?";
				jQuery(".speech4").fadeIn(750)
			} else{
				jQuery(".speech3").css("margin-left", "24.767%")
				document.getElementById("text3").innerHTML="So, you found me out. <br><br> I suppose you'll have to go too. Say thank you to my sister, alright?";
				jQuery(".speech3").fadeIn(750)
			}
		}
	});

	jQuery(".cat2").on("click", function(event){
		event.preventDefault()

		if(jQuery(".host2").hasClass("active") || jQuery(".nepoBaby2").hasClass("active") || jQuery(".wineAunt2").hasClass("active") || jQuery(".cat2").hasClass("active")){
			hide2();
		} else{
			jQuery(".cat2").addClass("active")
			jQuery(".host2").css("opacity", "25%")
			jQuery(".nepoBaby2").css("opacity", "25%")
			jQuery(".wineAunt2").css("opacity", "25%")
			if (jQuery(window).width() < 768){
				jQuery(".speech4").css("margin-left", "26.786%")
				document.getElementById("text4").innerHTML="mrrrrrrrow* <br><br>*I didn’t do it! I can’t even leave fingerprints!";
				jQuery(".speech4").fadeIn(750)
			} else if(jQuery(window).width() < 1025){
				jQuery(".speech4").css("margin-left", "34.444%")
				document.getElementById("text4").innerHTML="mrrrrrrrow* <br><br>*I didn’t do it! I can’t even leave fingerprints!";
				jQuery(".speech4").fadeIn(750)
			} else{
				jQuery(".speech3").css("margin-left", "42.945%")
				document.getElementById("text3").innerHTML="mrrrrrrrow* <br><br>*I didn’t do it! I can’t even leave fingerprints!";
				jQuery(".speech3").fadeIn(750)
			}
		}
	});



	
	// FUNCTIONS
	function initialize(){
		var hash = window.location.hash;
		
		if (hash=="#ty"){
			jQuery(".thanks").fadeIn(1000)
			jQuery(".arrowContainer").fadeOut(0)
			jQuery(".jotform-form").fadeOut(0)

			jQuery([document.documentElement, document.body]).animate({
	        	scrollTop: jQuery("#reservation").offset().top
	    	}, 1000);
		}
	}

	function hide1(){
		jQuery(".host1").removeClass("active")
		jQuery(".nepoBaby1").removeClass("active")
		jQuery(".wineAunt1").removeClass("active")
		jQuery(".cat1").removeClass("active")
		jQuery(".speech1").fadeOut(250)
		jQuery(".speech2").fadeOut(250)
		jQuery(".host1").css("opacity", "100%")
		jQuery(".nepoBaby1").css("opacity", "100%")
		jQuery(".wineAunt1").css("opacity", "100%")
		jQuery(".cat1").css("opacity", "100%")
	}

	function hide2(){
		jQuery(".host2").removeClass("active")
		jQuery(".nepoBaby2").removeClass("active")
		jQuery(".wineAunt2").removeClass("active")
		jQuery(".cat2").removeClass("active")
		jQuery(".speech3").fadeOut(250)
		jQuery(".speech4").fadeOut(250)
		jQuery(".host2").css("opacity", "100%")
		jQuery(".nepoBaby2").css("opacity", "100%")
		jQuery(".wineAunt2").css("opacity", "100%")
		jQuery(".cat2").css("opacity", "100%")
	}

	
	
	// INITIALIZATION
	initialize();

	
});