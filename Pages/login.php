<?php
include 'navbar.php';
include 'connect_base.php';
include 'session.php';
$loginError = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $mdp = $_POST['mdp'];
    if (isset($_REQUEST['mdp'], $_REQUEST['email'])){
        $sql = $pdo->prepare("SELECT * FROM utilisateur WHERE email = ? ;");
        $sql->execute([$email]);
        $utilisateur = $sql->fetch(PDO::FETCH_ASSOC);
        if ($utilisateur && $mdp == $utilisateur['mdp']) {
            $_SESSION['id'] = $utilisateur['id_utilisateur'];
            header('Location: ' . ($utilisateur['perm'] == 1 ? 'feed_admin.php' : 'feed.php'));
            exit();
        } else {
            $loginError = 'Identifiants de connexion incorrects.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <link rel="stylesheet" href="design.css">
</head>
<body>


<div class="login-container">
    <form action="" method="post" class="login-form">
        <h2>Connexion</h2>
        <div class="input-group">
            <label for="mail">E-mail</label>
            <input type="text" name="email" id="email" required>
        </div>
        <div class="input-group">
            <label for="mdp">Mot de passe</label>
            <input type="password" name="mdp" id="mdp" required>
        </div>
        <?php echo $loginError ;?>
        <button type="submit" class="btn-submit">Se connecter</button>
    </form>
</div>
<footer>
    <div class="legal-cgs">
        <a href="legal.php">Condition générale de sécurité</a>
    </div>
</footer>

</body>
</html>