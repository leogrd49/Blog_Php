<?php
include 'navbar.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />

</head>
<body>
  
  <form>
    <label for="titre">Titre de votre blog</label>
    <input type="text" name='titre'>
    <label for="auteur">Votre nom</label>
    <input type="text" name='auteur'>
    <label for="">Catégorie</label>
    <select name="categorie">
      <option value="1">Sport</option>
      <option value="2">Science</option>
      <option value="3">Histoire</option>
      <option value="4">Polotique</option>
      <option value="5">People</option>
      <option value="6">Insolite</option>
    </select>

  </form>
  <textarea name="description"></textarea>
  <h1>Upload d'image</h1>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Sélectionnez une image à télécharger :
        <input type="file" name="fileToUpload" id="fileToUpload">
        <label>Courte description de la photo</label>
        <input type="text" name="title">
        <input type="submit" value="Télécharger l'image" name="submit">
    </form>
    

</body>
</html>



<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js"></script>

<script>
  new FroalaEditor('textarea');
</script>