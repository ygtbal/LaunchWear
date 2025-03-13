"use client";
import ProductList from "@/components/shared/product/product-list";
import { useEffect, useState } from "react";
import { Product } from "@/components/shared/product/product-types";
import LoadingPage from "../loading";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const response = await res.json();
          setProducts(response.data);
        } else {
          throw new Error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
      setLoading(false);
    };
    fetchData();
    console.log("fetching data");
  }, []);
  if (loading) return <LoadingPage />;
  return (
    <>
      <ProductList data={products} title="Newest Arrivals" />
    </>
  );
};

export default HomePage;
