-- phpMyAdmin SQL Dump
-- version 2.10.3deb1ubuntu0.2
-- http://www.phpmyadmin.net
-- 
-- Serveur: localhost
-- Généré le : Ven 30 Mai 2008 à 02:11
-- Version du serveur: 5.0.45
-- Version de PHP: 5.2.3-1ubuntu6.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- Base de données: `eleve`
-- 

-- --------------------------------------------------------

-- 
-- Structure de la table `adherent`
-- 

CREATE TABLE IF NOT EXISTS `adherent` (
  `num_adherent` bigint(20) NOT NULL auto_increment,
  `nom_adherent` varchar(25) default NULL,
  `prenom_adherent` varchar(25) default NULL,
  `adresse_adherent` varchar(50) default NULL,
  `cp_adherent` varchar(6) default NULL,
  `ville_adherent` varchar(50) default NULL,
  `tel_adherent` varchar(10) default NULL,
  PRIMARY KEY  (`num_adherent`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- 
-- Contenu de la table `adherent`
-- 


-- --------------------------------------------------------

-- 
-- Structure de la table `auteur`
-- 

CREATE TABLE IF NOT EXISTS `auteur` (
  `num_auteur` bigint(20) NOT NULL auto_increment,
  `nom_auteur` varchar(25) default NULL,
  `prenom_auteur` varchar(25) default NULL,
  PRIMARY KEY  (`num_auteur`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=28 ;

-- 
-- Contenu de la table `auteur`
-- 

INSERT INTO `auteur` (`num_auteur`, `nom_auteur`, `prenom_auteur`) VALUES 
(1, 'Appollinaire', 'Guillaume'),
(2, 'De Balzac', 'Honoré'),
(3, 'Baudelaire', 'Charles'),
(4, 'Daudet', 'Alphonse'),
(5, 'Descartes', 'René'),
(6, 'Diderot', 'Denis'),
(7, 'Dumas', 'Alexandre'),
(8, 'Duras', 'Marguerite'),
(9, 'Flaubet', 'Gustave'),
(10, 'Gide', 'André'),
(11, 'Hugo', 'Victor'),
(12, 'De La Fontaine', 'Jean'),
(13, 'Malraux', 'André'),
(14, 'De Maupassant', 'Guy'),
(15, 'De Musset', 'Alfred'),
(16, 'Pagnol', 'Marcel'),
(17, 'Prévert', 'Jacques'),
(18, 'Proust', 'Marcel'),
(19, 'Rabelais', 'François'),
(20, 'Rimbaud', 'Arthur'),
(21, 'De Saint-Exupéry', 'Antoine'),
(22, 'Sartre', 'Jean Paul'),
(23, 'Tardieu', 'Jean'),
(24, 'Verne', 'Jules'),
(26, 'Zola', 'Emile'),
(27, 'Camus', 'Albert');

-- --------------------------------------------------------

-- 
-- Structure de la table `collection`
-- 

CREATE TABLE IF NOT EXISTS `collection` (
  `code_collection` bigint(20) NOT NULL auto_increment,
  `libelle_collection` varchar(50) default NULL,
  `num_editeur` bigint(20) default NULL,
  PRIMARY KEY  (`code_collection`),
  KEY `FK_collection_num_editeur` (`num_editeur`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

-- 
-- Contenu de la table `collection`
-- 

INSERT INTO `collection` (`code_collection`, `libelle_collection`, `num_editeur`) VALUES 
(1, 'Etonnant classique', 1),
(2, 'Marabout', 2),
(3, 'Classiques', 3),
(4, '', NULL);

-- --------------------------------------------------------

-- 
-- Structure de la table `editeur`
-- 

CREATE TABLE IF NOT EXISTS `editeur` (
  `num_editeur` bigint(20) NOT NULL auto_increment,
  `nom_editeur` varchar(50) default NULL,
  PRIMARY KEY  (`num_editeur`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

-- 
-- Contenu de la table `editeur`
-- 

INSERT INTO `editeur` (`num_editeur`, `nom_editeur`) VALUES 
(1, 'Flamarion'),
(2, 'Marabout'),
(3, 'Le livre de Poche');

-- --------------------------------------------------------

-- 
-- Structure de la table `emprunte`
-- 

CREATE TABLE IF NOT EXISTS `emprunte` (
  `num_exemplaire` bigint(20) NOT NULL,
  `num_adherent` bigint(20) NOT NULL,
  `date_emprunt` datetime default NULL,
  `date_retour` datetime default NULL,
  PRIMARY KEY  (`num_exemplaire`,`num_adherent`),
  KEY `FK_emprunte_num_adherent` (`num_adherent`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 
-- Contenu de la table `emprunte`
-- 


-- --------------------------------------------------------

-- 
-- Structure de la table `exemplaire`
-- 

CREATE TABLE IF NOT EXISTS `exemplaire` (
  `num_exemplaire` bigint(20) NOT NULL auto_increment,
  `etat_exemplaire` set('tb','b','m','tm') NOT NULL default 'tb',
  `num_livre` bigint(20) default NULL,
  `code_collection` bigint(20) default NULL,
  PRIMARY KEY  (`num_exemplaire`),
  KEY `FK_exemplaire_num_livre` (`num_livre`),
  KEY `FK_exemplaire_code_collection` (`code_collection`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=71 ;

-- 
-- Contenu de la table `exemplaire`
-- 

INSERT INTO `exemplaire` (`num_exemplaire`, `etat_exemplaire`, `num_livre`, `code_collection`) VALUES 
(1, 'tb', 1, 1),
(2, 'tb', 1, 2),
(3, 'tb', 1, 1),
(4, 'tb', 1, 2),
(5, 'tb', 2, 1),
(6, 'tb', 2, 2),
(7, 'tb', 1, 3),
(8, 'tb', 2, 3),
(9, 'tb', 3, 3),
(10, 'tb', 4, 3),
(11, 'tb', 5, 3),
(12, 'tb', 6, 3),
(13, 'tb', 7, 3),
(14, 'tb', 8, 3),
(15, 'tb', 9, 3),
(16, 'tb', 10, 3),
(17, 'tb', 11, 3),
(18, 'tb', 12, 3),
(19, 'tb', 13, 3),
(20, 'tb', 14, 3),
(21, 'tb', 15, 3),
(22, 'tb', 16, 3),
(23, 'tb', 17, 3),
(24, 'tb', 18, 3),
(25, 'tb', 19, 3),
(26, 'tb', 20, 3),
(27, 'tb', 21, 3),
(28, 'tb', 22, 3),
(29, 'tb', 23, 3),
(30, 'tb', 24, 3),
(31, 'tb', 25, 3),
(32, 'tb', 26, 3),
(33, 'tb', 27, 3),
(34, 'tb', 28, 3),
(35, 'tb', 29, 3),
(36, 'tb', 30, 3),
(37, 'tb', 31, 1),
(38, 'tb', 32, 2),
(39, 'tb', 33, 1),
(40, 'tb', 34, 2),
(41, 'b', 35, 3),
(42, 'tm', 36, 3),
(43, 'b', 37, 3),
(44, 'tm', 38, 3),
(45, 'm', 39, 3),
(46, 'm', 40, 3),
(47, 'b', 41, 3),
(48, 'b', 42, 3),
(49, 'b', 43, 3),
(50, 'b', 44, 3),
(51, 'tb', 45, 3),
(52, 'tb', 46, 3),
(53, 'b', 47, 3),
(54, 'tb', 48, 3),
(55, 'b', 49, 3),
(56, 'b', 50, 3),
(57, 'b', 17, 2),
(58, 'm', 18, 2),
(59, 'tm', 19, 2),
(60, 'tm', 20, 2),
(61, 'tb', 21, 2),
(62, 'tb', 22, 2),
(63, 'tb', 23, 1),
(64, 'tb', 24, 1),
(65, 'tm', 25, 1),
(66, 'tb', 26, 1),
(67, 'tb', 27, 1),
(68, 'tb', 28, 1),
(69, 'b', 29, 1),
(70, 'm', 30, 1);

-- --------------------------------------------------------

-- 
-- Structure de la table `livre`
-- 

CREATE TABLE IF NOT EXISTS `livre` (
  `num_livre` bigint(20) NOT NULL auto_increment,
  `titre_livre` varchar(50) default NULL,
  `num_auteur` bigint(20) default NULL,
  PRIMARY KEY  (`num_livre`),
  KEY `FK_livre_num_auteur` (`num_auteur`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=51 ;

-- 
-- Contenu de la table `livre`
-- 

INSERT INTO `livre` (`num_livre`, `titre_livre`, `num_auteur`) VALUES 
(1, 'La peste', 27),
(2, 'L''étranger', 27),
(3, 'De l''absurde à l''amour', 27),
(4, 'Les fleurs du mal', 3),
(5, 'Le spleen de Paris', 3),
(6, 'Ecrit sur l''art', 3),
(7, 'Les lettres de mon moulin', 4),
(8, 'Le père Goriot', 2),
(9, 'La peau de chagrin', 2),
(10, 'Les fables', 12),
(11, 'Bel-ami', 14),
(12, 'Pierre et Jean', 14),
(13, 'Sicile', 14),
(14, 'Le horla', 14),
(15, 'Le discours de la méthode', 5),
(16, 'La religieuse', 6),
(17, 'La chasse et l''amour', 7),
(18, 'Napoléon', 7),
(19, 'Le Maître d’armes', 7),
(20, 'Le Chevalier d''Harmental', 7),
(21, 'La couleur des mots', 8),
(22, 'Madame Beauvary', 9),
(23, 'La tentation de Saint Antoine', 9),
(24, 'Le candidat', 9),
(25, 'Oscar Wilde', 10),
(26, 'La symphonie Pastorale', 10),
(27, 'Notre Dame de Paris', 11),
(28, 'Les Misérables', 11),
(29, 'Les voix du silence', 13),
(30, 'Le temps du mépris', 13),
(31, 'Deux amis', 14),
(32, 'La légende du Mont-Saint-Michel', 14),
(33, 'Croisilles', 15),
(34, 'Le temps des amours', 16),
(35, 'Le sac de bille', 16),
(36, 'Le château de ma mère', 16),
(37, 'Contes pour enfants pas sages', 17),
(38, 'La pêche à la baleine', 17),
(39, 'Albertine disparue', 18),
(40, 'Pantagruel', 19),
(41, 'stupra', 20),
(42, 'Le petit prince', 21),
(43, 'Le mur', 22),
(44, 'Les mouches', 22),
(45, 'Une voix sans personne', 23),
(46, '20 milles lieux sous les mers', 24),
(47, 'Le tour du monde en 80 jours', 24),
(48, 'Voyage au centre de la terre', 24),
(49, 'J''accuse', 26),
(50, 'La chute', 27);
