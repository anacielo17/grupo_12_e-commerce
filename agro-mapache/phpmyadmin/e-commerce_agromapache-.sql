-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-09-2023 a las 22:36:05
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
-- Última actualización: 13-09-2023 a las 19:44:34
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
('0abc0ca2-77b2-433c-97ed-6429d62ecbb1', 'Luz', 'Solares', '1996-01-30', 'Argentina', 3751896759, 'luzsolares@gmail.com', 'Femenino', 'Comprador', 'user-1694634274472-liz.jpg', '$2b$12$qip/wBulaLlXaFZFQx83PubA6Y15ZAE0/sH5f3w.0ClAfJAkIOPbK'),
('43cab939-fe00-4738-97f4-8162eb23f29b', 'Ana María', 'Alvarez', '1998-06-16', 'Argentina', 3761567890, 'anamariaalvarez@gmail.com', 'Femenino', 'Comprador', 'user-1694606303724-anamaria.jpg', '$2b$12$weSRS8/vvg2AUtSOO22mNe4YSXi1qaahIQ/ZT2Atln3WRmWDWtH6K'),
('8354b4c1-e0d8-4509-a81a-c54328b50efe', 'Narella', 'Magrassi', '1992-08-29', 'Argentina', 3671878900, 'narella@gmail.com', 'Femenino', 'Comprador', 'user-1693271924875-narella_perfil.jpg', '$2b$12$2Cy/GvHlGiSuAIKf8XZAYeYp/AgmQIXO5lvZis.24PrGbkAy93e8i'),
('a787f66c-797b-44cc-b61d-0dd495543784', 'Agustin', 'Martinez', '1989-06-13', 'Argentina', 3751567890, 'agustinmartinez@gmail.com', 'Masculino', 'Vendedor', 'user-1694611504202-agustin.jpg', '$2b$12$BogymBbzwF8UdRYJD6B6T.xZKWRJn0WyaKCm4MkP5Kspk3vCyzEAO'),
('e15fcf24-3846-462c-9903-b7518baa1141', 'Marta', 'Fernandez', '1998-05-04', 'Argentina', 3415972318, 'marta@gmail.com', 'Femenino', 'Comprador', 'user-1694616866226-Marta.jpg', '$2b$12$po5oBPWdch1h.Ptnw00udOasYD.giW1nAOk0DDXHBEc.jRQIxG4w2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--
-- Creación: 11-09-2023 a las 01:22:59
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` varchar(40) NOT NULL,
  `product_id` int(11) NOT NULL,
  `unit_price` decimal(8,2) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `subtotal` decimal(2,2) DEFAULT NULL,
  `discount` decimal(2,2) DEFAULT NULL,
  `total_price` decimal(2,2) DEFAULT NULL,
  `ship_adress` varchar(60) DEFAULT NULL,
  `paymentMethod` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- RELACIONES PARA LA TABLA `orders`:
--   `customer_id`
--       `customers` -> `customer_id`
--   `product_id`
--       `products` -> `product_id`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--
-- Creación: 19-08-2023 a las 19:09:47
-- Última actualización: 13-09-2023 a las 20:30:53
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
(4, NULL, 0, '02Niwa', 'Frances', 104620.00, 'Motosierra Niwa CNW62', 'Niwa 62cc., 22 de espada, contiene cadena (CNW62)', 'Oferta', '1692476282181-motosierra_niwa.png', 1, 0.99),
(5, NULL, 1, '00NoEspeci', 'Aleman', 1999999.99, 'Acoplado Tanque 3000 Lts Conese', 'Capacidad: 3.000 lts, aro a bolita: 500 x 50. Ejes 2” con rodamientos 30206-30208. Elásticos de 9 hojas.  Chasis de chapa plegada de 3/16 de espesor (5mm) y tanque construido en chapa 1/8 (abulonado al chasis). Enganche trasero y Guardabarros', 'Nuevo', '1692477594479-acoplado_tanque.jpg', 5, 0.00),
(6, NULL, 1, '03Diesel', 'Irlandes', 999999.99, 'Autoelevador Diesel Motor Chino 3000kg', 'Autoelevador Diesel Motor Chino 3000kg. Altura 4.5Metros', 'Nuevo', '1692476045304-autoelevador_diesel.jpg', 5, 0.00),
(7, NULL, 1, '05Fema', 'Argentina', 76388.00, 'Desmalezadora Motoguadaña Fema de Empuje', 'Desmalezadora de empuje Fema BC250 - R  52cc -1,47 Kw. 7000 RPM. Capacidad de tanque de Combustible 1 Litro.  2 Ruedas Neumáticas. Incluye Cabezal de Nylon', 'Nuevo', '1692476100856-desmalezadora_de_empuje.jpg', 1, 0.00),
(8, NULL, 1, '05Fema         ', ' Argentina     ', 999999.99, 'Carro Playo 4x2Mts 4 Toneladas                 ', 'Chasis reforzado construido en chapa plegada de 1/8” y 3/16”.Piso de chapa chapa 1/8 antideslizante.Eje de 2” de acero macizo con rodillos cónicos 7/8 TR. 1.55 M. Elásticos de acero reforzados. Tren giratorio a bolitas de acero. Frentes ventilados y barandas laterales volcables construidas en chapa ', ' Nuevo', '1692477358920-carro_playo.jpg', 5, 0.00),
(9, NULL, 3, '05Fema', 'Argentina', 16000.00, 'Carretilla Chapa Rueda Neumática 130Kg Fema', 'Material: Chapa. Espesor de la Bandeja: 1 mm.  Rueda-Rayo de acero. Manija: 32 x 1.2 mm. Capacidad: 130 Kg. - 65 Litros. Ideal Construcción Jardinero', 'Oferta', '1692475246823-carretilla.jpg', 3, 0.99),
(10, NULL, 2, '05Fema', 'Argentina', 498900.00, 'Micropulverizador 250 Lts', 'Tanque de 250 lts. en plástico rotomoldeado. 6 mts. de manguera, 4 mts de cable. Pinzas para batería Lanza (metálica extensible). Filtro de línea en la manguera de succión. Válvula reguladora de presión.', 'Oferta', '1694522033393-micropulverizador.jpg', 6, 0.99),
(11, NULL, 0, '05Fema', 'Argentina', 1928797.00, 'Cultivador Fema P/Toma Fuerza 66 cuchillas', 'Ideal para granjas y cultivos de vegetales, contratistas, paisajistas, mantenimiento municipal, etc  • 66 cuchillas.  214 cm de corte.   Caja de engranajes de aleación de uso intensivo. Medidas: 2320x730x750. Potencia Recomendada: 45 a 60HP, Peso: 390 Kg, toma de fuerza incluida', 'Nuevo', '1694522391148-cultivadora.jpg', 4, 0.00),
(13, NULL, 0, '05Fema', 'Argentina', 233292.00, 'Cortacerco Stiga SHP 60 24,5Cc 2 Tiempos', 'Cortacerco Stiga SHP 60 24,5cc 2 Tiempos. Corta cerco Stiga SHP 60. Sistema anti vibración, 5HP , 24,5CC', 'Nuevo', '1694570353441-cortacerco.jpg', 3, 0.00),
(14, NULL, 2, '02Niwa', 'RPCH', 160540.00, 'Podadora - Cortacerco Altura Niwa Modelo KNW33', 'Cortacerco de altura Niwa 33cc. corte espada 41cm.', 'Nuevo', '1694571459301-podadora_niwa.png', 3, 0.00),
(15, NULL, 4, '02Niwa', 'RPCH', 232890.00, 'Maquina Cortacesped Pampa Pro GH20 Motor Niwa', 'Cortadora de Cesped PAMPA PRO 20\" de corte con regulación de altura y Bolsa, motor Niwa 4,5 HP Ruedas altas traseras', 'Oferta', '1694606664745-cortacesped.png', 3, -0.99),
(16, NULL, 5, '02Niwa', 'RPCH', 172790.00, 'Fumigadora Niwa 52Cc 2 Tiempos Modelo FNW52', '• Cilindrada: 52 c.c.  • Capacidad de combustible: 0,8. Lts  • Cobertura horizontal: 15 MtsCapacidad de tanque de químicos: 28 Lts .Formato de químico: Polvo/Líquido', 'Oferta', '1694571519742-fumigadora.png', 6, 0.99),
(17, NULL, 5, '02Niwa', 'Argentina', 37164.00, 'Tijera de Poda Corte Bypass Bahco 25Mm', 'Mango Acero Forjado Cabezal Corte Largo 230Mm.Cabeza de corte con doble radio proporcionando cortes potentes y un buen acabado', 'Oferta', '1694615784055-tijera.png', 3, 0.99),
(18, NULL, 0, '02Niwa', 'RPCH', 171517.00, 'Juego De Vasos Y Vasos Serie Larga Con Cuadrado ', ' Con Perfil Hexagonal Metrico Y Juego De Llave Combinada Bahco  12 piezas, bocallaves hexagonales de 1/4\", 4, 4.5, 5, 5.5, 6, 7, 8, 9, 10, 11, 12 y 13 mm 10 piezas, bocallaves largos hexagonales de 1/4\", 4, 5, 6, 7, 8, 9, 10, 11, 12 y 13 mm 13 piezas, bocallaves hexagonales de 1/2\", 10, 11, 12, 13, ', 'Oferta', '1694571773811-herramienta.png', 2, 0.99),
(20, NULL, 0, '02Niwa', 'Argentina', 210457.00, 'Pluma Guinche Para Duca 1000 kg', 'Altura1960 mm. Altura de Elevación Máxima 1960 mm  • Longitud del Brazo Telescópico 860 mm. Longitud del Brazo Extensible 1130 mm ', 'Oferta', '1694636277481-guinche.jpg', 5, 0.99),
(21, NULL, 0, '02Niwa', 'RPCH', 4500000.00, 'Acoplado Tolva Semillera/Fertilizante 14TN', 'Capacidad: 14tn Chimango con motor hidráulico y extensión telescópica. Tacho inoculador. Tacho lava manos. Destape rápido. Llantas para cubiertas 295 80 /22,5', 'Nuevo', '1694636476289-tolvasem.jpg', 4, 0.00),
(22, NULL, 1, '03Diesel  ', 'Argentina', 300000.00, 'Tractor Cortacesped John Deere S140', 'S140 Los tractores de jardín Serie S son fáciles de operar gracias a su transmisión hidrostática, tienen mayor durabilidad y brindan mayor confort. Motor de 22 hp.', 'Nuevo ', '1694637053201-s140.jpg', 3, 0.00);

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
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
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
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

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
