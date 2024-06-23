import React, { createContext, useState } from 'react';

const Admincontext = createContext();

export const AdminProvider = ({ children }) => {
    
    const [originalData, setOriginalData] = useState({});//main.js
    const [categoryData, setCategoryData] = useState({});//main.js
    const [cards, setCards] = useState([]);
    const [originalCards, setOriginalCards] = useState([]);

    return (
        <Admincontext.Provider value={{ cards, setCards, originalCards, setOriginalCards ,  originalData , setOriginalData , categoryData , setCategoryData}}>
            {children}
        </Admincontext.Provider>
    );
};

export default Admincontext;
