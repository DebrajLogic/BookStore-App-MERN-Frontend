import React, { useState } from "react";
import { ContentWrapper } from "../components";
import axios from "axios";

function AddBook() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [ratings, setRatings] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");

  const [bookAdded, setBookAdded] = useState(false);

  const addBook = async (e) => {
    e.preventDefault();
    const book = {
      title,
      description,
      image,
      ratings,
      originalPrice,
      price,
      author,
    };

    const response = await axios.post(
      "http://localhost:4000/api/v1/add-book",
      book,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    setTimeout(() => {
      setBookAdded(false);
    }, 1000);
    setBookAdded(true);
  };

  return (
    <ContentWrapper>
      <div className="w-full h-screen flex justify-center items-start ">
        <form className="flex flex-col my-4 w-[800px] px-4 py-4 border border-blue-500 rounded-xl">
          <h1 className="text-center font-semibold text-2xl">Add Book</h1>

          {/* Book Image */}
          {image && (
            <div className="mt-4 h-[300px] overflow-hidden">
              <img
                className="h-full w-full object-contain"
                src={image}
                alt=""
              />
            </div>
          )}
          {/* Title */}
          <div className="my-2">
            <h2 className="ml-2">Title</h2>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=""
              type="text"
              placeholder="Title"
            />
          </div>

          {/* Description */}
          <div className="my-2">
            <h2 className="ml-2">Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=""
              type="text"
              placeholder="Description"
            />
          </div>

          {/* Image */}
          <div className="my-2">
            <h2 className="ml-2">Image</h2>
            <div className="flex">
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className=""
                type="text"
                placeholder="Image link"
              />
            </div>
          </div>

          <div>
            <h2 className="">Ratings</h2>
            <input
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
              className="border border-gray-200 outline-none"
              type="text"
              placeholder="Ratings"
            />
          </div>

          <div className="my-2 flex items-center gap-4">
            <div>
              <h2 className="ml-2">Original Price</h2>
              <input
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className=""
                type="text"
                placeholder="Original Price"
              />
            </div>
            <div className="my-2">
              <h2 className="ml-2">New Price</h2>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className=""
                type="text"
                placeholder="New Price"
              />
            </div>
          </div>

          <div className="my-2">
            <h2 className="ml-2">Author</h2>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className=""
              type="text"
              placeholder="Author"
            />
          </div>
          {bookAdded && (
            <p className="text-center text-green-500">Book Added!</p>
          )}

          <button
            onClick={addBook}
            className="mt-4 text-center w-30 rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
          >
            Add Book
          </button>
        </form>
      </div>
    </ContentWrapper>
  );
}

export default AddBook;
