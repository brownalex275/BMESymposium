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
$connection = mysql_connect( $db_host, $db_username, $db_password) or die(mysql_error("Could not establish connection to $db_name")); // Establishing Connection with Server..
$db = mysql_select_db($db_name); // Selecting Database

if (isset($_POST['name1'])) {

$query = mysql_query("CREATE TABLE IF NOT EXISTS registrants(
registrant_id int(10) NOT NULL AUTO_INCREMENT,
registrant_fname varchar(255) NOT NULL,
registrant_lname varchar(255) NOT NULL,
registrant_email varchar(255) NOT NULL,
registrant_org varchar(255) NOT NULL,
PRIMARY KEY (registrant_id));

INSERT INTO registrants( registrant_fname, registrant_lname, registrant_email, registrant_org) values ('$fname2', '$lname2','$email2', '$org2'));")//Insert Query

}


mysql_close($connection); // Connection Closed
?>
