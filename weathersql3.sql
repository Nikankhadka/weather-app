-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2021 at 11:11 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db2059784`
--

-- --------------------------------------------------------

--
-- Table structure for table `weather`
--

CREATE TABLE `weather` (
  `city` varchar(28) DEFAULT NULL,
  `date` varchar(25) DEFAULT NULL,
  `weather_temperature` float DEFAULT NULL,
  `max_temp` float DEFAULT NULL,
  `min_temp` float DEFAULT NULL,
  `icon` varchar(5) DEFAULT NULL,
  `weather_description` varchar(20) DEFAULT NULL,
  `wind_degree` int(5) DEFAULT NULL,
  `weather_wind` float DEFAULT NULL,
  `humidity` int(5) DEFAULT NULL,
  `pressure` int(8) DEFAULT NULL,
  `feels_like` float DEFAULT NULL,
  `sunrise` int(10) DEFAULT NULL,
  `sunset` int(10) DEFAULT NULL,
  `weather_when` datetime DEFAULT NULL,
  `time_zone` int(28) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weather`
--

INSERT INTO `weather` (`city`, `date`, `weather_temperature`, `max_temp`, `min_temp`, `icon`, `weather_description`, `wind_degree`, `weather_wind`, `humidity`, `pressure`, `feels_like`, `sunrise`, `sunset`, `weather_when`, `time_zone`) VALUES
('Bristol', '1630400490', 15.01, 16.57, 13.51, '04d', 'overcast clouds', 26, 4.02, 85, 1030, 14.79, 1630387309, 1630436400, '2021-08-31 14:55:36', 3600);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
