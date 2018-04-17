	$(window).on('load', function () {
		// Animate loader off screen
		$(".loader").fadeOut("slow");;
	});

	window.onload = function () {
		if ( /* conditions */ window.innerWidth > 480)
			document.querySelector("video").src = "https://res.cloudinary.com/dx8q9ssty/video/upload/v1523339931/video.mp4";
	};



	$('a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
			$('#myBtn').fadeIn('fast'); // Fade in the arrow
		} else {
			$('#myBtn').fadeOut('fast'); // Else fade out the arrow
		}
	});

	$('#myBtn').click(function () { // When arrow is clicked
		$('body,html').animate({
			scrollTop: 0 // Scroll to top of body
		}, 500);
	});



	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	function submitForm() {
		var fname = document.getElementById("fname").value;
		var email = document.getElementById("email").value;
		var lname = document.getElementById("lname").value;
		var org = document.getElementById("org").value;
		// Returns successful data submission message when the entered information is stored in database.
		var dataString = 'fname1=' + fname + '&email1=' + email + '&lname1=' + lname + '&org1=' + org;
		if (fname == '' || email == '' || lname == '') {
			alert("Please Fill All Fields");
		} else {
			// AJAX code to submit form.
			$.ajax({
				type: "POST",
				url: "process.php",
				data: dataString,
				cache: false,
				success: function (html) {
					alert('Thank you for registering!');
				}
			});
		}

		return false;
	}

	$('#fname').focusin(function () {
		$("#flabel").hide();
	});


	$('#lname').focusin(function () {
		$("#llabel").hide();
	});


	$('#email').focusin(function () {
		$("#elabel").hide();
	});


	$('#org').focusin(function () {
		$("#olabel").hide();
	});
