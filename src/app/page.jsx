import { getProductsApi } from "@/services/productService";
import Search from "@/ui/Search";
import queryString from "query-string";
import ProductsList from "./_/components/ProductsList";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

export default async function Home({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const products = await getProductsApi(queries);
  const { q } = await searchParams;

  return (
    <div className="container xl:max-w-screen-xl mx-auto px-4 mt-8">
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
