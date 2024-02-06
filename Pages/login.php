<?php
include 'navbar.php';
include 'connect_base.php';

$sql = 'SELECT * FROM admin;';
$temp = $pdo->query($sql);
$login = $temp->fetch();

?>


<form action="connexion.php" method="post">
    <label>e-mail</label>
    <input type="text" name="mail">
    <label>Mot de passe</label>
    <input type="text" name='mdp'>
    <input type="submit">
</form>


<?php
if (isset($_REQUEST['mail'])and isset($_REQUEST['mdp'])){

    if ($_REQUEST['mail']==$login[0] and $_REQUEST['mdp'] == $login[1]);
        echo 'gg';
}
?>
