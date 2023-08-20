-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-08-2023 a las 22:15:12
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--
-- Creación: 10-08-2023 a las 18:16:02
--

CREATE TABLE `brands` (
  `brand_code` varchar(10) NOT NULL,
  `brand_name` varchar(15) NOT NULL,
  `brand_country` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `brands`:
--

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
-- Creación: 10-08-2023 a las 18:16:02
--

CREATE TABLE `categories` (
  `category_name` varchar(20) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `categories`:
--

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
-- Creación: 10-08-2023 a las 18:16:03
--

CREATE TABLE `customers` (
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
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `customers`:
--

--
-- Volcado de datos para la tabla `customers`
--

INSERT INTO `customers` (`customer_id`, `customer_name`, `customer_lastName`, `customer_birthdate`, `customer_country`, `customer_phone`, `customer_email`, `customer_gender`, `customer_type`, `image`, `password`) VALUES
('1e8f3f40-be65-439e-abce-f288990b88d0', 'Juan Cruz ', 'Alvarez', '1998-12-04', 'Argentina', 3751567890, 'juanalvarez@gmail.com', 'Masculino', 'Comprador', '', '$2b$12$6bwvkB9ccMvhkDSI1rbWh.fG6cHSP0orj.WVmtFn3vfjylkFMovy.'),
('294ca796-6a2f-4d4f-be00-5d9d40483de4', ' pedro', 'ortiz', '2000-03-07', 'Argentina', 2241344444, 'pedri123@hotmail.com', 'Femenino', 'Comprador', 'user-1691542083208-dni dorso.jpeg', '$2b$12$wf7HVpBAToo54ync14nQSO5ynSrcVmHcJB33f6dR2r/maZrmqfsJK'),
('3fa5ad2f-f539-4795-977e-b82e6aeeb5e8', ' Renata', 'Gatito', '2005-10-11', 'Argentina', 3751567890, 'soyungatito@gmail.com', 'Femenino', 'Vendedor', '', '$2b$12$JgNX3dGLEt4kKN7TVOQP5ew5N8Xw2D/6nIBf0BobEesalj9y/gN1S'),
('a9825590-ebdf-47df-ac14-773ab75a41a5', ' Ana Cielo', 'Seidel', '2000-03-17', 'Argentina', 3751619142, 'anacieloseidel@gmail.com', 'Femenino', 'Comprador', 'user-1692133508620-CIELO.JPG', '$2b$12$HKpgbaOqvDRuqF30AIda0OMmTT/tEETpEYYCz/tOZozrXQAGY1VuO'),
('d3c9e15a-f2b7-40b8-9cd9-b9caec394e28', ' Pedro', ' Seidel', '2023-08-08', 'Argentina', 666, 'pedroseidel@gmail.com', 'Masculino', 'Comprador', NULL, '$2b$12$gLk4kcTXIkfZl4zulEKToeU/oPk9QWTFsYmT9LKYEuc7we75jKGp6'),
('ebf2090a-5866-43cc-87ed-44bb171d0a56', ' Sofia', 'Fortuny', '1986-10-24', 'Argentina', 3678676789, 'sofi@gmail.com', 'Femenino', 'Comprador', NULL, '$2b$12$rHixk0r5hdo7Ge7QQRNdOeVq9toswNCV.Ev4L.UBZR5ESL7nwe5X2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--
-- Creación: 10-08-2023 a las 18:16:03
--

CREATE TABLE `orders` (
  `order_code` bigint(20) NOT NULL,
  `customer_id` varchar(40) NOT NULL,
  `order_date` date NOT NULL,
  `ship_date` date DEFAULT NULL,
  `ship_adress` varchar(40) NOT NULL,
  `ship_city` varchar(20) NOT NULL,
  `ship_PC` varchar(8) NOT NULL,
  `ship_province` varchar(20) NOT NULL,
  `name_addressee` varchar(40) NOT NULL,
  `DNI_addressee` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `orders`:
--   `customer_id`
--       `customers` -> `customer_id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_details`
--
-- Creación: 10-08-2023 a las 18:16:03
--

CREATE TABLE `order_details` (
  `order_code` bigint(20) NOT NULL,
  `product_id` int(11) NOT NULL,
  `unit_price` decimal(8,2) NOT NULL,
  `total_price` decimal(8,2) NOT NULL,
  `discount` decimal(2,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `order_details`:
--   `order_code`
--       `orders` -> `order_code`
--   `product_id`
--       `products` -> `product_id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--
-- Creación: 19-08-2023 a las 19:09:47
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_date` date DEFAULT NULL,
  `product_inStock` int(11) NOT NULL,
  `brand_code` varchar(15) NOT NULL,
  `origin` varchar(15) NOT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `name` varchar(70) NOT NULL,
  `description` varchar(300) DEFAULT NULL,
  `product_condition` varchar(6) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `product_category` int(11) NOT NULL,
  `product_discount` decimal(2,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `products`:
--   `brand_code`
--       `brands` -> `brand_code`
--   `product_category`
--       `categories` -> `category_id`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `product_date`, `product_inStock`, `brand_code`, `origin`, `product_price`, `name`, `description`, `product_condition`, `image`, `product_category`, `product_discount`) VALUES
(3, NULL, 2, '01Bahco', 'Argentino ', 24589.00, 'Hacha de pico Bahco Mango Fibra Vidrio 900Mm - 3 Kg', 'Empuñadura suave en el mango para comodidad adicional y agujero para colgar para fácil almacenamiento. Mango fabricado en polipropileno reforzado con fibra de vidrio para mayor longevidad', 'Nuevo', '1692476200660-hacha_de_pico.png', 1, 0.00),
(4, NULL, 0, '02Niwa', 'Frances', 104620.00, 'Motosierra Niwa CNW62', 'Niwa 62cc., 22 de espada, contiene cadena (CNW62)', 'Oferta', '1692476282181-motosierra_niwa.png', 1, 0.99),
(5, NULL, 1, '00NoEspeci', 'Aleman', 1999999.99, 'Acoplado Tanque 3000 Lts Conese', 'Capacidad: 3.000 lts, aro a bolita: 500 x 50. Ejes 2” con rodamientos 30206-30208. Elásticos de 9 hojas.  Chasis de chapa plegada de 3/16 de espesor (5mm) y tanque construido en chapa 1/8 (abulonado al chasis). Enganche trasero y Guardabarros', 'Nuevo', '1692477594479-acoplado_tanque.jpg', 5, 0.00),
(6, NULL, 1, '03Diesel', 'Irlandes', 999999.99, 'Autoelevador Diesel Motor Chino 3000kg', 'Autoelevador Diesel Motor Chino 3000kg. Altura 4.5Metros', 'Nuevo', '1692476045304-autoelevador_diesel.jpg', 5, 0.00),
(7, NULL, 1, '05Fema', 'Argentina', 76388.00, 'Desmalezadora Motoguadaña Fema de Empuje', 'Desmalezadora de empuje Fema BC250 - R  52cc -1,47 Kw. 7000 RPM. Capacidad de tanque de Combustible 1 Litro.  2 Ruedas Neumáticas. Incluye Cabezal de Nylon', 'Nuevo', '1692476100856-desmalezadora_de_empuje.jpg', 1, 0.00),
(8, NULL, 1, '05Fema         ', ' Argentina     ', 999999.99, 'Carro Playo 4x2Mts 4 Toneladas                 ', 'Chasis reforzado construido en chapa plegada de 1/8” y 3/16”.Piso de chapa chapa 1/8 antideslizante.Eje de 2” de acero macizo con rodillos cónicos 7/8 TR. 1.55 M. Elásticos de acero reforzados. Tren giratorio a bolitas de acero. Frentes ventilados y barandas laterales volcables construidas en chapa ', ' Nuevo', '1692477358920-carro_playo.jpg', 5, 0.00),
(9, NULL, 3, '05Fema', 'Argentina', 16000.00, 'Carretilla Chapa Rueda Neumática 130Kg Fema', 'Material: Chapa. Espesor de la Bandeja: 1 mm.  Rueda-Rayo de acero. Manija: 32 x 1.2 mm. Capacidad: 130 Kg. - 65 Litros. Ideal Construcción Jardinero', 'Oferta', '1692475246823-carretilla.jpg', 3, 0.99);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`brand_code`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indices de la tabla `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_code`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indices de la tabla `order_details`
--
ALTER TABLE `order_details`
  ADD KEY `order_code` (`order_code`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `brand_code` (`brand_code`),
  ADD KEY `product_category` (`product_category`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `order_code` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
