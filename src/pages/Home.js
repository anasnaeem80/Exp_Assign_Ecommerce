import React, { useContext } from "react";
import { ProductContext } from "../App";

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className='container mx-auto mt-4 px-4 bg-blue-50 py-8'>
      <h1 className='text-4xl font-bold text-center mb-6 text-blue-700'>
        Welcome to EasyBuy!
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <h2 className='text-xl font-semibold text-gray-800 mb-2'>
              {product.name}
            </h2>
            <p className='text-gray-600 mb-4'>{product.description}</p>
            <p className='text-lg font-bold text-green-600 mb-4'>
              {product.price}
            </p>
            <div className='flex justify-center items-center'>
              <button className='bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition duration-300'>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
