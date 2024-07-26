/*
  Warnings:

  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `client`;

-- CreateTable
CREATE TABLE `employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_username` VARCHAR(191) NOT NULL,
    `employee_name` VARCHAR(191) NOT NULL,
    `employee_age` INTEGER NOT NULL,
    `employee_designation` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `employee_employee_username_key`(`employee_username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
