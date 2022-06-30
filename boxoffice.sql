-- -------------------------------------------------------------
-- TablePlus 3.11.0(352)
--
-- https://tableplus.com/
--
-- Database: boxoffice
-- Generation Time: 2022-06-30 20:46:34.2350
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `adult` tinyint(1) DEFAULT '0',
  `genres` varchar(255) DEFAULT NULL,
  `original_title` varchar(255) DEFAULT NULL,
  `poster_path` varchar(255) DEFAULT NULL,
  `release_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `tagline` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `video` tinyint(1) DEFAULT '0',
  `vote_average` double DEFAULT NULL,
  `vote_count` int DEFAULT NULL,
  `runtime` double DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `popularity` double DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `playings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `weekId` int DEFAULT '0',
  `tickets` int DEFAULT '0',
  `revenue` double DEFAULT NULL,
  `movieId` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `weekId` (`weekId`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `playings_ibfk_1` FOREIGN KEY (`weekId`) REFERENCES `weeks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `playings_ibfk_2` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `weeks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

INSERT INTO `movies` (`id`, `adult`, `genres`, `original_title`, `poster_path`, `release_date`, `status`, `tagline`, `title`, `video`, `vote_average`, `vote_count`, `runtime`, `country`, `popularity`, `createdAt`, `updatedAt`) VALUES
('1', '0', 'Action', 'Doctor Strange in the Multiverse of Madness', 'https://www.themoviedb.org/t/p/w1280/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg', '2022-05-04', 'Released', 'Enter a new dimension of Strange.', 'Doctor Strange in the Multiverse of Madness', '0', '7.5', '3658', '126', 'USA', '12833.993', NULL, NULL),
('2', '0', 'Fantasy', 'Fantastic Beasts: The Secrets of Dumbledore', 'https://www.themoviedb.org/t/p/w1280/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg', '2022-04-06', 'Released', 'Fantastic Beasts: The Secrets of Dumbledore', 'Fantastic Beasts: The Secrets of Dumbledore', '0', '6.8', '2070', '142', 'USA', '3038.294', NULL, NULL),
('3', '0', 'Action', 'Morbius', 'https://www.themoviedb.org/t/p/w1280/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg', '2022-03-30', 'Released', 'A new Marvel legend arrives.', 'Morbius', '0', '6.5', '1877', '140', 'USA', '2180.604', NULL, NULL),
('4', '0', 'Comedy', 'The Lost City', 'https://www.themoviedb.org/t/p/w1280/neMZH82Stu91d3iqvLdNQfqPPyl.jpg', '2022-03-24', 'Released', 'The adventure is real. The heroes are not.', 'The Lost City', '0', '6.8', '1366', '112', 'USA', '2188.375', NULL, NULL),
('5', '0', 'Action', 'Spider-Man: No Way Home', 'https://www.themoviedb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg', '2021-12-15', 'Released', 'The Multiverse unleashed.', 'Spider-Man: No Way Home', '0', '8.1', '13828', '148', 'USA', '2053.057', NULL, NULL),
('6', '0', 'Adventure', 'Jurassic World Dominion', 'https://www.themoviedb.org/t/p/w1280/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg', '2022-06-01', 'Released', 'The epic conclusion of the Jurassic era.', 'Jurassic World Dominion', '0', '6.7', '869', '147', 'USA', '1976.615', NULL, NULL);

INSERT INTO `playings` (`id`, `weekId`, `tickets`, `revenue`, `movieId`, `createdAt`, `updatedAt`) VALUES
('1', '1', '10000', '340031', '1', '2022-06-27 00:00:00', '2022-06-27 00:00:00');

INSERT INTO `weeks` (`id`, `startDate`, `endDate`, `createdAt`, `updatedAt`) VALUES
('1', '2022-06-27 00:00:00', '2022-07-03 00:00:00', '2022-06-27 00:00:00', '2022-06-27 00:00:00');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;