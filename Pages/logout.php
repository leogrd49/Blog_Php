<?php
include 'session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="login.php">
        <input type="submit" name="submit" value='deconnexion'>
        <?php $_SESSION['log'] = 0?>
    </form>
</body>
</html>