import React from "react";

type Props = {
  children: React.ReactNode;
};

const SearchBar = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="shadow rounded-md p-2 flex items-center border bg-white">
        {children}
      </div>
    </div>
  );
};

export default SearchBar;
