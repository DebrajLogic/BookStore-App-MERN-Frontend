import React, { useState } from "react";
import { ContentWrapper } from "../components";
import { calculateDiscount } from "../utils/discountCalculator";

const book = {
  id: 1,
  title: "To Kill a Mockingbird",
  description:
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ab autem dolor molestias vitae veniam, animi doloribus nisi sed accusamus.",
  image: "https://m.media-amazon.com/images/I/81YkqyaFVEL._SY522_.jpg",
  ratings: 4.5,
  originalPrice: "$12.99",
  price: "$9.99",
  author: "Harper Lee",
};

function BookDetails() {
  const [favourite, setFavourite] = useState(false);
  return (
    <ContentWrapper>
      <div className="w-full flex mx-20 my-2 px-4 py-4 border border-blue-500 rounded-lg">
        {/* LEFT SECTION */}
        <div className="w-1/2">
          <div className="relative w-[400px] overflow-hidden">
            <img
              className="h-full w-full object-contain"
              src={book.image}
              alt=""
            />
            <div
              onClick={() => setFavourite((prev) => !prev)}
              className="cursor-pointer absolute top-1 right-1"
            >
              {favourite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-pink-500"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              ) : (
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
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="mt-4 w-1/2 flex flex-col justify-start items-center">
          <h1 className="text-2xl font-semibold">{book.title}</h1>
          <div className="mt-4 flex items-center justify-between gap-5">
            <small>Ratings: {book.ratings}</small>
            <span>{book.author}</span>
          </div>

          <div className="mt-4 flex gap-5 items-center">
            <span className="text-xl font-semibold text-green-600">
              {book.price}
            </span>
            <span className="line-through">{book.originalPrice}</span>
            <span className="text-green-600">
              {calculateDiscount(book.originalPrice, book.price)}% off
            </span>
          </div>

          <p className="mt-4">{book.description}</p>
          <div className="flex mt-8 gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              Add to Cart
            </button>
            {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add To Favorites
            </button> */}
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default BookDetails;
