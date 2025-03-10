import { SampleData, Product } from "./product-types";
import ProductCard from "./product-card";
const ProductList = ({
  data,
  title,
  limit,
}: {
  data: SampleData;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.products.slice(0, limit) : data.products;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {limitedData.map((product: Product) => (
          <ProductCard product={product} key={product.slug} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
