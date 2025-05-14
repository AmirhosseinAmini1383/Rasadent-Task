import { getOneProductBySlugApi } from "@/services/productService";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Image from "next/image";

async function SingleProduct({ params }) {
  const productSlug = (await params).slug;
  const data = await getOneProductBySlugApi(productSlug);
  console.log(data);

  return (
    <div>
      <div className="grid grid-cols-12 gap-8 mt-8 rounded-xl mx-4 p-4 bg-gray-50">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative aspect-square overflow-hidden rounded-md">
          {data.images.length ? (
            <Image
              src={data.images[0].original_url}
              alt={data.name_fa}
              fill
              className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out rounded-lg border border-secondary-10"
            />
          ) : (
            <Image
              src={"/images/Rasadent.png"}
              alt={data.name_fa}
              width="1080"
              height="1080"
              className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out rounded-lg"
            />
          )}
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-8">
          <p className="font-bold text-secondary-400 text-base md:text-xl mb-2">
            {data.name_fa}
          </p>
          <p className="text-gray-400 text-xs mb-6 whitespace-normal">
            {data.name_en}
          </p>
          <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm mb-2">
            <span>کدمحصول:</span> <span>{data.sku}</span>
          </p>
          <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm mb-2">
            <span>دسته بندی:</span> <span>{data.category}</span>
          </p>
          <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm mb-2">
            <span>برند:</span> <span>{data.brand}</span>
          </p>
          {data.comments_count ? (
            <p className="flex items-center justify-start gap-x-1 text-gray-700 font-medium text-sm">
              <span>تعداد نظرات:</span>
              <span>{toPersianNumbers(data.comments_count)}</span>
            </p>
          ) : null}

          {data.price ? (
            <p className="flex items-center justify-start gap-x-1 text-secondary-300 font-black text-base md:text-xl mt-4 mb-6">
              <span>{toPersianNumbersWithComma(data.price)}</span>
              <span>تومان</span>
            </p>
          ) : null}

          {data.variants ? (
            <div className="bg-gray-100 p-4 lg:p-1.5 rounded-md">
              <p className="font-bold text-secondary-400 text-xl mb-2">
                {data.variants[0].title}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 text-secondary-400 rounded-lg gap-2 items-center">
                {data.variants[0].values.map((item) => {
                  return (
                    <span
                      key={item.id}
                      className="bg-secondary-0 text-center rounded-md py-2 font-bold text-xs cursor-pointer hover:border hover:border-secondary-300 bg-secondary-200 border border-secondary-300"
                    >
                      {toPersianNumbers(item.value)}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : null}
          <button className="">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
