// CategoryContext.js

import React, { createContext, useState, useEffect } from "react";
import _ from "lodash";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categoryData, setCategoryData] = useState({});
  const [originalData, setOriginalData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}/get-json`);
        const data = await response.json();
        if (!_.isEqual(originalData, data)) {
          const filteredData = filterIdFromData(data);
          setCategoryData(filteredData);
          setOriginalData(data);
        }
      } catch (error) {
        console.log("Error fetching the data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterIdFromData = (data) => {
    const { _id, __v, ...rest } = data;
    return rest;
  };

  return (
    <CategoryContext.Provider
      value={{ categoryData, setCategoryData, originalData, setOriginalData, loading }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
