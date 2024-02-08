-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 08 fév. 2024 à 10:55
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `blibliotek`
--
CREATE DATABASE IF NOT EXISTS `blibliotek` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `blibliotek`;

-- --------------------------------------------------------

--
-- Structure de la table `adherant`
--

CREATE TABLE `adherant` (
  `num_adherant` int(11) NOT NULL,
  `nom_adherant` varchar(255) NOT NULL,
  `prenom_adherant` varchar(255) NOT NULL,
  `adresse_adherant` varchar(255) NOT NULL,
  `cp_adherant` int(7) NOT NULL,
  `ville_adherant` varchar(255) NOT NULL,
  `tel_adherant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE `auteur` (
  `num_auteur` int(11) NOT NULL,
  `nom_auteur` varchar(255) NOT NULL,
  `prenom_auteur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `collection`
--

CREATE TABLE `collection` (
  `code_collection` int(11) NOT NULL,
  `libelle_collection` varchar(255) NOT NULL,
  `num_editeur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `editeur`
--

CREATE TABLE `editeur` (
  `num_editeur` int(11) NOT NULL,
  `nom_editeur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `emprunte`
--

CREATE TABLE `emprunte` (
  `num_exemplaire` int(11) NOT NULL,
  `num_adherant` int(11) NOT NULL,
  `date_emprunt` date NOT NULL,
  `date_retour` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `exemplaire`
--

CREATE TABLE `exemplaire` (
  `num_exemplaire` int(11) NOT NULL,
  `etat_exemplaire` int(11) NOT NULL,
  `num_livre` int(11) NOT NULL,
  `code_collection` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `num_livre` int(11) NOT NULL,
  `type_livre` int(11) NOT NULL,
  `nom_auteur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
