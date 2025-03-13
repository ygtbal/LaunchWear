import sampleData from "./sample-data";
import prisma from "@/lib/db";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: sampleData.products,
  });
  console.log("Database seeded successfully");
}

main();
