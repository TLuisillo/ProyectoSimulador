<?php
    if (isset($POST['enviar'])) {
        if (!empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['message'])) {
            $name = $_POST['name'];
            $mail = $_POST['mail'];
            $msg = $_POST['message'];
            $header = "From: correoEjemplo@gmail.com" . "\r\n";
            $header. = "Reply-To: noReply@ejemplo.com" . "\r\n";
            $header. = "X-Mailer PHP/" . phpversion();
            $mail = mail($email, $msg, $header);
            if ($mail) {
                echo "<h4> Mail enviado Exitosamente <h4>";
            }
        }
    }
?>