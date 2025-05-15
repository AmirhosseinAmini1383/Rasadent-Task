import { getProductsApi } from "@/services/productService";
import Search from "@/ui/Search";
import queryString from "query-string";
import ProductsList from "./_/components/ProductsList";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

export const metadata = {
  title: "محصولات",
};

async function page({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const products = await getProductsApi(queries);
  const { q } = await searchParams;

  return (
    <div className="px-4 my-8">
      <h1 className="font-black md:text-xl mb-5 text-secondary-400">
        محصول مورد نظر خود را سرچ کنید.
      </h1>
      <Search />
      {q ? (
        <p className="my-6 text-secondary-700">
          {products.length === 0
            ? "هیچ محصولی با این مشخصات پیدا نشد"
            : ` نمایش ${toPersianNumbers(products.length)} نتیجه برای `}
          <span className="font-bold">&quot;{q}&quot;</span>
        </p>
      ) : null}
      <ProductsList products={products} />
    </div>
  );
}

export default page;
