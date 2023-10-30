import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-stone-500 bg-yellow-500 px-4 py-3 uppercase">
      <Link to="/" className="tracking-widest">
        Face React Pizza co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
