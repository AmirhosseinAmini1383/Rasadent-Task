import Link from "next/link";
import CoverImage from "./CoverImage";

function ProductCard({ product }) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-200 p-4 rounded-lg">
      <CoverImage {...product} />
      <div>
        <p className="mb-4 font-bold text-secondary-700">{product.name_fa}</p>
        <div className="flex item-center justify-between mb-4">
          <p>
            <span className="inline-block whitespace-nowrap rounded-xl px-2 py-0.5 bg-secondary-300 text-xs text-white">
              {product.brand}
            </span>
          </p>
          <Link
            href={`/products/${product.slug}`}
            className="bg-secondary-400 text-white rounded-lg text-sm px-4 py-2"
          >
            مشاهده محصول
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
