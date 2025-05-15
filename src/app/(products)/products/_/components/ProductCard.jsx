import CoverImage from "./CoverImage";

function ProductCard({ product }) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-200 p-2 rounded-lg">
      <CoverImage {...product} />
      <div>
        <h2 className="mb-4 font-bold text-secondary-700">{product.name_fa}</h2>
        <p>
          <span className="inline-block whitespace-nowrap rounded-xl px-2 py-0.5 bg-secondary-700 text-xs text-white">
            {product.brand}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
