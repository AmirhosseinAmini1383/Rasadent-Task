import Button from "@/ui/Button";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

function ProductStocks({
  stocks,
  variants,
  selectedVariant,
  handleSelectedVariant,
}) {
  const variantValue = variants[0]?.title;

  return (
    <div className="col-span-12 mt-4 bg-gray-100 p-4 rounded-md">
      <div>
        <h2 className="text-secondary-400 text-xl font-bold mb-4">
          فروشنده ها
        </h2>
        <div>
          {stocks.length > 0 ? (
            stocks.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`flex flex-col md:flex-row items-start justify-start md:items-center md:justify-between my-2 space-y-2 bg-secondary-0 border-[3px] border-secondary-10 rounded-lg p-4 ${
                    selectedVariant === item.variants[variantValue]
                      ? "border-secondary-300"
                      : null
                  }`}
                >
                  <div className="flex flex-col items-start justify-start font-medium">
                    <p className="text-secondary-300 md:text-lg mb-1">
                      {item?.shop_title}
                    </p>
                    <p className="text-gray-400 text-xs flex items-center justify-center gap-x-1">
                      <span>
                        <InformationCircleIcon className="w-3 h-3 text-gray-400" />
                      </span>
                      <span>
                        {variantValue}: {item.variants[variantValue]}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base">
                      موجودی در انبار {toPersianNumbers(item.stock)} عدد
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm md:text-base">
                      قیمت:{" "}
                      <span className="text-secondary-700 font-semibold">
                        {toPersianNumbersWithComma(item.price)}
                      </span>{" "}
                      تومان
                    </p>
                  </div>

                  <Button
                    className="md:w-40 !m-0"
                    onClick={() => handleSelectedVariant(item.variants.رنگ)}
                  >
                    {" "}
                    انتخاب
                  </Button>
                </div>
              );
            })
          ) : (
            <p className="text-error-500">
              فروشنده‌ای برای این محصول وجود ندارد.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductStocks;
