import React from "react";

const dummyProducts = [
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
  {
    id: 11,
    name: "Health and Wellness Products",
    description:
      "Take care of your health and wellness with our selection of products. From vitamins and supplements to fitness accessories, prioritize your well-being.",
    price: "$59",
  },
  {
    id: 12,
    name: "Jewelry and Accessories",
    description:
      "Explore our range of jewelry and accessories, perfect for adding a touch of elegance or personal style to any outfit or occasion.",
    price: "$149",
  },
  {
    id: 13,
    name: "Automotive Parts and Accessories",
    description:
      "Find automotive parts and accessories to enhance your vehicle's performance and style. From maintenance essentials to customization options, we have you covered.",
    price: "$299",
  },
  {
    id: 14,
    name: "Musical Instruments",
    description:
      "Explore a world of music with our selection of musical instruments. From guitars and keyboards to drums and accessories, find your rhythm.",
    price: "$399",
  },
  {
    id: 15,
    name: "Stationery and Office Supplies",
    description:
      "Stock up on stationery and office supplies for work or school. From pens and notebooks to desk organizers, stay organized and productive.",
    price: "$29",
  },
  {
    id: 16,
    name: "Pet Supplies",
    description:
      "Spoil your pets with our range of pet supplies. From food and treats to grooming tools and toys, keep your furry friends happy and healthy.",
    price: "$49",
  },
  {
    id: 17,
    name: "Baby Products",
    description:
      "Discover baby products including clothing, toys, and care items. From newborn essentials to toddler must-haves, ensure comfort and safety.",
    price: "$79",
  },
  {
    id: 18,
    name: "Groceries and Food Items",
    description:
      "Shop groceries and food items for all your culinary needs. From pantry staples to gourmet treats, find quality ingredients for every meal.",
    price: "$99",
  },
  {
    id: 19,
    name: "Furniture",
    description:
      "Transform your living spaces with our range of furniture. From beds and sofas to chairs and tables, create a stylish and comfortable home.",
    price: "$899",
  },
  {
    id: 20,
    name: "Handicrafts and Artisanal Products",
    description:
      "Explore unique handicrafts and artisanal products crafted with care and creativity. From handmade jewelry to bespoke decor, support local artisans.",
    price: "$59",
  },
];

const Home = () => {
  return (
    <div className='container mx-auto mt-4 px-4'>
      <h1 className='text-4xl font-bold text-center mb-6 text-blue-600'>
        Welcome to EasyBuy!
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {dummyProducts.map((product) => (
          <div
            key={product.id}
            className='bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl'
          >
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
              {product.name}
            </h2>
            <p className='text-gray-600 mb-4'>{product.description}</p>
            <p className='text-xl font-bold text-green-600 mb-4'>
              {product.price}
            </p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
