import React from "react";

function SearchList() {
  return (
    <div>
      <header
        className="d-flex justify-content-center align-items-center my-4"
        style={{ position: "relative" }}
      >
        <input
          id="filter"
          className="form-control w-50 mx-4"
          type="search"
          placeholder="Search a student"
          aria-label="Search"
          
        />
        <i style={{ position: "absolute", right: "26%" }} className="fas fa-search text-black" />
      </header>
    </div>
  );
}

export default SearchList;
