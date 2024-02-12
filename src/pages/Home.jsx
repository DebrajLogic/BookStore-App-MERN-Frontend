import React, { useEffect, useState } from "react";
import ContentWrapper from "../components/ContentWrapper";
import { Book } from "../components";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/books`
      );
      console.log("Response = ", response?.data);
      setBooks(response?.data);

      // response?.data?.map((item) => {
      //   return console.log("item = ", item.originalPrice);
      // });
    };

    fetchData();
  }, []);
  console.log("Books = ", books);
  return (
    <main>
      <ContentWrapper>
        <div className="flex justify-center items-start w-full h-screen p-4">
          <div className="flex flex-col justify-start items-center p-4 w-full rounded-lg border border-blue-500 ">
            <h1 className="text-xl font-semibold ">All Books</h1>

            <div className="border border-blue-500 px-4 py-2 w-full rounded-lg mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {books?.map((book) => {
                console.log("book = ", book);
                return (
                  <Book
                    key={book?._id}
                    id={book?._id}
                    title={book?.title}
                    description={book?.description}
                    image={book?.image}
                    ratings={book?.ratings}
                    originalPrice={book?.originalPrice}
                    price={book?.price}
                    author={book?.author}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </main>
  );
}

export default Home;
