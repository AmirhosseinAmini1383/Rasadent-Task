import { getOneProductBySlugApi } from "@/services/productService";
import Product from "./_/components/Product";

export async function generateMetadata({ params }) {
  const productSlug = (await params).slug;
  const data = await getOneProductBySlugApi(productSlug);

  return {
    title: `پست ${data.name_fa}`,
  };
}

async function SingleProduct({ params }) {
  const productSlug = (await params).slug;
  const data = await getOneProductBySlugApi(productSlug);

  return (
    <div>
      <Product data={data} />
    </div>
  );
}

export default SingleProduct;
