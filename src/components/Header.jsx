import React from "react";
import { FaOpencart, FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let cartItemsData = useSelector((state) => state.cart.cartItemsData);
  return (
    <header className=" sticky top-0 z-50 bg-white flex justify-between items-center gap-10 shadow-md py-5 px-10">
      <Link to="/">
        <div className="logo flex gap-3 items-center">
          <FaOpencart />
          <h3>BigCommerce</h3>
        </div>
      </Link>

      <form className=" flex items-center">
        <input
          type="text"
          className="px-5 py-2 border-2 border-purple-400 rounded-sm"
          placeholder="Search Products, categories..."
        />
        <button type="submit" className="-ml-10 p-3">
          <BiSearch className="text-purple-700" />
        </button>
      </form>
      <div className="menu flex gap-5">
        <Link to={"/products"}>Products</Link>
        <a href="/">Categories</a>
        <a href="/">Offers</a>
        <a href="/">Sale with us</a>
        <a href="/">Contact us</a>
        <Link to="/add-product">Add Product</Link>
      </div>
      <div className="buttons flex gap-5 items-center">
        <Link to="/cart">
          <div className="cart relative">
            <FaShoppingCart className="text-purple-600" />
            {cartItemsData.length !== 0 && (
              <span className="absolute -top-5 -right-3 bg-purple-500 border-2 border-white text-white text-sm rounded-md px-1">
                {cartItemsData.length}
              </span>
            )}
          </div>
        </Link>

        <div className="login">Login</div>
        <div className="login">Register</div>
      </div>
    </header>
  );
};

export default Header;
