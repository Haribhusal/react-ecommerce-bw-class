import React from "react";
import { BiSolidWallet } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCart } from "../services/cartSlice";

const Product = ({ productData, disabled }) => {
  const dispatch = useDispatch();
  return (
    <article className="product  group shadow-md p-5 rounded-md hover:-translate-y-3 hover:shadow-2xl cursor-pointer transition-all duration-200">
      <div className="image relative overflow-hidden">
        <Link key={productData.id} to={`/products/${productData.id}`}>
          <img
            src={productData.image}
            alt="product"
            className="rounded-md h-56 w-full object-contain"
          />
        </Link>
        <button
          disabled={disabled(productData.id)}
          onClick={() => dispatch(updateCart(productData))}
          className="absolute bg-purple-700 text-white py-2 rounded-md -bottom-32 group-hover:bottom-0 transition-all duration-150 left-0 w-full"
        >
          Add to Cart
        </button>
      </div>
      <div className="info py-5">
        <Link key={productData.id} to={`/products/${productData.id}`}>
          <h3 className="font-bold text-lg text-purple-700">
            {productData.title.slice(0, 40)}...
          </h3>
        </Link>
        <div className="price flex gap-3 items-center">
          <BiSolidWallet />
          Rs. {productData.price}
        </div>
        <div className="text text-sm my-3">
          {productData.description.slice(0, 100)}
        </div>
      </div>
    </article>
  );
};

export default Product;
