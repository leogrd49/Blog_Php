<?php 
include 'connect_base.php';
include 'session.php';
if ($_SESSION['log'] == 1){
    include 'navbar.php';
} else{
    include 'navbar-connect.php';
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class='ins-container'>
        <form action="" method='post' class='ins-form'>
        <h3>Créez un compte :</h3>
        <div class="input-group">
            <label for="nom">Votre Nom</label>
            <input type="text" name="nom" required>
        </div>
        <div class="input-group">
            <label for="prenom">Votre prenom</label>
            <input type="text" name="prenom" required>
        </div>
        <div class="input-group">
            <label for="mail">Votre e-mail</label>
            <input type="text" name="mail" required>
        </div>
        <div class="input-group">
            <label for="mdp">Votre mot de passe</label>
            <input type="text" name="mdp" required>
        </div>
        <div class="input-group">
            <label for="style">Votre style d'écriture</label>
            <input type="text" name="style" required>
        </div>
        <div class="input-group">
            <label for="naissance">Votre lieu de naissance</label>
            <input type="text" name="naissance" required>
        </div>
        <div class="input-group">
            <input type="date" name="date_naissance" required>
        </div>
        <div class="text-center">
            <h3>Vous avez déjà un compte ?</h3>
            <a href="login.php">Connectez vous !</a>
        </div>
        <button type="submit" class="btn-submit">Créer un compte</button>
        </form>
    </div>
    <?php 
    if (isset($_REQUEST["nom"]) and isset($_REQUEST["prenom"]) and isset($_REQUEST["mail"]) and isset($_REQUEST["mdp"]) and isset($_REQUEST["style"]) and isset($_REQUEST["naissance"]) and isset($_REQUEST["date_naissance"])){
    $prenom = $_REQUEST["prenom"];
    $nom = $_REQUEST["nom"];
    $mail = $_REQUEST["mail"];
    $mdp = $_REQUEST["mdp"];
    $style = $_REQUEST["style"];
    $lieu_naissance = $_REQUEST["naissance"];
    $date = $_REQUEST["date_naissance"];
                $sql = "INSERT INTO auteur (nom,prenom,mail,mdp,date_naissance,style_ecriture,lieu_naissance) VALUES('$nom','$prenom','$mail','$mdp','$date','$style','$lieu_naissance'); ";
                $resultat = $pdo->exec($sql);
        }
                
        ?>
    
</body>
</html>
