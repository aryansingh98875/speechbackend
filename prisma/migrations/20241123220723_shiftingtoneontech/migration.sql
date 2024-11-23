/*
  Warnings:

  - You are about to drop the `DefaultLevel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DefaultSubLevel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DefaultLevelToSubLevel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DefaultSubLevel" DROP CONSTRAINT "DefaultSubLevel_levelId_fkey";

-- DropForeignKey
ALTER TABLE "_DefaultLevelToSubLevel" DROP CONSTRAINT "_DefaultLevelToSubLevel_A_fkey";

-- DropForeignKey
ALTER TABLE "_DefaultLevelToSubLevel" DROP CONSTRAINT "_DefaultLevelToSubLevel_B_fkey";

-- DropTable
DROP TABLE "DefaultLevel";

-- DropTable
DROP TABLE "DefaultSubLevel";

-- DropTable
DROP TABLE "_DefaultLevelToSubLevel";
