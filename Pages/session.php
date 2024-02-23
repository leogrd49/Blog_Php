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

    //echo "SESSION[log]".$_SESSION["log"]."<br/>";
    //echo "SESSION[id]".$_SESSION["id"]."<br/>";


?>
