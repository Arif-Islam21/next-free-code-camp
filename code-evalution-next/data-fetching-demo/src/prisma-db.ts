import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        {
          title: "Product 1",
          price: 19.99,
          description: "Product description",
        },
        {
          title: "Product 2",
          price: 29.99,
          description: "Product description",
        },
        {
          title: "Product 3",
          price: 39.99,
          description: "Product description",
        },
      ],
    });
  }
};

// run seed operation if needed
seedProducts();
