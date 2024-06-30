import React, { createContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./config/routes";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mobile Phone",
      description:
        "Discover the latest in smartphone technology with our range of mobile phones from top brands like Samsung, Apple, Xiaomi, and more. Stay connected and enjoy cutting-edge features.",
      price: "$799",
    },
    {
      id: 2,
      name: "Laptop",
      description:
        "Explore our selection of powerful laptops from Dell, HP, Lenovo, and other leading brands. Perfect for work, gaming, or creative projects, these laptops offer performance and style.",
      price: "$1,299",
    },
    {
      id: 3,
      name: "Clothing and Apparel",
      description:
        "Shop for stylish clothing and apparel from a variety of brands. Whether you're looking for casual wear, formal attire, or activewear, find your perfect fit and style here.",
      price: "$49",
    },
    {
      id: 4,
      name: "Electronics",
      description:
        "Discover a wide range of electronics including TVs, cameras, and home appliances. Enhance your home with the latest in technology and entertainment.",
      price: "$499",
    },
    {
      id: 5,
      name: "Beauty and Personal Care",
      description:
        "Pamper yourself with our selection of beauty and personal care products. From skincare essentials to grooming tools, achieve a radiant look and feel.",
      price: "$29",
    },
    {
      id: 6,
      name: "Books",
      description:
        "Explore our collection of books, both physical copies and e-books. Dive into a world of literature, knowledge, and entertainment with our diverse selection.",
      price: "$19",
    },
    {
      id: 7,
      name: "Sports and Fitness Equipment",
      description:
        "Achieve your fitness goals with our range of sports and fitness equipment. From gym essentials to outdoor gear, stay active and healthy.",
      price: "$199",
    },
    {
      id: 8,
      name: "Home Decor and Furnishings",
      description:
        "Transform your living spaces with our collection of home decor and furnishings. Find stylish and functional pieces to suit every room in your home.",
      price: "$129",
    },
    {
      id: 9,
      name: "Kitchen Appliances and Utensils",
      description:
        "Upgrade your kitchen with our range of appliances and utensils. From cooking essentials to innovative gadgets, enhance your culinary experience.",
      price: "$89",
    },
    {
      id: 10,
      name: "Toys and Games",
      description:
        "Discover fun and educational toys and games for all ages. From classic board games to interactive toys, find the perfect gift for any occasion.",
      price: "$39",
    },
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: prevProducts.length + 1 },
    ]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

function App() {
  return (
    <ProductProvider>
      <Router>
        <AppRoutes />
      </Router>
    </ProductProvider>
  );
}

export default App;
