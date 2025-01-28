"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute top-12 right-0 p-4 rounded-md text-sm bg-white flex flex-col gap-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
        <h2 className='text-xl'>Shopping Cart</h2>
          {/* LIST  */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product name</h3>
                  <p className="p-1 bg-gray-50 rounded-sm ">$49</p>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="/woman.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP  */}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product name</h3>
                  <p className="p-1 bg-gray-50 rounded-sm ">$49</p>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">available</div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$249</span>
            </div>
            <p className="mt-2 mb-4 text-gray-500 text-sm">Shipping and taxes calculated at checkout.</p>
            <div className="flex justify-between text-sm">
                <button className="py-3 px-4 rounded-md ring-1 ring-gray-300">View Cart</button>
                <button className="py-3 px-4 rounded-md bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
