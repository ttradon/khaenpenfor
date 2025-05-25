-- CreateTable
CREATE TABLE "Couples" (
    "id" TEXT NOT NULL,
    "person1" TEXT NOT NULL,
    "person2" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Couples_pkey" PRIMARY KEY ("id")
);
