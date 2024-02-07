<?php
$target_dir = "uploads/"; // Répertoire où vous souhaitez enregistrer les images

// Vérifier si un fichier a été soumis
if(isset($_FILES["fileToUpload"])) {
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]); // Chemin complet du fichier
    
    // Vérifier si le fichier est une image réelle ou une fausse image
    $check = getimagesize($_FILES["fileToUpload"]["name"]);
    if($check !== false) {
        echo "Le fichier est une image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "Le fichier n'est pas une image.";
        $uploadOk = 0;
    }

    // Vérifier si le fichier existe déjà
    if (file_exists($target_file)) {
        echo "Désolé, le fichier existe déjà.";
        $uploadOk = 0;
    }

    // Vérifier la taille de l'image
    if ($_FILES["fileToUpload"]["size"] > 500000) {
        echo "Désolé, votre fichier est trop volumineux.";
        $uploadOk = 0;
    }

    // Autoriser certains formats de fichiers
    $allowed_extensions = array("jpg", "jpeg", "png", "gif");
    $file_extension = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    if(!in_array($file_extension, $allowed_extensions)) {
        echo "Désolé, seuls les fichiers JPG, JPEG, PNG & GIF sont autorisés.";
        $uploadOk = 0;
    }

    // Vérifier si $uploadOk est défini à 0 par une erreur
    if ($uploadOk == 0) {
        echo "Désolé, votre fichier n'a pas été téléchargé.";
    // si tout est ok, essayer d'uploader le fichier
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "Le fichier ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " a été téléchargé.";
        } else {
            echo "Une erreur s'est produite lors de l'upload de votre fichier.";
        }
    }
} else {
    echo "Aucun fichier n'a été soumis.";
}
?>
