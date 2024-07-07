import React, { useState, useMemo, useContext, useEffect } from "react";
import "./App.css";
import { Navbar } from "./MyComponents/Navbar/Navbar";
import { Corouselnew } from "./MyComponents/Corousel/Corouselnew";
import { Categorymain } from "./MyComponents/Category/Categorymain";
import { Loginform } from "./MyComponents/Navbar/Loginform";
import { NoResultsFound } from "./MyComponents/Category/NoResultsFound";
import CategoryContext from "./MyComponents/Category/CategoryContext";

function Main() {
  const { categoryData } = useContext(CategoryContext);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const filterData = (data, query) => {
    if (!query) return data;

    const filteredData = {};
    Object.keys(data).forEach((categoryName) => {
      const filteredItems = data[categoryName].items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredItems.length > 0) {
        filteredData[categoryName] = {
          ...data[categoryName],
          items: filteredItems,
        };
      }
    });

    return filteredData;
  };

  const filteredCategoryData = useMemo(
    () => filterData(categoryData, searchQuery),
    [categoryData, searchQuery]
  );

  useEffect(() => {
    setIsEmpty(Object.keys(filteredCategoryData).length === 0);
  }, [filteredCategoryData]);

  return (
    <div className="App">
      <Navbar
        setShowLoginForm={setShowLoginForm}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {showLoginForm && <Loginform onClose={() => setShowLoginForm(false)} />}
      {!searchQuery && <Corouselnew categoryData={categoryData} />}
      {isEmpty && searchQuery ? (
        <NoResultsFound />
      ) : (
        <Categorymain categoryData={filteredCategoryData} />
      )}
    </div>
  );
}

export default Main;
