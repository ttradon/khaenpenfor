/*
  Warnings:

  - The primary key for the `Couples` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Couples` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Couples` table. All the data in the column will be lost.
  - The `id` column on the `Couples` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Couples" DROP CONSTRAINT "Couples_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Couples_pkey" PRIMARY KEY ("id");
