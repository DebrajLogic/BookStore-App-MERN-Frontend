import React from "react";

function ContentWrapper({ children }) {
  return (
    <div className="w-full flex px-1 sm:px-4 sm:mx-auto my-4">{children}</div>
  );
}

export default ContentWrapper;
