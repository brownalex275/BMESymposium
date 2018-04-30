function detectmob() {

	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i)
	) {

		// If mobile, then we do all this

	} else {

		// If not mobile then do this
		document.getElementById("bgvid").src = "http://res.cloudinary.com/dx8q9ssty/video/upload/v1524624115/Teams/Splash.mp4";

	}
} // detectmob

$(window).on('load', function () {
	// Animate loader off screen
	$(".loader").fadeOut("slow");
});



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

$(document).ready(function () {

	$('.btn-filter').on('click', function () {
		var $target = $(this).data('target');
		if ($target != 'all') {
			$('.table tr').css('display', 'none');
			$('.table tr[data-status=info]').fadeIn('slow');
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
		} else {
			$('.table tr').css('display', 'none').fadeIn('slow');
		}
	});

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
