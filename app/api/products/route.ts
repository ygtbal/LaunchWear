//import next request and response
import { NextResponse } from "next/server";

//import prisma client
import prisma from "../../../lib/db";

import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";

// function to get all notes
export async function GET() {
  //get all products
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Products",
      data: products,
    },
    {
      status: 200,
    }
  );
}
