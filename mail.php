<?php 


$msg = "";
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/PHPMailer.php";
require "PHPMailer/Exception.php";


if(isset($_POST['submit'])) {
	$name = $_POST['contact_name'];
	$subject = $_POST['contact_subject'];
	$email = $_POST['contact_email'];
	$message = $_POST['contact_message'];
	$body = "From: " . $name . "\r\nMessage: " . $message;  




	$mail = new PHPMailer();
	$mail->addAddress('info@aleksandardmitrovic.com');
	$mail->setFrom($email, $name);
	$mail->Subject = $subject;
	$mail->isHTML(true);
	$mail->Body = $body;
	$mail->AltBody = strip_tags($body);


	if($mail->send()) {
		header("Location:index.php");
	} else {
		$msg = "Please try again";
	}
}