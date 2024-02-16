<?php
    session_start();
    if(!isset($_SESSION["id"])) {
        // defini le mode par defaut
        $_SESSION["id"] = "";
    }
    if(!isset($_SESSION["log"])) {
        // defini le mode par defaut
        $_SESSION["log"] = 0;
    }
?>
