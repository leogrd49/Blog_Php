<?php 
include 'connect_base.php';

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="inscription.php" method='post'>
        <label for="nom">Votre Nom</label>
        <input type="text" name="nom" required>
        <label for="prenom">Votre prenom</label>
        <input type="text" name="prenom" required>
        <label for="mail">Votre e-mail</label>
        <input type="text" name="mail" required>
        <input type="submit">
    </form>
    
    <?php 
    if (isset($_REQUEST["nom"]) and isset($_REQUEST["prenom"]) and isset($_REQUEST["mail"])){
    $prenom = $_REQUEST["prenom"];
    $nom = $_REQUEST["nom"];
    $mail = $_REQUEST["mail"];

    if($mail != "" and $prenom !="" and $nom!=""){
        echo 'Impossible de traiter les données. Erreur : ';
    } else {

                $sql = "INSERT INTO auteur (nom,prenom,mail) VALUES('$nom','$prenom','$mail'); ";
                echo $sql;
                $resultat = $pdo->exec($sql);
                    }
                    echo '<br>';
            }
            //}
        //}
        //    catch(PDOException $e){
        //    
        //}
        ?>
</body>
</html>