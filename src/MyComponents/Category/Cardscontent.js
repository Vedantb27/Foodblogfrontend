import React, { useEffect, useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import CategoryContext from "./CategoryContext";

export const Cardscontent = () => {
  const { categoryName, title } = useParams();
  const { categoryData, loading } = useContext(CategoryContext);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!title || title.trim() === "") {
      navigate("/");
      return;
    }

    window.scrollTo(0, 0);

    if (!loading && categoryData) {
      const card = categoryData[categoryName]?.items.find(
        (card) => card.title === title
      );
      if (card) {
        setSelectedCard(card);
      } else {
        setSelectedCard(null);
      }
    }
  }, [categoryData, categoryName, title, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-16 h-16 md:w-36 md:h-36">
          <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!selectedCard) {
    return <div></div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      <header className="bg-gradient-to-r from-gray-800 to-gray-600 text-white flex justify-between items-center px-4 py-3 shadow-lg">
        <h1 className="text-xl font-bold flex items-center">
          <img
            src="https://img.freepik.com/free-vector/detailed-chef-logo-template_23-2148987940.jpg?size=626&ext=jpg&ga=GA1.1.1249956578.1712072062&semt=ais_user_b"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          My Food App
        </h1>
        <Link to="/">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-all duration-200">
            Back to menu
          </button>
        </Link>
      </header>
      <main className="flex-grow overflow-y-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="w-full md:w-1/2 h-56 md:h-96 mb-6 md:mb-0 md:mr-8 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              url={selectedCard.youtubeUrl}
            />
          </div>
          <div className="w-full md:w-3/4 mt-4 md:mt-0 border-2 rounded-2xl border-cyan-400 p-4 bg-white shadow-lg">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                {selectedCard.title}
              </h2>
              <div className="text-gray-700 m-2 text-start min-h-60 max-h-96 flex md:flex-row flex-col-reverse md:items-center">
                <p className="md:w-1/2 border-2 border-blue-400 rounded-2xl hide-scrollbar mt-4 p-4 mr-2 overflow-y-auto min-h-40 md:min-h-72 max-h-80">
                  {selectedCard.mealDetail}
                  <br />
                </p>
                <img
                  className="rounded-xl h-40 w-60 md:h-72 md:w-2/5 ml-auto mr-auto mt-4 object-cover"
                  src={selectedCard.imageId}
                  alt={selectedCard.title}
                />
              </div>
              <div className="flex items-center mt-4">
                <div className="flex items-center space-x-2">
                  <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500">
                    Type:
                  </p>
                  <p className="text-lg">{selectedCard.type}</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500 overflow-x-auto">
                  Ingredients
                </h3>
                <p className="text-gray-700 w-full border-2 border-blue-400 rounded-2xl p-4">
                  {selectedCard.ingredients}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
