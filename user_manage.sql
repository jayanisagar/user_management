-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2020 at 08:22 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `user_manage`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2020_01_19_055450_create_user_managements_table', 1),
(5, '2020_01_19_055513_create_user_activities_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` tinyint(1) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_activities`
--

CREATE TABLE `user_activities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_activities`
--

INSERT INTO `user_activities` (`id`, `user_id`, `action`, `details`, `created_at`, `updated_at`) VALUES
(1, '1', 'get', '[{\"id\":1,\"first_name\":\"d\",\"last_name\":\"dd\",\"email_address\":\"abc@bb.com\",\"password\":\"abc\",\"token\":null,\"status\":1,\"created_at\":null,\"updated_at\":null}]', '2020-01-20 13:48:58', '2020-01-20 13:48:58'),
(2, '1', 'put', '{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":\"0\",\"created_at\":null,\"updated_at\":null}', '2020-01-20 13:49:19', '2020-01-20 13:49:19'),
(3, '1', 'get', '[{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":0,\"created_at\":null,\"updated_at\":null}]', '2020-01-20 13:49:20', '2020-01-20 13:49:20'),
(4, '1', 'post', '{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":\"1\",\"created_at\":null,\"updated_at\":null}', '2020-01-20 13:49:26', '2020-01-20 13:49:26'),
(5, '1', 'get', '[{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":1,\"created_at\":null,\"updated_at\":null}]', '2020-01-20 13:49:26', '2020-01-20 13:49:26'),
(6, '1', 'post', '{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":\"0\",\"created_at\":null,\"updated_at\":null}', '2020-01-20 13:49:29', '2020-01-20 13:49:29'),
(7, '1', 'get', '[{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":0,\"created_at\":null,\"updated_at\":null}]', '2020-01-20 13:49:29', '2020-01-20 13:49:29'),
(8, '1', 'get', '[{\"id\":1,\"first_name\":\"s\",\"last_name\":\"g\",\"email_address\":\"ag@bb.com\",\"password\":\"abcd\",\"token\":null,\"status\":1,\"created_at\":null,\"updated_at\":null}]', '2020-01-20 13:50:12', '2020-01-20 13:50:12'),
(9, '1', 'get/id', '[{\"id\":1,\"user_id\":\"1\",\"action\":\"get\",\"details\":\"[{\\\"id\\\":1,\\\"first_name\\\":\\\"d\\\",\\\"last_name\\\":\\\"dd\\\",\\\"email_address\\\":\\\"abc@bb.com\\\",\\\"password\\\":\\\"abc\\\",\\\"token\\\":null,\\\"status\\\":1,\\\"created_at\\\":null,\\\"updated_at\\\":null}]\",\"created_at\":\"2020-01-20 19:18:58\",\"updated_at\":\"2020-01-20 19:18:58\"},{\"id\":2,\"user_id\":\"1\",\"action\":\"put\",\"details\":\"{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":\\\"0\\\",\\\"created_at\\\":null,\\\"updated_at\\\":null}\",\"created_at\":\"2020-01-20 19:19:19\",\"updated_at\":\"2020-01-20 19:19:19\"},{\"id\":3,\"user_id\":\"1\",\"action\":\"get\",\"details\":\"[{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":0,\\\"created_at\\\":null,\\\"updated_at\\\":null}]\",\"created_at\":\"2020-01-20 19:19:20\",\"updated_at\":\"2020-01-20 19:19:20\"},{\"id\":4,\"user_id\":\"1\",\"action\":\"post\",\"details\":\"{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":\\\"1\\\",\\\"created_at\\\":null,\\\"updated_at\\\":null}\",\"created_at\":\"2020-01-20 19:19:26\",\"updated_at\":\"2020-01-20 19:19:26\"},{\"id\":5,\"user_id\":\"1\",\"action\":\"get\",\"details\":\"[{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":1,\\\"created_at\\\":null,\\\"updated_at\\\":null}]\",\"created_at\":\"2020-01-20 19:19:26\",\"updated_at\":\"2020-01-20 19:19:26\"},{\"id\":6,\"user_id\":\"1\",\"action\":\"post\",\"details\":\"{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":\\\"0\\\",\\\"created_at\\\":null,\\\"updated_at\\\":null}\",\"created_at\":\"2020-01-20 19:19:29\",\"updated_at\":\"2020-01-20 19:19:29\"},{\"id\":7,\"user_id\":\"1\",\"action\":\"get\",\"details\":\"[{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":0,\\\"created_at\\\":null,\\\"updated_at\\\":null}]\",\"created_at\":\"2020-01-20 19:19:29\",\"updated_at\":\"2020-01-20 19:19:29\"},{\"id\":8,\"user_id\":\"1\",\"action\":\"get\",\"details\":\"[{\\\"id\\\":1,\\\"first_name\\\":\\\"s\\\",\\\"last_name\\\":\\\"g\\\",\\\"email_address\\\":\\\"ag@bb.com\\\",\\\"password\\\":\\\"abcd\\\",\\\"token\\\":null,\\\"status\\\":1,\\\"created_at\\\":null,\\\"updated_at\\\":null}]\",\"created_at\":\"2020-01-20 19:20:12\",\"updated_at\":\"2020-01-20 19:20:12\"}]', '2020-01-20 13:50:16', '2020-01-20 13:50:16');

-- --------------------------------------------------------

--
-- Table structure for table `user_managements`
--

CREATE TABLE `user_managements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_managements`
--

INSERT INTO `user_managements` (`id`, `first_name`, `last_name`, `email_address`, `password`, `token`, `status`, `created_at`, `updated_at`) VALUES
(1, 's', 'g', 'ag@bb.com', 'abcd', NULL, 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_activities`
--
ALTER TABLE `user_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_managements`
--
ALTER TABLE `user_managements`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_activities`
--
ALTER TABLE `user_activities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user_managements`
--
ALTER TABLE `user_managements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
