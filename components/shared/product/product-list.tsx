type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  images: string[];
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  isFeatured: boolean;
  banner: string | null;
};

type SampleData = {
  products: Product[];
};

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {limitedData.map((product: Product) => (
          <div key={product.slug}>{product.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
