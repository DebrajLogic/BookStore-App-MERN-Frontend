import React from "react";
import ContentWrapper from "./ContentWrapper";
import Logo from "./Logo";

function Header() {
  return (
    <ContentWrapper>
      <header className="w-full px-6 py-1">
        <div className="flex justify-between items-center">
          {/* Header Left */}
          {/* TODO: Use Link Here */}
          <a href="/">
            <Logo />
          </a>

          {/* Header Right */}
          <div>
            <a href="/add-book" className="text-blue-700 text-xl">
              Add Book
            </a>
          </div>
        </div>
      </header>
    </ContentWrapper>
  );
}

export default Header;
