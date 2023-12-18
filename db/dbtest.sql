DROP TABLE IF EXISTS `matriz`;
CREATE TABLE `matriz` (
  `odt` int DEFAULT NULL,
  `cliente` text,
  `grupo` text,
  `clasificacion` text,
  `cantidad` int DEFAULT NULL,
  `remision` text,
  `descripcion` text,
  `estadoCliente` text,
  `informe` text,
  `estadoPlanta` text,
  `cotizacion` text,
  `factura` text,
  `cotizacion2` text,
  `cotizacion3` text,
  `precio` int DEFAULT NULL
);