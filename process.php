<?php
// Fetching Values From URL
$fname2 = $_POST['fname1'];
$lname2 = $_POST['lname1'];
$email2 = $_POST['email1'];
$org2 = $_POST['org1'];
$db_host = 'localhost';
$db_username = 'jbme_admin';
$db_password = 'jbme123!';
$db_name = 'jbme_2018participants';
// Establishing Connection with Server..
$conn = new mysqli($db_host, $db_username, $db_password,$db_name);

if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
$sql = "INSERT INTO registrants( registrant_fname, registrant_lname, registrant_email, registrant_org) VALUES ('$fname2', '$lname2','$email2', '$org2')"; //Insert Query

if ($conn->query($sql) === TRUE) {
	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
