import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/sample-data";
const HomePage = () => {
  return (
    <>
      <ProductList data={sampleData} title="Newest Arrivals" limit={5} />
    </>
  );
};

export default HomePage;
