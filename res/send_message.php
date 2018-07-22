<?php 
	if (isset($_POST["submit"])) {
 		$name 		= $_POST["name"];
		$subject 	= "Email wysłany ze strony internetowej";
		$mailFrom = $_POST["email"];
		$message 	= $_POST["message"]
		$mailTo 	= "grubaluk@gazeta.pl";
		$headers 	= "From: " . $mailFrom;
		$txt = "Otrzymałeś wiadomość od " . $name . ".\n\n" . $message;
		
		mail($mailTo, $subject, $txt, $headers);
		header("Location: index.php?mailsend");
	}
?>