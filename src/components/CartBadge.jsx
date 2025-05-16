"use client";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Modal from "@/ui/Modal";
import { toPersianNumbers } from "@/utils/toPersianNumbers";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Button from "@/ui/Button";

function CartBadge() {
  const { cart, setCart } = useShoppingCart();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDeleteShoppingCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((c) => c.id !== cartId));
  };

  return (
    <div>
      {isClient ? (
        <>
          <div className="ml-5 cursor-pointer" onClick={() => setIsOpen(true)}>
            <div className="relative">
              <span className="bg-secondary-10 border border-secondary-300 text-secondary-700 rounded-xl px-1.5 py-0.5 absolute text-xs -top-2 -right-3">
                {toPersianNumbers(cart.length)}
              </span>
              <ShoppingCartIcon className="w-6 h-6 text-secondary-400" />
            </div>
          </div>
          <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            title="سبد خرید"
            description={`${
              cart.length > 0
                ? `${toPersianNumbers(
                    cart.length
                  )} محصول درون سبد خرید وجود دارد.`
                : "محصولی در سبد خرید وجود ندارد."
            }`}
          >
            {cart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                handleDeleteShoppingCart={handleDeleteShoppingCart}
                setIsOpen={setIsOpen}
              />
            ))}
            <Button
              onClick={() => {
                console.log(cart);
              }}
            >
              لاگ گرفتن اطلاعات در کنسول
            </Button>
          </Modal>
        </>
      ) : null}
    </div>
  );
}

export default CartBadge;
