-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-08-2023 a las 18:32:33
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `e-commerce_agromapache`
--
CREATE DATABASE IF NOT EXISTS `e-commerce_agromapache` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `e-commerce_agromapache`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
  `brand_code` varchar(10) NOT NULL,
  `brand_name` varchar(15) NOT NULL,
  `brand_country` varchar(20) NOT NULL,
  PRIMARY KEY (`brand_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`brand_code`, `brand_name`, `brand_country`) VALUES
('00NoEspeci', 'No especifica', 'No especifica'),
('01Bahco', 'Bahco', 'Suecia'),
('02Niwa', 'Niwa', 'RPCH'),
('03Diesel', 'Diesel', 'Italia'),
('04Loyto', 'Loyto', 'Argentina'),
('05Fema', 'Fema', 'Argentina');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `category_name` varchar(20) NOT NULL,
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`category_name`, `category_id`) VALUES
('Forestación', 1),
('Herramientas', 2),
('Jardineria', 3),
('Maquinaria', 4),
('Movimiento de Carga', 5),
('Pulverización', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` varchar(40) NOT NULL DEFAULT 'uuidv4',
  `customer_name` varchar(20) NOT NULL,
  `customer_lastName` varchar(15) NOT NULL,
  `customer_birthdate` date NOT NULL,
  `customer_country` varchar(20) NOT NULL,
  `customer_phone` bigint(20) DEFAULT NULL,
  `customer_email` varchar(40) NOT NULL,
  `customer_gender` varchar(20) DEFAULT NULL,
  `customer_type` varchar(9) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `password` varchar(80) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_lastName`, `customer_birthdate`, `customer_country`, `customer_phone`, `customer_email`, `customer_gender`, `customer_type`, `image`, `password`) VALUES
('294ca796-6a2f-4d4f-be00-5d9d40483de4', ' pedro', 'ortiz', '2000-03-07', 'Argentina', 2241344444, 'pedri123@hotmail.com', 'Femenino', 'Comprador', 'user-1691542083208-dni dorso.jpeg', '$2b$12$wf7HVpBAToo54ync14nQSO5ynSrcVmHcJB33f6dR2r/maZrmqfsJK'),
('6e24d4f6-f9d3-4ec9-bd88-2cafbc0937c9', ' Maru', ' Seidel', '2023-08-22', 'Argentina', 666, 'marucha@gmail.com', 'Femenino', 'Comprador', NULL, '$2b$12$ka1oVx8XRDrrNGAE7JaAfOprjOn10m80gCSA5MMAxJl.HyUDvyFp6'),
('a9825590-ebdf-47df-ac14-773ab75a41a5', ' Ana Cielo', 'Seidel', '2000-03-17', 'Argentina', 3751619142, 'anacieloseidel@gmail.com', 'Femenino', 'Comprador', NULL, '$2b$12$HKpgbaOqvDRuqF30AIda0OMmTT/tEETpEYYCz/tOZozrXQAGY1VuO'),
('d3c9e15a-f2b7-40b8-9cd9-b9caec394e28', ' Pedro', ' Seidel', '2023-08-08', 'Argentina', 666, 'pedroseidel@gmail.com', 'Masculino', 'Comprador', NULL, '$2b$12$gLk4kcTXIkfZl4zulEKToeU/oPk9QWTFsYmT9LKYEuc7we75jKGp6'),
('ebf2090a-5866-43cc-87ed-44bb171d0a56', ' Sofia', 'Fortuny', '1986-10-24', 'Argentina', 3678676789, 'sofi@gmail.com', 'Femenino', 'Comprador', NULL, '$2b$12$rHixk0r5hdo7Ge7QQRNdOeVq9toswNCV.Ev4L.UBZR5ESL7nwe5X2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `order_code` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(40) NOT NULL,
  `order_date` date NOT NULL,
  `ship_date` date DEFAULT NULL,
  `ship_adress` varchar(40) NOT NULL,
  `ship_city` varchar(20) NOT NULL,
  `ship_PC` varchar(8) NOT NULL,
  `ship_province` varchar(20) NOT NULL,
  `name_addressee` varchar(40) NOT NULL,
  `DNI_addressee` bigint(20) NOT NULL,
  PRIMARY KEY (`order_code`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_details`
--

CREATE TABLE IF NOT EXISTS `order_details` (
  `order_code` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `unit_price` decimal(8,2) NOT NULL,
  `total_price` decimal(8,2) NOT NULL,
  `discount` decimal(2,2) DEFAULT NULL,
  KEY `order_code` (`order_code`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_date` date DEFAULT NULL,
  `product_inStock` int(11) NOT NULL,
  `brand_code` varchar(15) NOT NULL,
  `origin` varchar(15) NOT NULL,
  `product_price` varchar(40) DEFAULT NULL,
  `name` varchar(70) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `product_condition` varchar(6) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `product_category` int(11) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `brand_code` (`brand_code`),
  KEY `product_category` (`product_category`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `product_date`, `product_inStock`, `brand_code`, `origin`, `product_price`, `name`, `description`, `product_condition`, `image`, `product_category`) VALUES
(3, NULL, 0, '01Bahco', 'Argentino ', '$24.589', 'Hacha de pico Bahco Mango Fibra Vidrio 900Mm - 3 Kg', 'Empuñadura suave en el mango para comodidad adicional y agujero para colgar para fácil almacenamiento. Mango fabricado en polipropileno reforzado con fibra de vidrio para mayor longevidad', 'Nuevo', '1691537768043-hacha_de_pico.png', 3),
(4, NULL, 0, '02Niwa', 'Frances', '$104.620', 'Motosierra Niwa CNW62', 'Niwa 62cc., 22 de espada, contiene cadena (CNW62)', 'Nuevo', '1691537959320-motosierra_niwa.png', 1),
(5, NULL, 0, '00NoEspeci', 'Aleman', '$8.500.000', 'Acoplado Tanque 3000 Lts Conese', 'Capacidad: 3.000 lts, aro a bolita: 500 x 50. Ejes 2” con rodamientos 30206-30208. Elásticos de 9 hojas.  Chasis de chapa plegada de 3/16 de espesor (5mm) y tanque construido en chapa 1/8 (abulonado al chasis). Enganche trasero y Guardabarros', 'Nuevo', '1691541674753-acoplado_tanque.jpg', 4),
(6, NULL, 0, '03Diesel', 'Irlandes', '$10.049.916', 'Autoelevador Diesel Motor Chino 3000kg', 'Autoelevador Diesel Motor Chino 3000kg. Altura 4.5Metros', 'Nuevo', '1691541736659-autoelevador_diesel.jpg', 5);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Filtros para la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_code`) REFERENCES `orders` (`order_code`),
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_code`) REFERENCES `brands` (`brand_code`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`product_category`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
