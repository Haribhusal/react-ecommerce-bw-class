import React from "react";
import { useSelector } from "react-redux";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeCart } from "../services/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  let cartData = useSelector((state) => state.cart.cartItemsData);
  console.log(cartData);
  return (
    <div className="p-10">
      <h3 className="text-3xl font-bold mb-5">My Cart Items</h3>
      <div className="cartwrapper flex gap-10">
        <div className="left w-3/4">
          {cartData.length !== 0 ? (
            cartData.map((item) => (
              <div key={item.id} className="mb-5 bg-purple-100 p-5 relative">
                <div className="flex items-center gap-10">
                  <div className="w-24 bg-white rounded-md p-3 flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 object-contain rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl ">{item.title}</h3>
                    <div className="text-purple-600 text-md my-1 font-bold">
                      Rs. {item.price}
                    </div>
                    <div className="tags flex">
                      <div className="tag bg-white px-2 py-1 rounded-md text-sm text-center">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <button
                    className="absolute right-5 top-5"
                    onClick={() => dispatch(removeCart(item.id))}
                  >
                    <BsTrashFill />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No Items in the cart</div>
          )}
        </div>
        <div className="right bg-slate-600 rounded-md text-white w-1/4 p-10">
          <h3 className="title text-2xl font-bold">Cart Details</h3>
          <div className="info flex my-2 justify-between items-center">
            <div className="left">Total Products</div>
            <div className="right">4</div>
          </div>
          <div className="info flex my-2 justify-between items-center">
            <div className="left">Total Price</div>
            <div className="right">Rs. 4400</div>
          </div>
          <div className="info flex my-2 justify-between items-center">
            <div className="left">Discount</div>
            <div className="right">Rs.200</div>
          </div>
          <div className="info flex my-2 justify-between items-center">
            <div className="left">Pay Amount</div>
            <div className="right">Rs.4200</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
