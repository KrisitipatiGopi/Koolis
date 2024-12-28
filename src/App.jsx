/*import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "./components/Context";

const App = () => {
  const [filteredProducts, setegorie } = useContext(AtFilteredProducts] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredSubcategories, setFilteredSubcategories] = useState([]);
  const { all_products, cappContext);

  useEffect(() => {
    // Initialize the filtered products with all products when the component is mounted
    setFilteredProducts(all_products);
  }, [all_products]);

  const handleSelectedCategories = (cat) => {
    let updatedCategories;
    if (filteredCategories.includes(cat)) {
      // Remove the category from the selected categories if already present
      updatedCategories = filteredCategories.filter(
        (category) => category !== cat
      );
    } else {
      // Add the category to the selected categories
      updatedCategories = [...filteredCategories, cat];
    }

    setFilteredCategories(updatedCategories);

    // Filter products based on the selected categories
    const filteredProds = all_products.filter((product) =>
      updatedCategories.includes(product.category)
    );

    // Update the filtered products
    setFilteredProducts(filteredProds);
  };

  const handleFilteredSubProducts = (subCategory) => {
    let updatedSubcategories;
    if (filteredSubcategories.includes(subCategory)) {
      // Remove the subcategory from the selected subcategories if already present
      updatedSubcategories = filteredSubcategories.filter(
        (subcategory) => subcategory !== subCategory
      );
    } else {
      // Add the subcategory to the selected subcategories
      updatedSubcategories = [...filteredSubcategories, subCategory];
    }

    setFilteredSubcategories(updatedSubcategories);

    // Filter products based on both selected categories and subcategories
    const filteredProds = all_products.filter((product) =>
      filteredCategories.includes(product.category) &&
      updatedSubcategories.includes(product.subcategory)
    );
   
    if(filteredProds.length === 0 && filteredCategories.length === 0){
      setFilteredProducts(all_products)
    }else{
      setFilteredProducts(filteredProds); 
    }
  };

  return (
    <div className="m-10 flex gap-11">
      <div className="w-[20%]">
        {categorie.map((every, index) => (
          <div key={index} className="flex flex-col border border-emerald-500 p-5">
            <div className="flex items-center">
              <input
                type="checkbox"
                id={every.category}
                onChange={() => handleSelectedCategories(every.category)}
              />
              <label htmlFor={every.category} className="ml-2 font-extrabold">
                {every.category}
              </label>
            </div>
            <div className="border border-purple-700 p-5 ml-5 mt-4">
              {every.subcategories.map((each, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={each}
                    onChange={() => handleFilteredSubProducts(each)}
                  />
                  <label className="font-bold ml-2" htmlFor={each}>
                    {each}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-[100%] flex flex-col flex-wrap h-[90vh] gap-2 p-6 border border-blue-600">
        {filteredProducts.map((C) => (
          <div key={C.id} className="flex">
            <h1 className="font-bold text-lg">{C.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App; */


import React from 'react'
import Kooli from './components/Kooli'


const App = () => {
  return (
    <div>
      <Kooli />
    </div>
  )
}

export default App