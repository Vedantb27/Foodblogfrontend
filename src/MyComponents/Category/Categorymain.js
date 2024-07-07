import React from "react";
import { Cards } from "./Cards";

export const Categorymain = ({ categoryData }) => {
  return (
    <div className="category mt-4 flex">
      <div className="border-6 w-full">
        {Object.keys(categoryData).map((categoryName) => {
          return (
            <div key={categoryName} className="lg:ml-28 lg:mr-28">
              <h1 className="text-3xl font-bold bg-clip-text sm:p-4 rounded-lg shadow-md m-8 text-left">
                <a id={categoryName}>{categoryName}</a>
              </h1>
              <div className="category-cardsilist flex">
                <div className="w-full hide-scrollbar category-cardsilist flex md:flex-wrap overflow-x-scroll margin-auto">
                  {categoryData[categoryName].items.map((card, cardIndex) => {
                    return (
                      <Cards
                        key={card.cardId}
                        categoryName={categoryName} // Pass categoryName instead of categoryIndex
                        title={card.title}
                        {...card}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
