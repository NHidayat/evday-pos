-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 07 Sep 2020 pada 14.43
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
(1, 'Drink', '2020-08-12 19:58:45', '2020-08-31 01:44:17', 1),
(2, 'Main Course', '2020-08-12 19:58:56', '2020-08-25 12:33:04', 1),
(3, 'Fruit', '2020-08-13 11:20:40', '2020-08-26 20:17:12', 1),
(7, 'Dessert', '2020-08-26 16:08:48', '2020-08-26 16:13:29', 1),
(8, 'qqqq a', '2020-08-31 08:57:37', '2020-09-07 04:19:56', 1);

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
(47, '1599463379231', 8000, 88000, 'Pevita Pearce', '2020-09-07 07:22:59');

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
(118, 47, 3, 'Cappucino', 1, 5000);

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
(3, 'cappucino ba', '2020-09-07T03-16-44.598Z-espresso.jpg', 25000, 3, '2020-09-05 06:40:14', '2020-09-07 03:19:12', 1),
(5, 'cappucino ba', '2020-09-07T05-18-55.119Z-cappucino.jpg', 25000, 3, '2020-09-07 05:18:55', '2020-09-07 06:22:26', 1),
(6, 'Sate 2', '2020-09-07T07-28-10.345Z-cappucino.jpg', 25000, 3, '2020-09-07 05:19:25', '2020-09-07 07:28:10', 1);

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
(1, 'cahier@gmail.com', '$2b$10$FTDPjHb8oT47CPS313Q0fuuhHr1ftVwpreHS.Ymbgq5SKGmRSI3bC', 'cahier', 2, '2020-09-01 05:04:07', '0000-00-00 00:00:00', 1),
(2, 'admin@gmail.com', '$2b$10$nl3ZLKTLfuG6R85OHrNvl.QvRdMPGrLLPRw5e2okG99emrfUBd8c2', 'admin', 1, '2020-09-02 15:04:35', '0000-00-00 00:00:00', 1),
(3, 'admin@gmail.comll', '$2b$10$89bJ/F63.StZI8U5REvXrOouRe4z4JcKEmfqq42dueRImsM4bCLyq', 'admin', 2, '2020-09-06 12:02:11', '0000-00-00 00:00:00', 0),
(4, 'tes@gmail.com', '$2b$10$KwjDWEtZaCKZgXIMH.ntzuOD5iP2X4F2wPnNAeyZyefqi.uhFVDYK', 'tes', 2, '2020-09-06 12:41:57', '0000-00-00 00:00:00', 1),
(5, 'tes2@gmail.com', '$2b$10$prVlvH7h8hB1cLBgxEOAFucNDyNx4zeez0V/OqmlYduaCIbEy1ydq', 'new', 2, '2020-09-07 00:33:19', '0000-00-00 00:00:00', 1),
(6, 'new@gmail.com', '$2b$10$Fp8TW9VCEcQFbPnnVlaWxOBBKNY0JKuGaOeSkbmK.yieEipfUajB.', 'new', 2, '2020-09-07 07:18:53', '0000-00-00 00:00:00', 1);

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
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `history`
--
ALTER TABLE `history`
  MODIFY `history_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT untuk tabel `order_item`
--
ALTER TABLE `order_item`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT untuk tabel `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
