import { Product } from "./product-types";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority
          />
        </Link>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
