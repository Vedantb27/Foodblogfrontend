import React from "react";
import { useNavigate } from "react-router-dom";

export const Cards = ({ categoryName, title, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Cardscontent/${categoryName}/${encodeURIComponent(title)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-sm min-h-40 min-w-40 w-1/5 transform transition duration-500 hover:scale-105 hover:shadow-xl m-4 cursor-pointer "
      id={props.title}
    >
      <div className="flex justify-center">
        <img
          className="rounded-xl h-40 w-60 mt-4 object-cover"
          src={props.imageId}
          alt={props.title}
        />
      </div>
      <div className="p-4">
        <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition duration-300">
          {title}
        </h5>
        <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-gray-700">
          {props.type}
        </p>
      </div>
    </div>
  );
};
