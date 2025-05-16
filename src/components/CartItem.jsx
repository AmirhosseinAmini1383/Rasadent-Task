"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function CartItem({
  id,
  slug,
  name_fa,
  name_en,
  brand,
  category,
  images,
  handleDeleteShoppingCart,
  setIsOpen,
}) {
  const { push } = useRouter();

  return (
    <div className="w-full flex items-center justify-between my-4 p-4 rounded-lg border border-secondary-300">
      <div
        className="cursor-pointer space-y-1"
        onClick={() => {
          push(`/products/${slug}`);
          setIsOpen(false);
        }}
      >
        <p className="font-bold">{name_fa}</p>
        <p className="text-xs text-gray-500">{name_en}</p>
        <p className="inline-block whitespace-nowrap rounded-xl px-2 py-0.5 bg-secondary-300 text-xs text-white">
          {brand}
        </p>
        <p className="product-detail-text">{category}</p>
      </div>
      <div className="flex items-center gap-x-8">
        <img
          src={images[0].original_url}
          className="w-25 h-25 rounded-md cursor-pointer"
          onClick={() => {
            push(`/products/${slug}`);
            setIsOpen(false);
          }}
        />
        <div
          className="cursor-pointer"
          onClick={() => handleDeleteShoppingCart(id)}
        >
          <TrashIcon className="text-error-500 h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
