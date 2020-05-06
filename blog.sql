create database `blog`;

use `blog`;

DROP TABLE IF EXISTS `admin_user`;

CREATE TABLE `admin_user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
);

insert  into `admin_user`(`Id`,`userName`,`password`) values (1,'admin','123456');

/*Table structure for table `article` */

DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `title` varchar(255) NOT NULL DEFAULT '',
  `article_content` longtext NOT NULL,
  `introduce` text,
  `addTime` int(11) DEFAULT NULL,
  `view_count` int(11) NOT NULL DEFAULT '0',
  `part_count` int(11) DEFAULT '0',
  `article_content_html` longtext,
  `introduce_html` text,
  `isTop` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id`)
);

DROP TABLE IF EXISTS `bibidao`;

CREATE TABLE `bibidao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `url` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `type`;

CREATE TABLE `type` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  `orderNum` int(11) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
);