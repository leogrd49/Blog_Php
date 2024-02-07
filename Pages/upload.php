<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload d'image</title>
</head>
<body>
    <h1>Upload d'image</h1>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Sélectionnez une image à télécharger :
        <input type="file" name="fileToUpload" id="fileToUpload">
        <input type="submit" value="Télécharger l'image" name="submit">
    </form>
</body>
</html>

<?php
// Vérification si le formulaire a été soumis
if(isset($_POST["submit"])) {
    $target_dir = "../uploads/"; // Répertoire où seront stockées les images (créez ce répertoire s'il n'existe pas)
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]); // Chemin complet du fichier
    $uploadOk = 1; // Indicateur pour vérifier si le téléchargement est possible

    // Vérifier si le fichier image est réel ou faux
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

    // Vérifier si le fichier existe déjà
    if (file_exists($target_file)) {
        echo "Désolé, ce fichier existe déjà.";
        $uploadOk = 0;
    }

    // Vérifier la taille du fichier
    if ($_FILES["fileToUpload"]["size"] > 5000000) { // 5 Mo
        echo "Désolé, votre fichier est trop volumineux.";
        $uploadOk = 0;
    }

    // Autoriser certains formats de fichier
    $allowed_formats = array("jpg", "jpeg", "png", "gif");
    $file_extension = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if(!in_array($file_extension, $allowed_formats)) {
        echo "Désolé, seuls les fichiers JPG, JPEG, PNG et GIF sont autorisés.";
        $uploadOk = 0;
    }

    // Vérifier si $uploadOk est à 0 à cause d'une erreur
    if ($uploadOk == 0) {
        echo "Désolé, votre fichier n'a pas été téléchargé.";

    // Si tout est correct, essayer de télécharger le fichier
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "Le fichier ". basename( $_FILES["fileToUpload"]["name"]). " a été téléchargé.";
        } else {
            echo "Désolé, une erreur s'est produite lors du téléchargement de votre fichier.";
        }
    }
}


// Affichage de l'image téléchargée
if(isset($_POST["submit"]) && isset($_FILES["fileToUpload"]["tmp_name"])) {
    $target_dir = "../uploads/"; // Répertoire où seront stockées les images (créez ce répertoire s'il n'existe pas)
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]); // Chemin complet du fichier
    
    // Vérification si le fichier image est réel ou faux
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "Le fichier est une image - " . $check["mime"] . ".";
        echo "<br>";
        echo "Image téléchargée : <br>";
        echo "<img src='$target_file' alt='Image téléchargée' width='200'>";
    } else {
        echo "Le fichier n'est pas une image.";
    }
}

?>
