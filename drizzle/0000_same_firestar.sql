-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `Category` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(191) NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL,
	`companyId` int);
--> statement-breakpoint
CREATE TABLE `Company` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`cnpj` varchar(191) NOT NULL,
	`nickname` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`initialDeposit` double NOT NULL,
	`address` varchar(191),
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL);
--> statement-breakpoint
CREATE TABLE `Expense` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`description` varchar(191) NOT NULL,
	`companyId` int NOT NULL,
	`categoryId` int NOT NULL,
	`userId` int NOT NULL,
	`transactionDate` datetime(3) NOT NULL,
	`recurring` tinyint NOT NULL,
	`recurringInterval` varchar(191),
	`amount` double NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL);
--> statement-breakpoint
CREATE TABLE `Revenue` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`companyId` int NOT NULL,
	`userId` int NOT NULL,
	`recordedDate` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`transactionDate` datetime(3) NOT NULL,
	`cash` double NOT NULL,
	`credit` double NOT NULL,
	`debit` double NOT NULL,
	`pix` double NOT NULL,
	`meal` double NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL,
	`total` double NOT NULL,
	`tip` double NOT NULL);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` int AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`companyId` int NOT NULL,
	`role` varchar(191) NOT NULL,
	`name` varchar(191) NOT NULL,
	`email` varchar(191) NOT NULL,
	`hash` varchar(191) NOT NULL,
	`createdAt` datetime(3) NOT NULL DEFAULT (CURRENT_TIMESTAMP(3)),
	`updatedAt` datetime(3) NOT NULL);
--> statement-breakpoint
CREATE UNIQUE INDEX `Company_cnpj_key` ON `Company` (`cnpj`);--> statement-breakpoint
CREATE UNIQUE INDEX `User_email_key` ON `User` (`email`);
*/