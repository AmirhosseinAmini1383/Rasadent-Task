import ProductCard from "../../../../products/_/components/ProductCard";

function ProductRelated({ related_products }) {
  return (
    <div className="col-span-12">
      <p className="text-secondary-400 text-xl font-bold mb-4">محصولات مشابه</p>
      {related_products.length > 0 ? (
        <div className="grid grid-cols-12 gap-8">
          {related_products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-error-500">محصول مشابه‌ای وجود ندارد.</p>
      )}
    </div>
  );
}

export default ProductRelated;
