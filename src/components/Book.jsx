import React from "react";
import { useNavigate } from "react-router-dom";
import { calculateDiscount } from "../utils/discountCalculator";

function Book({ id, title, image, ratings, originalPrice, price, author }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/book/${id}`)}
      className="relative border bg-white border-gray-200 shadow-md my-4 mx-4 flex flex-col gap-2 p-2 cursor-pointer hover:bg-gray-200"
    >
      {/* Favorite Icon */}
      <div className="absolute top-1 right-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div className="h-[200px] w-auto ">
        <img className="h-full w-full object-contain" src={image} alt="" />
      </div>
      <h1 className="text-xl text-center font-semibold line-clamp-2 text-ellipsis">
        {title}
      </h1>
      <small className="text-center">Ratings: {ratings}</small>
      <div className="flex justify-center gap-2">
        <span className="text-green-700 font-semibold">{price}</span>
        <span className="line-through">{originalPrice}</span>
        <span className="text-green-600">
          {calculateDiscount(originalPrice, price)}% off
        </span>
      </div>
      <small className="text-center">{author}</small>
    </div>
  );
}

export default Book;
