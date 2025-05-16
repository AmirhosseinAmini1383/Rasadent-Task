import { toPersianNumbers } from "@/utils/toPersianNumbers";

function ProductVariants({ variants, selectedVariant, handleSelectedVariant }) {
  return (
    <div>
      {variants.length > 0 ? (
        <div className="bg-gray-100 p-4 lg:p-1.5 rounded-md lg:w-[500px]">
          <p className="font-bold text-secondary-400 text-xl mb-2">
            {variants[0]?.title}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 text-secondary-400 rounded-lg gap-2 items-center">
            {variants[0].values.map((item) => {
              return (
                <span
                  key={item.id}
                  className={`col-span-1 bg-secondary-0 text-center rounded-md py-2 font-semibold text-xs cursor-pointer border-2 border-secondary-10 hover:border-secondary-50 hover:bg-secondary-10 ${
                    selectedVariant === item.value
                      ? "border-secondary-300 !font-black"
                      : ""
                  }`}
                  onClick={() => handleSelectedVariant(item.value)}
                >
                  {toPersianNumbers(item.value)}
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProductVariants;
