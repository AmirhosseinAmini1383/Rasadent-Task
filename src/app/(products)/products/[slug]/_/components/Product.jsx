"use client";
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import ProductStocks from "./ProductStocks";
import ProductRelated from "./ProductRelated";

function Product({ data }) {
  const [selectedVariant, setSelectedVariant] = useState(
    data.variants[0]?.values[0]?.value || ""
  );

  const handleSelectedVariant = (value) => {
    setSelectedVariant(value);
  };

  return (
    <div className="grid grid-cols-12 gap-8 rounded-xl my-10 mx-4 p-4 bg-gray-50">
      <ProductImage {...data} />
      <ProductDetails
        selectedVariant={selectedVariant}
        handleSelectedVariant={handleSelectedVariant}
        data={data}
      />
      <ProductStocks
        {...data}
        selectedVariant={selectedVariant}
        handleSelectedVariant={handleSelectedVariant}
      />
      <ProductRelated {...data} />
    </div>
  );
}

export default Product;
