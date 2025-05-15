import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ProductVariants from "./ProductVariants";

function ProductDetails({
  name_fa,
  name_en,
  sku,
  category,
  brand,
  comments_count,
  price,
  variants,
  selectedVariant,
  handleSelectedVariant,
}) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-8">
      <p className="font-bold text-secondary-400 text-base md:text-xl mb-2">
        {name_fa}
      </p>
      <p className="text-gray-400 text-xs mb-6 whitespace-normal">{name_en}</p>
      <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm mb-2">
        <span>کدمحصول:</span> <span>{sku}</span>
      </p>
      <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm mb-2">
        <span>دسته بندی:</span> <span>{category}</span>
      </p>
      <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm mb-2">
        <span>برند:</span> <span>{brand}</span>
      </p>
      {comments_count ? (
        <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm">
          <span>تعداد نظرات:</span>
          <span>{toPersianNumbers(comments_count)}</span>
        </p>
      ) : null}

      {price ? (
        <p className="flex items-center justify-start gap-x-1 text-secondary-300 font-black text-base md:text-xl mt-4 mb-6">
          <span>{toPersianNumbersWithComma(price)}</span>
          <span>تومان</span>
        </p>
      ) : null}

      <ProductVariants
        variants={variants}
        selectedVariant={selectedVariant}
        handleSelectedVariant={handleSelectedVariant}
      />

      <button className="w-full lg:w-[500px] flex items-center justify-center gap-x-2 bg-secondary-300 hover:bg-secondary-400 transition-all duration-150 ease-in text-white mt-6 p-3 rounded-xl">
        <span>
          <ShoppingCartIcon className="w-5 h-5 text-white" />
        </span>
        <span>افزودن به سبد خرید</span>
      </button>
    </div>
  );
}

export default ProductDetails;
