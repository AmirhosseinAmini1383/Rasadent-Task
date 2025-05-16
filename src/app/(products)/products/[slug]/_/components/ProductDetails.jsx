import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ProductVariants from "./ProductVariants";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Button from "@/ui/Button";

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
      <p className="product-detail-text mb-2">
        <span>کدمحصول:</span> <span>{sku}</span>
      </p>
      <p className="product-detail-text mb-2">
        <span>دسته بندی:</span> <span>{category}</span>
      </p>
      <p className="product-detail-text mb-2">
        <span>برند:</span> <span>{brand}</span>
      </p>

      <p className="product-detail-text">
        <span>تعداد نظرات:</span>
        <span>{toPersianNumbers(comments_count)}</span>
      </p>

      {price === "0" || price === null ? (
        <p className="text-secondary-700 font-bold mt-4 mb-6">
          قیمتی برای این محصول درج نشده است.
        </p>
      ) : (
        <p className="flex items-center justify-start gap-x-1 text-secondary-300 font-black text-base md:text-xl mt-4 mb-6">
          <span>{toPersianNumbersWithComma(price)}</span>
          <span>تومان</span>
        </p>
      )}

      <ProductVariants
        variants={variants}
        selectedVariant={selectedVariant}
        handleSelectedVariant={handleSelectedVariant}
      />

      {price === "0" || price === null ? (
        <Button variant="secondary" className="lg:w-[500px]">
          <span>ناموجود</span>
        </Button>
      ) : (
        <Button className="lg:w-[500px]">
          <span>
            <ShoppingCartIcon className="w-5 h-5 text-white" />
          </span>
          <span>افزودن به سبد خرید</span>
        </Button>
      )}
    </div>
  );
}

export default ProductDetails;
