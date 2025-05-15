import ProductCard from "./ProductCard";

function ProductsList({ products }) {
  return (
    products.length > 0 && (
      <div className="grid grid-cols-12 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )
  );
}

export default ProductsList;
