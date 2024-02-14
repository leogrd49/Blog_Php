<?php
    session_start();
    if(!isset($_SESSION["id"])) {
        // defini le mode par defaut
        $_SESSION["id"] = 0;
    }
?>
