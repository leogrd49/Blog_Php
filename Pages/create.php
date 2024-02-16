<?php
include 'navbar.php';
include 'connect_base.php';
include'session.php';
// Initialisation des variables vides

$target_file = '';
if(isset($_POST["submit"])) {
  $target_dir = "../uploads/"; 
  $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]); 
  $uploadOk = 1; 

  if(isset($_POST["submit"])) {
      $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
      if($check !== false) {
          echo "Le fichier est une image - " . $check["mime"] . ".";
          $uploadOk = 1;
      } else {
          echo "Le fichier n'est pas une image.";
          $uploadOk = 0;
      }
  }

  if (file_exists($target_file)) {
      echo "Désolé, ce fichier existe déjà.";
      $uploadOk = 0;
  }


  if ($_FILES["fileToUpload"]["size"] > 5000000) { // 5 Mo
      echo "Désolé, votre fichier est trop volumineux.";
      $uploadOk = 0;
  }

  $allowed_formats = array("jpg", "jpeg", "png", "gif");
  $file_extension = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
  if(!in_array($file_extension, $allowed_formats)) {
      echo "Désolé, seuls les fichiers JPG, JPEG, PNG et GIF sont autorisés.";
      $uploadOk = 0;
  }


  if ($uploadOk == 0) {
      echo "Désolé, votre fichier n'a pas été téléchargé.";

  } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
          echo "Le fichier ". basename( $_FILES["fileToUpload"]["name"]). " a été téléchargé.";
      } else {
          echo "Désolé, une erreur s'est produite lors du téléchargement de votre fichier.";
      }
  }
}
  if (isset($_REQUEST['categorie'])and isset($_REQUEST['titre'])and isset($_REQUEST['description']) and isset($_REQUEST['title'])){
    $auteur = $_SESSION['id'];
    $categorie = $_REQUEST['categorie'];
    $titre = $_REQUEST['titre'];
    $description = $_REQUEST['description'];
    $title = $_REQUEST['title'];
    $desblog = $_REQUEST['$desblog'];
    $date = date('Y/m/d');
    $sql = "INSERT INTO article (auteur,id_categorie,titre,date_sortie,description,lien_image,title,desblog) VALUES('$auteur','$categorie','$titre','$date','$description','$target_file','$title','$desblog') ;";
    $temp = $pdo->exec($sql);
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/design.css">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />

</head>
<body>
  <div class='paddingtop'>
  <form action="create.php" method="post" enctype='multipart/form-data'>
  <div class="tbc-form">
    <div class="tbc-container">
      <div class="grid-left-part">
        <h2>Créer votre blog</h2>
        <div class="input-group">
          <label for="titre" class='black'>Titre de votre blog</label>
          <input type="text" name='titre' required>
        </div>
        <div class="input-group">
          <label for="auteur">Votre nom</label>
          <input type="text" name='auteur' required>
        </div>
        <div class="cate-group">
          <label for="categorie" class='black'>Catégorie</label>
          <select name="categorie" required>
            <option value="1">Sport</option>
            <option value="2">Science</option>
            <option value="3">Histoire</option>
            <option value="4">Politique</option>
            <option value="5">People</option>
            <option value="6">Insolite</option>
          </select>
        </div>
      
        <p>Sélectionnez une image à télécharger :</p>
        <div class="input-group-v2">
          <input type="file" name="fileToUpload" id="fileToUpload" required></br>
        </div>
        </br>
        <div class="input-group">
          <label class='black'>Courte description de la photo</label> 
          <input type="text" name="title" class="txt-chiant"></input>
        </div>
        <div class="input-group">
          <label class='black'>Courte description du blog</label> 
          <input type="text" name="desblog" class="txt-chiant"></input>
        </div>
        <div class="input-group-v3">
          <input type="submit" name='submit'></input>
        </div>  
      </div>   
      <div class="grid-right-part">   
        <textarea name="description" required></textarea>  
      </div>
    </div>
  </div>  
  </form>
  </div>
</body>
</html>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js"></script>

<script>
  new FroalaEditor('textarea');
</script>