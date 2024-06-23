import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { Navbar } from './MyComponents/Navbar/Navbar';
import { Corouselnew } from './MyComponents/Corousel/Corouselnew';
import { Categorymain } from './MyComponents/Category/Categorymain';
import { Loginform } from './MyComponents/Navbar/Loginform';
import { NoResultsFound } from './MyComponents/Category/NoResultsFound';

function Main() {
  const [categoryData, setCategoryData] = useState({});
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://foodblogbackend-git-main-mern-food-apps-projects.vercel.app/get-json");
        const data = await response.json();
        console.log(data);
        const filteredData = filterIdFromData(data);
        setCategoryData(filteredData);
      } catch (error) {
        console.log("error fetching the data", error);
      }
    };
    fetchData();
  }, []);

  const filterIdFromData = (data) => {
    const { _id, __v, ...rest } = data;
    return rest;
  };

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

  const filteredCategoryData = useMemo(() => filterData(categoryData, searchQuery), [categoryData, searchQuery]);

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
