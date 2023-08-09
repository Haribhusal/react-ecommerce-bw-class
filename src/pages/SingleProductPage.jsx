import React, { useState, useEffect } from "react";
import { BiSolidWallet } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { addToCart, updateCart } from "./../services/cartSlice";
import { useDispatch } from "react-redux";

const SingleProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  }, [id]);

  return (
    <article className=" p-10 flex gap-10">
      <div className="image flex-1">
        <img
          src={singleProduct.image}
          alt={singleProduct.title}
          className="rounded-md"
        />
      </div>
      <div className="info flex-[3]">
        <h3 className="title text-purple-700 text-3xl font-bold">
          {singleProduct.title}
        </h3>
        <div className="price flex items-center gap-3 p-3 text-2xl text-violet-500 bg-purple-100 rounded-md my-5">
          <BiSolidWallet /> Rs. {singleProduct.price}
        </div>
        <div className="text">{singleProduct.description}</div>
      </div>
      <div className="buttons flex-1">
        <div
          onClick={() => dispatch(updateCart(singleProduct))}
          className="flex gap-3 items-center justify-center cursor-pointer bg-violet-600 text-white rounded-md p-5 text-center"
        >
          {" "}
          <FaShoppingCart /> Add to Cart
        </div>
      </div>
    </article>
  );
};

export default SingleProductPage;
