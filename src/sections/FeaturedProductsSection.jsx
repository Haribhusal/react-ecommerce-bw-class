import React from "react";
import { BiSolidRightArrow, BiSolidWallet } from "react-icons/bi";
import Product from "./../components/Product";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FeaturedProductsSection = ({ title, products, itemsCount }) => {
  const cartData = useSelector((state) => state.cart.cartItemsData);
  const checkIfItemOnCart = (id) => {
    cartData.map((item) => item.id === id);
  };

  return (
    <section className="p-10 pt-0">
      <div className="heading flex justify-between items-center mb-5">
        <h3 className="text font-bold text-purple-600 text-3xl">{title}</h3>
        <button className="flex gap-3 items-center">
          All Products <BiSolidRightArrow />{" "}
        </button>
      </div>
      <div className="productswrapper grid grid-cols-5 gap-5">
        {products.length > 0 ? (
          products
            .slice(0, itemsCount)
            .map((product) => (
              <Product
                key={product.id}
                productData={product}
                disabled={checkIfItemOnCart}
              />
            ))
        ) : (
          <div>There is no product</div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
