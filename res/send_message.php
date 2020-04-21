<?php 
 	if (isset($_POST["email"])) {
 		$name 		= $_POST["name"];
		$subject 	= "Email wysłany ze strony internetowej";
		$mailFrom = $_POST["email"];
		$message 	= $_POST["message"];
		$mailTo 	= "rafal.kiedzierski@gmail.com";
		$headers 	= "From: " . $mailFrom . "\r\n";
		$txt = "Otrzymałeś wiadomość od " . $name . ".\n\n" . $message;
		mail($mailTo, $subject, $txt, $headers);
		header("Location: ../#contact-form");
	}
?>
