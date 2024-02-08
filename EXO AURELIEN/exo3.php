<?php
 require_once("connexion.php")
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="exo3.php">
    <label for="nom">Nom :</label>
    <input type="text" name="nom">

    <label for="prenom">Prénom :</label>
    <input type="text" name="prenom">
    <label for="pays-selection">Pays : </label>
    <select name="pays" id="pays-selection">
    <?php
            $sql2='SELECT * FROM `pays` ORDER BY `pays`.`id` ASC';
            $temp2=$pdo->query($sql2);
            while ($resultat2=$temp2->fetch()){
                echo "<option value='".$resultat2['id']."'";
                echo ">".$resultat2['nom'];
                echo "</option>";
            };
            ?>
    </select>
    <button type="submit" name="send">Envoyer</button>
    </form>
    <?php 
        if(isset($_REQUEST['nom']) and isset($_REQUEST['prenom']) and isset($_REQUEST['pays'])){
            echo "Bonjour ".$_REQUEST['nom']." ".$_REQUEST['prenom'].". Vous avez sélectionné le pays n°".$_REQUEST['pays'].".";
        };
    ?>
</body>
</html>