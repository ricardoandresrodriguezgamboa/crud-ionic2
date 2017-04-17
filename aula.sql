-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-04-2017 a las 01:24:24
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aula`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `pass`) VALUES
(1, 'Airton', 'airton@email.com', '112358'),
(2, 'Sergio', 'sergio@email.com', '112358'),
(22, ' Aline ', ' al@email.com ', ' e44f8cf63970db5c2df0a18153bcdf49 '),
(21, ' Anderson ', ' ander@email.com ', ' e44f8cf63970db5c2df0a18153bcdf49 '),
(19, ' Teste ', ' teste@email.com ', ' e44f8cf63970db5c2df0a18153bcdf49 '),
(20, ' Algusto ', ' al@emaiol.com ', ' e44f8cf63970db5c2df0a18153bcdf49 '),
(23, ' Junior ', ' ju@email.com ', ' e44f8cf63970db5c2df0a18153bcdf49 '),
(28, ' teste ', ' teste@email.com ', ' e44f8cf63970db5c2df0a18153bcdf49 '),
(30, ' Sergio ', ' s@email.com ', ' e10adc3949ba59abbe56e057f20f883e '),
(32, ' Sergio ', ' ser@email.com ', ' e10adc3949ba59abbe56e057f20f883e ');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
