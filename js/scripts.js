$('a[href^="#"]').on('click', function (event) {
	var target = $(this.getAttribute('href'));
	if (target.length) {
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});

function submitForm() {
	var fname = document.getElementById("fname").value;
	var email = document.getElementById("email").value;
	var lname = document.getElementById("lname").value;
	var org = document.getElementById("org").value;
	// Returns successful data submission message when the entered information is stored in database.
	var dataString = 'fname1=' + fname + '&email1=' + email + '&lname1=' + lname + '&org1=' + org;
	if (fname == '' || email == '' || lname == '' || org == '') {
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
