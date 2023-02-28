-- CreateTable
CREATE TABLE "notifications_db" (
    "id" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notifications_db_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "notifications_db_recipientId_idx" ON "notifications_db"("recipientId");
