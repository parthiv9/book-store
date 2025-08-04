import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [method, setMethod] = useState("COD");
  const [showUserLogin, setShowUserLogin] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const currency = import.meta.env.VITE_CURRENCY;
  const delivery_charges = 10;

  const fetchBooks = () => {
    setBooks(dummyBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addToCart = (itemId) => {
    let cartData = { ...cartItems };
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      try {
        if (cartItems[itemId] > 0) {
          totalCount += cartItems[itemId];
        }
      } catch (error) {
        console.log("error", error);
      }
      return totalCount;
    }
  };

  const updateQuantity = (itemId, quantity) => {
    const cartData = { ...cartItems };
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = books.find((book) => book._id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.offerPrice * cartItems[itemId];
        }
      }
      return totalAmount;
    }
  };

  const value = {
    books,
    navigate,
    user,
    setUser,
    currency,
    searchQuery,
    setSearchQuery,
    cartItems,
    setCartItems,
    addToCart,
    getCartAmount,
    getCartCount,
    method,
    setMethod,
    delivery_charges,
    showUserLogin,
    setShowUserLogin,
    isAdmin,
    setIsAdmin,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
