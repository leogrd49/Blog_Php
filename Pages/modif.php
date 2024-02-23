<?php
    include 'connect_base.php';
    include 'session.php';
    if ($_SESSION['log'] != '1') {
        header('"Location: login.php"');
        exit();
      }
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
    <?php
    if(isset($_REQUEST['auteur'], $_REQUEST['categorie'], $_REQUEST['titre'], $_REQUEST['description'],$_REQUEST['id'])){
        $auteur=$_REQUEST['auteur'];
        $categorie=$_REQUEST['categorie'];
        $titre=$_REQUEST['titre'];
        $description=$_REQUEST['description'];
        $id = $_REQUEST['id'];

        $sql='UPDATE article SET auteur="'.$auteur.'", categorie="'.$categorie.'",titre="'.$titre.'",description="'.$description.'" WHERE id_article='.$id;
        $pdo->exec($sql);
    }
        if (isset($_REQUEST['id'])){
            $id = $_REQUEST['id'];
            $sql="SELECT * FROM article WHERE id_article="."$id";
            $temp= $pdo->query($sql);
            $resultat=$temp->fetch();
        }
    ?>
    <form action="modif.php?id=<?php echo $id ?>" method="post">

    <label for="auteur">Auteur</label>
    <?php
        echo '<input type="text" name="auteur" value='.$resultat['auteur'].'>';
    ?>
    <select name="categorie">categorie
            <option value="1">Sport</option>
            <option value="2">Science</option>
            <option value="3">Histoire</option>
            <option value="4">Politique</option>
            <option value="5">People</option>
            <option value="6">Insolite</option>
        </select>
    <label for="titre">titre</label>
    <?php
        echo '<input type="text" name="titre" value='.$resultat['titre'].'>';
    ?>
    <label for="description">description</label>
    <?php
        echo '<input type="text" name="description" value='.$resultat['description'].'>';
    ?>
    <label for="title">title</label>
    <?php
        echo '<input type="text" name="title" value='.$resultat['title'].'>';
    ?>
    <input type="submit">
    
    </form>
    <form action="feed_admin.php">
        <button type="submit" name="send">Retour</button>
    </form>
</body>
</html>