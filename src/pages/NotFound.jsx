import React from "react";
import { ContentWrapper } from "../components";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <ContentWrapper>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="px-4 py-4 border border-blue-500 flex flex-col items-center">
          <h1>Oops! The Page you requested is not found</h1>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-1 bg-gray-300 rounded-full hover:bg-gray-400"
          >
            Go To Home
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default NotFound;
