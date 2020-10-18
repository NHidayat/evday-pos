-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 18 Okt 2020 pada 04.30
-- Versi server: 10.1.36-MariaDB
-- Versi PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `evday_pos`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `category_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_created_at`, `category_updated_at`, `category_status`) VALUES
(1, 'Drink', '2020-08-12 19:58:45', '2020-10-17 07:51:40', 1),
(2, 'Main Course', '2020-08-12 19:58:56', '2020-10-17 07:44:33', 1),
(3, 'Fruit', '2020-08-13 11:20:40', '2020-08-26 20:17:12', 1),
(7, 'Dessert', '2020-08-26 16:08:48', '2020-09-11 08:33:34', 1),
(8, 'testing', '2020-10-17 07:08:37', '2020-10-17 07:19:42', 1),
(9, 'testing', '2020-10-17 07:08:56', '2020-10-17 07:21:25', 1),
(10, 'testing23', '2020-10-17 07:21:39', '0000-00-00 00:00:00', 1),
(11, 'etasas', '2020-10-17 07:46:22', '0000-00-00 00:00:00', 1),
(12, 'asasas', '2020-10-17 07:47:42', '0000-00-00 00:00:00', 1),
(13, 'asasasas', '2020-10-17 07:48:47', '0000-00-00 00:00:00', 1),
(14, 'asasas', '2020-10-17 07:49:35', '0000-00-00 00:00:00', 0),
(15, 'asasas', '2020-10-17 07:50:27', '0000-00-00 00:00:00', 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `history_id` int(11) NOT NULL,
  `history_invoice` varchar(40) NOT NULL,
  `history_ppn` int(15) NOT NULL,
  `history_total` int(15) NOT NULL,
  `cashier_name` varchar(100) NOT NULL,
  `history_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`history_id`, `history_invoice`, `history_ppn`, `history_total`, `cashier_name`, `history_created_at`) VALUES
(1, '1598466895834', 26700, 293700, 'Pevita Pearce', '2020-08-22 18:34:55'),
(2, '1598466922241', 26700, 293700, 'Pevita Pearce', '2020-08-22 18:35:22'),
(3, '1598467135837', 129900, 1428900, 'Pevita Pearce', '2020-08-22 18:38:55'),
(4, '1598467324927', 12900, 141900, 'Pevita Pearce', '2020-08-22 18:42:04'),
(5, '1598467427571', 68400, 752400, 'Pevita Pearce', '2020-08-22 18:43:47'),
(6, '1598467462292', 68400, 752400, 'Pevita Pearce', '2020-08-23 18:44:22'),
(7, '1598467496501', 12900, 141900, 'Pevita Pearce', '2020-08-23 18:44:56'),
(8, '1598467509722', 61500, 676500, 'Pevita Pearce', '2020-08-24 18:45:09'),
(9, '1598467570254', 6900, 75900, 'Pevita Pearce', '2020-08-24 18:46:10'),
(10, '1598467637625', 6000, 66000, 'Pevita Pearce', '2020-08-24 18:47:17'),
(11, '1598467661737', 12900, 141900, 'Pevita Pearce', '2020-08-24 18:47:41'),
(12, '1598467712829', 2800, 30800, 'Pevita Pearce', '2020-08-24 18:48:32'),
(13, '1598467747340', 68400, 752400, 'Pevita Pearce', '2020-08-24 18:49:07'),
(14, '1598467768666', 6000, 66000, 'Pevita Pearce', '2020-08-25 18:49:28'),
(15, '1598467782566', 10200, 112200, 'Pevita Pearce', '2020-08-25 18:49:42'),
(16, '1598468253227', 61500, 676500, 'Pevita Pearce', '2020-08-25 18:57:33'),
(17, '1598468279894', 6900, 75900, 'Pevita Pearce', '2020-08-25 18:57:59'),
(18, '1598468483785', 6000, 66000, 'Pevita Pearce', '2020-08-26 19:01:23'),
(19, '1598468495366', 87300, 960300, 'Pevita Pearce', '2020-08-26 19:01:35'),
(20, '1598469020812', 19800, 217800, 'Pevita Pearce', '2020-08-26 19:10:20'),
(21, '1598469049308', 22600, 248600, 'Pevita Pearce', '2020-08-26 19:10:49'),
(22, '1598472813200', 74400, 818400, 'Pevita Pearce', '2020-08-26 20:13:33'),
(23, '1598472981945', 75300, 828300, 'Pevita Pearce', '2020-08-27 20:16:21'),
(24, '1598552513233', 5800, 63800, 'Pevita Pearce', '2020-08-27 18:21:53'),
(25, '1598595710340', 3500, 38500, 'Pevita Pearce', '2020-08-28 06:21:50'),
(26, '1598602753939', 3500, 38500, 'Pevita Pearce', '2020-08-28 08:19:13'),
(27, '1598723682372', 17500, 192500, 'Pevita Pearce', '2020-08-29 17:54:42'),
(28, '1598753422031', 80200, 882200, 'Pevita Pearce', '2020-08-30 02:10:22'),
(29, '1598753625588', 86500, 951500, 'Pevita Pearce', '2020-08-30 02:13:45'),
(30, '1598754475627', 7500, 82500, 'Pevita Pearce', '2020-08-30 02:27:55'),
(31, '1598758782358', 14400, 158400, 'Pevita Pearce', '2020-08-30 03:39:42'),
(32, '1598760949174', 11900, 130900, 'Pevita Pearce', '2020-08-30 04:15:49'),
(33, '1598769129323', 10500, 115500, 'Pevita Pearce', '2020-08-30 06:32:09'),
(34, '1598808626429', 26400, 290400, 'Pevita Pearce', '2020-08-30 17:30:26'),
(35, '1598837883385', 20300, 223300, 'Pevita Pearce', '2020-08-31 01:38:03'),
(36, '1598842167291', 25900, 284900, 'Pevita Pearce', '2020-08-31 02:49:27'),
(37, '1598849403950', 9500, 104500, 'Pevita Pearce', '2020-08-31 04:50:03'),
(38, '1598853712099', 15500, 170500, 'Pevita Pearce', '2020-08-31 06:01:52'),
(39, '1598864019679', 19400, 213400, 'Pevita Pearce', '2020-08-31 08:53:39'),
(40, '1599240740765', 8000, 88000, 'Pevita Pearce', '2020-09-04 17:32:20'),
(41, '1599241330266', 8000, 88000, 'Pevita Pearce', '2020-09-04 17:42:10'),
(42, '1599301331208', 8000, 88000, 'Pevita Pearce', '2020-09-05 10:22:11'),
(43, '1599395900886', 8000, 88000, 'Pevita Pearce', '2020-09-06 12:38:20'),
(44, '1599396473168', 8000, 88000, 'Pevita Pearce', '2020-09-06 12:47:53'),
(45, '1599439275419', 8000, 88000, 'Pevita Pearce', '2020-09-07 00:41:15'),
(46, '1599440083339', 8000, 88000, 'Pevita Pearce', '2020-09-07 00:54:43'),
(47, '1599463379231', 8000, 88000, 'Pevita Pearce', '2020-09-07 07:22:59'),
(48, '1599727790091', 8950, 98450, 'Pevita Pearce', '2020-09-10 08:49:50'),
(49, '1599737572703', 8650, 95150, 'Pevita Pearce', '2020-09-10 11:32:52'),
(50, '1599738173097', 4800, 52800, 'Pevita Pearce', '2020-09-10 11:42:53'),
(51, '1599806389859', 8700, 95700, 'Pevita Pearce', '2020-09-11 06:39:49'),
(52, '1599881308651', 9550, 105050, 'Pevita Pearce', '2020-09-12 03:28:28'),
(53, '1599881389779', 11050, 121550, 'Pevita Pearce', '2020-09-12 03:29:49'),
(54, '1599881630147', 7150, 78650, 'Pevita Pearce', '2020-09-12 03:33:50'),
(55, '1599881684055', 8400, 92400, 'Pevita Pearce', '2020-09-12 03:34:44'),
(56, '1599881748130', 13700, 150700, 'Pevita Pearce', '2020-09-12 03:35:48'),
(57, '1599882832539', 1750, 19250, 'admin', '2020-09-12 03:53:52'),
(58, '1599882878565', 9800, 107800, 'admin', '2020-09-12 03:54:38'),
(59, '1599883115808', 10300, 113300, 'admin', '2020-09-12 03:58:35'),
(60, '1599883145962', 8550, 94050, 'tes', '2020-09-12 03:59:05'),
(61, '1599897607780', 8000, 88000, 'John Doe', '2020-09-12 08:00:07'),
(62, '1599898555937', 8050, 88550, 'tes', '2020-09-12 08:15:55'),
(63, '1599899189698', 11300, 124300, 'tes', '2020-09-12 08:26:29'),
(64, '1599923372485', 10050, 110550, 'admin', '2020-09-12 15:09:32'),
(65, '1599930752974', 11300, 124300, 'Nur Hidayat', '2020-09-12 17:12:32'),
(66, '1599931532620', 14050, 154550, 'Nur Hidayat', '2020-09-12 17:25:32'),
(67, '1599963410235', 7800, 85800, 'admin', '2020-09-13 02:16:50'),
(68, '1599968767352', 3900, 42900, 'admin', '2020-09-13 03:46:07'),
(69, '1599970934664', 6400, 70400, 'admin', '2020-09-13 04:22:14'),
(70, '1599971388327', 18750, 206250, 'Nur Hidayat', '2020-09-13 04:29:48'),
(71, '1599977627043', 9150, 100650, 'admin', '2020-09-13 06:13:47'),
(72, '1600016089661', 5650, 62150, 'admin', '2020-09-13 16:54:49'),
(73, '1600016095795', 8550, 94050, 'admin', '2020-09-13 16:54:55'),
(74, '1600016107691', 24300, 267300, 'admin', '2020-09-13 16:55:07'),
(75, '1600017692885', 11450, 125950, 'admin', '2020-09-13 17:21:32'),
(76, '1600017807506', 1750, 19250, 'admin', '2020-09-13 17:23:27'),
(77, '1600018335428', 5650, 62150, 'admin', '2020-09-13 17:32:15'),
(78, '1600021181824', 10300, 113300, 'Nur Hidayat', '2020-09-13 18:19:41'),
(79, '1600022335806', 28700, 315700, 'Nur Hidayat', '2020-09-13 18:38:55'),
(80, '1600046711134', 2900, 31900, 'admin', '2020-09-14 01:25:11'),
(81, '1600053379221', 7400, 81400, 'admin', '2020-09-14 03:16:19'),
(82, '1600055263256', 8050, 88550, 'admin', '2020-09-14 03:47:43'),
(83, '1600072495023', 8050, 88550, 'Nur Hidayat', '2020-09-14 08:34:55'),
(84, '1602917942234', 1500, 16500, 'admin', '2020-10-17 06:59:02'),
(85, '1602919517567', 9550, 105050, 'admin', '2020-10-17 07:25:17'),
(86, '1602920361887', 7900, 86900, 'admin', '2020-10-17 07:39:21'),
(87, '1602926472874', 1500, 16500, 'admin', '2020-10-17 09:21:12'),
(88, '1602926925697', 1500, 16500, 'admin', '2020-10-17 09:28:45'),
(89, '1602927088459', 5650, 62150, 'admin', '2020-10-17 09:31:28'),
(90, '1602927149293', 5900, 64900, 'admin', '2020-10-17 09:32:29'),
(91, '1602927188062', 1750, 19250, 'admin', '2020-10-17 09:33:08'),
(92, '1602927225836', 1750, 19250, 'admin', '2020-10-17 09:33:45'),
(93, '1602927258131', 1750, 19250, 'admin', '2020-10-17 09:34:18'),
(94, '1602927315467', 8050, 88550, 'admin', '2020-10-17 09:35:15'),
(95, '1602934493107', 3250, 35750, 'admin', '2020-10-17 11:34:53'),
(96, '1602934680104', 5650, 62150, 'admin', '2020-10-17 11:38:00'),
(97, '1602935158737', 8050, 88550, 'admin', '2020-10-17 11:45:58'),
(98, '1602935916684', 8050, 88550, 'admin', '2020-10-17 11:58:36'),
(99, '1602935987172', 8050, 88550, 'admin', '2020-10-17 11:59:47'),
(100, '1602936078359', 8050, 88550, 'admin', '2020-10-17 12:01:18'),
(101, '1602936138950', 8050, 88550, 'admin', '2020-10-17 12:02:18'),
(102, '1602936418167', 12200, 134200, 'admin', '2020-10-17 12:06:58'),
(103, '1602936903070', 9800, 107800, 'admin', '2020-10-17 12:15:03'),
(104, '1602937352638', 8050, 88550, 'admin', '2020-10-17 12:22:32'),
(105, '1602937732367', 8050, 88550, 'admin', '2020-10-17 12:28:52'),
(106, '1602937823958', 8900, 97900, 'admin', '2020-10-17 12:30:23'),
(107, '1602938414183', 14950, 164450, 'admin', '2020-10-17 12:40:14'),
(108, '1602938664471', 8050, 88550, 'admin', '2020-10-17 12:44:24'),
(109, '1602938735657', 5650, 62150, 'admin', '2020-10-17 12:45:35'),
(110, '1602938867999', 5650, 62150, 'admin', '2020-10-17 12:47:47'),
(111, '1602938988954', 6150, 67650, 'admin', '2020-10-17 12:49:48'),
(112, '1602939108571', 4400, 48400, 'admin', '2020-10-17 12:51:48'),
(113, '1602986405236', 8650, 95150, 'admin', '2020-10-18 02:00:05'),
(114, '1602986455161', 8050, 88550, 'admin', '2020-10-18 02:00:55'),
(115, '1602986769611', 5650, 62150, 'admin', '2020-10-18 02:06:09'),
(116, '1602986857779', 3900, 42900, 'admin', '2020-10-18 02:07:37'),
(117, '1602987109537', 5650, 62150, 'admin', '2020-10-18 02:11:49'),
(118, '1602987178439', 3900, 42900, 'admin', '2020-10-18 02:12:58'),
(119, '1602987277062', 5000, 55000, 'admin', '2020-10-18 02:14:37'),
(120, '1602987514179', 8800, 96800, 'admin', '2020-10-18 02:18:34'),
(121, '1602987678546', 11600, 127600, 'admin', '2020-10-18 02:21:18'),
(122, '1602987763486', 6400, 70400, 'admin', '2020-10-18 02:22:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `order_item`
--

CREATE TABLE `order_item` (
  `order_id` int(11) NOT NULL,
  `history_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_name` varchar(150) NOT NULL,
  `qty` int(11) NOT NULL,
  `subtotal` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `order_item`
--

INSERT INTO `order_item` (`order_id`, `history_id`, `product_id`, `product_name`, `qty`, `subtotal`) VALUES
(1, 1, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(2, 1, 8, 'Salmon Truffle Teriyaki', 3, 207000),
(3, 2, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(4, 2, 8, 'Salmon Truffle Teriyaki', 3, 207000),
(5, 3, 18, 'Wiener', 2, 1230000),
(6, 3, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(7, 4, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(8, 4, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(9, 5, 18, 'Wiener', 1, 615000),
(10, 5, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(11, 6, 18, 'Wiener', 1, 615000),
(12, 6, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(13, 7, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(14, 7, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(15, 8, 18, 'Wiener', 1, 615000),
(16, 9, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(17, 10, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(18, 11, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(19, 11, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(20, 12, 5, 'Choco Rhum', 1, 28000),
(21, 13, 18, 'Wiener', 1, 615000),
(22, 13, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(23, 14, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(24, 15, 4, 'Red Vevet Latte', 1, 33000),
(25, 15, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(26, 16, 18, 'Wiener', 1, 615000),
(27, 17, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(28, 18, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(29, 19, 18, 'Wiener', 1, 615000),
(30, 19, 8, 'Salmon Truffle Teriyaki', 2, 138000),
(31, 19, 7, 'Chicken Katsu Dabu-dabu', 2, 120000),
(32, 20, 8, 'Salmon Truffle Teriyaki', 2, 138000),
(33, 20, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(34, 21, 5, 'Choco Rhum', 1, 28000),
(35, 21, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(36, 21, 8, 'Salmon Truffle Teriyaki', 2, 138000),
(37, 22, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(38, 22, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(39, 22, 18, 'Wiener', 1, 615000),
(40, 23, 18, 'Wiener', 1, 615000),
(41, 23, 8, 'Salmon Truffle Teriyaki', 2, 138000),
(42, 24, 6, 'Black Forest', 1, 30000),
(43, 24, 5, 'Choco Rhum', 1, 28000),
(44, 25, 3, 'Cappucino', 1, 5000),
(45, 25, 6, 'Black Forest', 1, 30000),
(46, 26, 2, 'Cofee Latte', 1, 15000),
(47, 26, 3, 'Cappucino', 4, 20000),
(48, 27, 3, 'Cappucino', 3, 15000),
(49, 27, 6, 'Black Forest', 2, 60000),
(50, 27, 1, 'Espresso', 1, 10000),
(51, 27, 2, 'Cofee Latte', 2, 30000),
(52, 27, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(53, 28, 6, 'Black Forest', 1, 30000),
(54, 28, 18, 'Wiener', 1, 615000),
(55, 28, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(56, 28, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(57, 28, 5, 'Choco Rhum', 1, 28000),
(58, 29, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(59, 29, 3, 'Cappucino', 1, 5000),
(60, 29, 6, 'Black Forest', 1, 30000),
(61, 29, 5, 'Choco Rhum', 1, 28000),
(62, 29, 2, 'Cofee Latte', 1, 15000),
(63, 29, 1, 'Espresso', 1, 10000),
(64, 29, 4, 'Red Vevet Latte', 1, 33000),
(65, 29, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(66, 29, 18, 'Wiener', 1, 615000),
(67, 30, 3, 'Cappucino', 3, 15000),
(68, 30, 6, 'Black Forest', 2, 60000),
(69, 31, 20, 'Nasi Goreng', 2, 50000),
(70, 31, 21, 'Pisang Ijo', 2, 40000),
(71, 31, 24, 'Sarabba', 3, 54000),
(72, 32, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(73, 32, 3, 'Cappucino', 1, 5000),
(74, 32, 24, 'Sarabba', 3, 54000),
(75, 33, 20, 'Nasi Goreng', 1, 25000),
(76, 33, 22, 'Kapurung', 2, 60000),
(77, 33, 2, 'Cofee Latte', 1, 15000),
(78, 33, 3, 'Cappucino', 1, 5000),
(79, 34, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(80, 34, 18, 'Wiener', 3, 195000),
(81, 35, 18, 'Wiener', 1, 65000),
(82, 35, 8, 'Salmon Truffle Teriyaki', 2, 138000),
(83, 36, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(84, 36, 18, 'Wiener', 2, 130000),
(85, 36, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(86, 37, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(87, 37, 3, 'Cappucino', 1, 5000),
(88, 37, 6, 'Black Forest', 1, 30000),
(89, 38, 18, 'Wiener', 1, 65000),
(90, 38, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(91, 38, 22, 'Kapurung', 1, 30000),
(92, 39, 8, 'Salmon Truffle Teriyaki', 1, 69000),
(93, 39, 18, 'Wiener', 1, 65000),
(94, 39, 7, 'Chicken Katsu Dabu-dabu', 1, 60000),
(95, 40, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(96, 40, 2, 'Cofee Latte', 2, 15000),
(97, 40, 3, 'Cappucino', 1, 5000),
(98, 41, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(99, 41, 2, 'Cofee Latte', 2, 15000),
(100, 41, 3, 'Cappucino', 1, 5000),
(101, 42, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(102, 42, 2, 'Cofee Latte', 2, 15000),
(103, 42, 3, 'Cappucino', 1, 5000),
(104, 43, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(105, 43, 2, 'Cofee Latte', 2, 15000),
(106, 43, 3, 'Cappucino', 1, 5000),
(107, 44, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(108, 44, 2, 'Cofee Latte', 2, 15000),
(109, 44, 3, 'Cappucino', 1, 5000),
(110, 45, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(111, 45, 2, 'Cofee Latte', 2, 15000),
(112, 45, 3, 'Cappucino', 1, 5000),
(113, 46, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(114, 46, 2, 'Cofee Latte', 2, 15000),
(115, 46, 3, 'Cappucino', 1, 5000),
(116, 47, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(117, 47, 2, 'Cofee Latte', 2, 15000),
(118, 47, 3, 'Cappucino', 1, 5000),
(119, 48, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(120, 48, 18, 'Cappucino', 1, 15000),
(121, 48, 16, 'Black Forest', 1, 33000),
(122, 49, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(123, 49, 18, 'Cappucino', 3, 45000),
(124, 50, 18, 'Cappucino', 1, 15000),
(125, 50, 16, 'Black Forest', 1, 33000),
(126, 51, 18, 'Cappucino', 1, 15000),
(127, 51, 16, 'Black Forest', 3, 72000),
(128, 52, 16, 'Black Forest', 1, 24000),
(129, 52, 18, 'Cappucino', 2, 30000),
(130, 52, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(131, 53, 16, 'Black Forest', 1, 24000),
(132, 53, 18, 'Cappucino', 2, 30000),
(133, 53, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(134, 53, 11, 'Cofee Latte', 1, 15000),
(135, 54, 18, 'Cappucino', 2, 30000),
(136, 54, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(137, 55, 16, 'Black Forest', 1, 24000),
(138, 55, 18, 'Cappucino', 1, 15000),
(139, 55, 11, 'Cofee Latte', 3, 45000),
(140, 56, 18, 'Cappucino', 2, 30000),
(141, 56, 16, 'Black Forest', 1, 24000),
(142, 56, 15, 'Chicken Katsu Dabu-dabu', 2, 83000),
(143, 57, 20, 'Espresso', 1, 17500),
(144, 58, 18, 'Cappucino', 1, 15000),
(145, 58, 15, 'Chicken Katsu Dabu-dabu', 2, 83000),
(146, 59, 22, 'Choco Rum', 1, 29000),
(147, 59, 23, 'Red Velvet Latte', 1, 20000),
(148, 59, 21, 'Sarabba', 1, 14000),
(149, 59, 13, 'Sate', 1, 30000),
(150, 59, 27, 'tes', 1, 10000),
(151, 60, 19, 'Salmon Truffle Teriyaki', 1, 41500),
(152, 60, 21, 'Sarabba', 1, 14000),
(153, 60, 13, 'Sate', 1, 30000),
(154, 61, 7, 'Chicken Katsu Dabu-dabu', 4, 60000),
(155, 61, 2, 'Cofee Latte', 2, 15000),
(156, 61, 3, 'Cappucino', 1, 5000),
(157, 62, 11, 'Cofee Latte', 1, 15000),
(158, 62, 16, 'Black Forest', 1, 24000),
(159, 62, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(160, 63, 18, 'Cappucino', 2, 30000),
(161, 63, 15, 'Chicken Katsu Dabu-dabu', 2, 83000),
(162, 64, 28, 'a tes', 2, 20000),
(163, 64, 16, 'Black Forest', 2, 48000),
(164, 64, 11, 'Cofee Latte', 1, 15000),
(165, 64, 20, 'Espresso', 1, 17500),
(166, 65, 16, 'Black Forest', 2, 48000),
(167, 65, 28, 'a tes', 2, 20000),
(168, 65, 11, 'Cofee Latte', 3, 45000),
(169, 66, 16, 'Black Forest', 1, 24000),
(170, 66, 18, 'Cappucino', 1, 15000),
(171, 66, 11, 'Cofee Latte', 1, 15000),
(172, 66, 10, 'kapurung', 1, 25000),
(173, 66, 23, 'Red Velvet Latte', 1, 20000),
(174, 66, 19, 'Salmon Truffle Teriyaki', 1, 41500),
(175, 67, 28, 'a tes', 1, 10000),
(176, 67, 16, 'Black Forest', 1, 24000),
(177, 67, 18, 'Cappucino', 1, 15000),
(178, 67, 22, 'Choco Rum', 1, 29000),
(179, 68, 18, 'Cappucino', 1, 15000),
(180, 68, 16, 'Black Forest', 1, 24000),
(181, 69, 16, 'Black Forest', 1, 24000),
(182, 69, 11, 'Cofee Latte', 1, 15000),
(183, 69, 12, 'Pisang Ijo', 1, 25000),
(184, 70, 21, 'Sarabba', 2, 28000),
(185, 70, 20, 'Espresso', 2, 35000),
(186, 70, 19, 'Salmon Truffle Teriyaki', 3, 124500),
(187, 71, 18, 'Cappucino', 1, 15000),
(188, 71, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(189, 71, 20, 'Espresso', 2, 35000),
(190, 72, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(191, 72, 18, 'Cappucino', 1, 15000),
(192, 73, 16, 'Black Forest', 1, 24000),
(193, 73, 22, 'Choco Rum', 1, 29000),
(194, 73, 11, 'Cofee Latte', 1, 15000),
(195, 73, 20, 'Espresso', 1, 17500),
(196, 74, 10, 'kapurung', 1, 25000),
(197, 74, 12, 'Pisang Ijo', 3, 75000),
(198, 74, 23, 'Red Velvet Latte', 2, 40000),
(199, 74, 20, 'Espresso', 1, 17500),
(200, 74, 19, 'Salmon Truffle Teriyaki', 1, 41500),
(201, 74, 21, 'Sarabba', 1, 14000),
(202, 74, 13, 'Sate', 1, 30000),
(203, 75, 21, 'Sarabba', 1, 14000),
(204, 75, 19, 'Salmon Truffle Teriyaki', 1, 41500),
(205, 75, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(206, 75, 20, 'Espresso', 1, 17500),
(207, 76, 20, 'Espresso', 1, 17500),
(208, 77, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(209, 77, 18, 'Cappucino', 1, 15000),
(210, 78, 27, 'tes', 2, 20000),
(211, 78, 23, 'Red Velvet Latte', 2, 40000),
(212, 78, 22, 'Choco Rum', 1, 29000),
(213, 78, 21, 'Sarabba', 1, 14000),
(214, 79, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(215, 79, 18, 'Cappucino', 1, 15000),
(216, 79, 16, 'Black Forest', 2, 48000),
(217, 79, 20, 'Espresso', 2, 35000),
(218, 79, 12, 'Pisang Ijo', 1, 25000),
(219, 79, 19, 'Salmon Truffle Teriyaki', 1, 41500),
(220, 79, 17, 'Red Velvet Latte', 1, 31000),
(221, 79, 13, 'Sate', 1, 30000),
(222, 79, 27, 'Special Nasi Goreng ', 1, 20000),
(223, 80, 22, 'Choco Rum', 1, 29000),
(224, 81, 18, 'Cappucino', 1, 15000),
(225, 81, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(226, 81, 20, 'Espresso', 1, 17500),
(227, 82, 16, 'Black Forest', 1, 24000),
(228, 82, 18, 'Cappucino', 1, 15000),
(229, 82, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(230, 83, 16, 'Black Forest', 1, 24000),
(231, 83, 18, 'Cappucino', 1, 15000),
(232, 83, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(233, 84, 18, 'Cappucino', 1, 15000),
(234, 85, 18, 'Cappucino', 2, 30000),
(235, 85, 16, 'Black Forest', 2, 48000),
(236, 85, 20, 'Espresso', 1, 17500),
(237, 86, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(238, 86, 20, 'Espresso', 1, 17500),
(239, 86, 23, 'Red Velvet Latte', 1, 20000),
(240, 87, 11, 'Cofee Latte', 1, 15000),
(241, 88, 18, 'Cappucino', 1, 15000),
(242, 89, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(243, 89, 18, 'Cappucino', 1, 15000),
(244, 90, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(245, 90, 20, 'Espresso', 1, 17500),
(246, 91, 20, 'Espresso', 1, 17500),
(247, 92, 20, 'Espresso', 1, 17500),
(248, 93, 20, 'Espresso', 1, 17500),
(249, 94, 16, 'Black Forest', 1, 24000),
(250, 94, 18, 'Cappucino', 1, 15000),
(251, 94, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(252, 95, 18, 'Cappucino', 1, 15000),
(253, 95, 20, 'Espresso', 1, 17500),
(254, 96, 18, 'Cappucino', 1, 15000),
(255, 96, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(256, 97, 16, 'Black Forest', 1, 24000),
(257, 97, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(258, 97, 18, 'Cappucino', 1, 15000),
(259, 98, 16, 'Black Forest', 1, 24000),
(260, 98, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(261, 98, 11, 'Cofee Latte', 1, 15000),
(262, 99, 16, 'Black Forest', 1, 24000),
(263, 99, 18, 'Cappucino', 1, 15000),
(264, 99, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(265, 100, 16, 'Black Forest', 1, 24000),
(266, 100, 18, 'Cappucino', 1, 15000),
(267, 100, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(268, 101, 18, 'Cappucino', 1, 15000),
(269, 101, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(270, 101, 16, 'Black Forest', 1, 24000),
(271, 102, 16, 'Black Forest', 1, 24000),
(272, 102, 18, 'Cappucino', 1, 15000),
(273, 102, 15, 'Chicken Katsu Dabu-dabu', 2, 83000),
(274, 103, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(275, 103, 20, 'Espresso', 1, 17500),
(276, 103, 18, 'Cappucino', 1, 15000),
(277, 103, 16, 'Black Forest', 1, 24000),
(278, 104, 18, 'Cappucino', 1, 15000),
(279, 104, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(280, 104, 16, 'Black Forest', 1, 24000),
(281, 105, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(282, 105, 18, 'Cappucino', 1, 15000),
(283, 105, 16, 'Black Forest', 1, 24000),
(284, 106, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(285, 106, 18, 'Cappucino', 1, 15000),
(286, 106, 20, 'Espresso', 1, 17500),
(287, 106, 11, 'Cofee Latte', 1, 15000),
(288, 107, 16, 'Black Forest', 2, 48000),
(289, 107, 18, 'Cappucino', 2, 30000),
(290, 107, 11, 'Cofee Latte', 2, 30000),
(291, 107, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(292, 108, 16, 'Black Forest', 1, 24000),
(293, 108, 18, 'Cappucino', 1, 15000),
(294, 108, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(295, 109, 18, 'Cappucino', 1, 15000),
(296, 109, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(297, 110, 16, 'Black Forest', 1, 24000),
(298, 110, 18, 'Cappucino', 1, 15000),
(299, 110, 20, 'Espresso', 1, 17500),
(300, 111, 22, 'Choco Rum', 1, 29000),
(301, 111, 11, 'Cofee Latte', 1, 15000),
(302, 111, 20, 'Espresso', 1, 17500),
(303, 112, 22, 'Choco Rum', 1, 29000),
(304, 112, 11, 'Cofee Latte', 1, 15000),
(305, 113, 11, 'Cofee Latte', 1, 15000),
(306, 113, 20, 'Espresso', 1, 17500),
(307, 113, 22, 'Choco Rum', 1, 29000),
(308, 113, 10, 'kapurung', 1, 25000),
(309, 114, 18, 'Cappucino', 1, 15000),
(310, 114, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(311, 114, 16, 'Black Forest', 1, 24000),
(312, 115, 18, 'Cappucino', 1, 15000),
(313, 115, 15, 'Chicken Katsu Dabu-dabu', 1, 41500),
(314, 116, 18, 'Cappucino', 1, 15000),
(315, 116, 16, 'Black Forest', 1, 24000),
(316, 117, 18, 'Cappucino', 1, 15000),
(317, 117, 16, 'Black Forest', 1, 24000),
(318, 117, 20, 'Espresso', 1, 17500),
(319, 118, 16, 'Black Forest', 1, 24000),
(320, 118, 18, 'Cappucino', 1, 15000),
(321, 119, 12, 'Pisang Ijo', 1, 25000),
(322, 119, 10, 'kapurung', 1, 25000),
(323, 120, 22, 'Choco Rum', 1, 29000),
(324, 120, 11, 'Cofee Latte', 1, 15000),
(325, 120, 21, 'Sarabba', 1, 14000),
(326, 120, 13, 'Sate', 1, 30000),
(327, 121, 17, 'Red Velvet Latte', 1, 31000),
(328, 121, 14, 'Wiener', 1, 65000),
(329, 121, 27, 'Special Nasi Goreng ', 1, 20000),
(330, 122, 10, 'kapurung', 1, 25000),
(331, 122, 12, 'Pisang Ijo', 1, 25000),
(332, 122, 21, 'Sarabba', 1, 14000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(150) NOT NULL,
  `product_image` varchar(200) NOT NULL,
  `product_price` int(15) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `product_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `product_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_image`, `product_price`, `category_id`, `product_created_at`, `product_updated_at`, `product_status`) VALUES
(10, 'kapurung', '2020-09-10T02-08-57.273Z-kapurung.jpg', 25000, 2, '2020-09-10 02:08:57', '0000-00-00 00:00:00', 1),
(11, 'Cofee Latte', '2020-09-10T02-12-50.841Z-cofee-latte.jpg', 15000, 1, '2020-09-10 02:12:50', '0000-00-00 00:00:00', 1),
(12, 'Pisang Ijo', '2020-09-10T02-13-50.408Z-pisang-ijo.jpg', 25000, 7, '2020-09-10 02:13:50', '0000-00-00 00:00:00', 1),
(13, 'Sate', '2020-09-10T02-14-40.706Z-sate.jpg', 30000, 2, '2020-09-10 02:14:40', '0000-00-00 00:00:00', 1),
(14, 'Wiener', '2020-09-10T03-13-07.915Z-wiener.jpg', 65000, 2, '2020-09-10 03:13:08', '2020-09-13 04:26:54', 1),
(15, 'Chicken Katsu Dabu-dabu', '2020-09-10T03-32-28.712Z-chicken-katsu-dabu-dabu.jpg', 41500, 2, '2020-09-10 03:32:28', '2020-09-11 07:20:10', 1),
(16, 'Black Forest', '2020-09-11T07-53-06.481Z-black-forest.jpg', 24000, 7, '2020-09-10 03:33:35', '2020-10-17 07:58:50', 1),
(17, 'Red Velvet Latte', '2020-09-10T04-50-33.376Z-red-velvet-latte.jpg', 31000, 1, '2020-09-10 04:50:34', '2020-09-13 18:31:25', 1),
(18, 'Cappucino', '2020-09-10T08-41-59.664Z-cappucino.jpg', 15000, 1, '2020-09-10 08:41:59', '2020-10-17 07:58:09', 1),
(19, 'Salmon Truffle Teriyaki', '2020-09-10T08-42-45.982Z-salmon-truffle-teriyaki.jpg', 41500, 2, '2020-09-10 08:42:46', '0000-00-00 00:00:00', 1),
(20, 'Espresso', '2020-09-10T11-47-03.845Z-espresso.jpg', 17500, 1, '2020-09-10 11:47:04', '0000-00-00 00:00:00', 1),
(21, 'Sarabba', '2020-09-10T15-45-13.241Z-sarabba.jpg', 14000, 1, '2020-09-10 15:45:13', '2020-09-11 00:04:29', 1),
(22, 'Choco Rum', '2020-09-11T00-11-31.427Z-choco-rhum.jpg', 29000, 1, '2020-09-11 00:11:31', '0000-00-00 00:00:00', 1),
(23, 'Red Velvet Latte', '2020-09-11T07-50-39.621Z-red-velvet-latte.jpg', 20000, 1, '2020-09-11 07:50:40', '0000-00-00 00:00:00', 1),
(27, 'Special Nasi Goreng ', '2020-09-11T12-57-58.266Z-nasi-goreng.jpg', 20000, 2, '2020-09-11 12:57:58', '2020-09-13 18:30:44', 1),
(28, 'Potato Cake', '2020-09-13T18-16-47.677Z-black-forest.jpg', 100000, 2, '2020-09-13 18:16:47', '2020-09-13 18:17:12', 0),
(29, 'Dragon Fruit Smoothie', '2020-09-14T08-32-14.096Z-dragon fruit smoothie.jpg', 10000, 2, '2020-09-14 08:32:14', '2020-09-14 08:32:33', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_role` int(1) NOT NULL,
  `user_created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_name`, `user_role`, `user_created_at`, `user_updated_at`, `user_status`) VALUES
(1, 'cahier@gmail.com', '$2b$10$FTDPjHb8oT47CPS313Q0fuuhHr1ftVwpreHS.Ymbgq5SKGmRSI3bC', 'Rahmat', 2, '2020-09-01 05:04:07', '0000-00-00 00:00:00', 0),
(2, 'admin@gmail.com', '$2b$10$nl3ZLKTLfuG6R85OHrNvl.QvRdMPGrLLPRw5e2okG99emrfUBd8c2', 'admin', 1, '2020-09-02 15:04:35', '0000-00-00 00:00:00', 1),
(4, 'tes@gmail.com', '$2b$10$0aQJqwqadO9.qAx8GEdD3euKn0PhooY8/I/2PSCTq3zq2b0goiafG', 'tes2', 2, '2020-09-06 12:41:57', '0000-00-00 00:00:00', 1),
(27, 'dayaters22@gmail.com', '$2b$10$yYLj.YDzYtD022nRtm15..4RVsEUwfe3ehrgKicQ280YM.hOGdoA.', 'Nur Hidayat', 2, '2020-09-12 17:07:59', '0000-00-00 00:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indeks untuk tabel `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`history_id`);

--
-- Indeks untuk tabel `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`order_id`);

--
-- Indeks untuk tabel `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT untuk tabel `order_item`
--
ALTER TABLE `order_item`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=333;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
