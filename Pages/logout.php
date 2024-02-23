<?php
include 'session.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/design.css">
    <title>Logout</title>
</head>
<body>
    <div class='bouton-container'>
    <form action="login.php">
        <input type="submit" class='bouton-deco' name="submit" value='deconnexion'>
        <?php $_SESSION['log'] = 0?>
    </form>
    </div>
</body>
</html>