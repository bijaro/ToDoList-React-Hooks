import React, { useRef } from "react";

function SearchList(props) {
  //useRef 
  const searchRef = useRef()
 //onKeyUp
  const handlekeyup = () => {
    const searchValue = searchRef.current.value;
    props.SearchV(searchValue) 
  }

  return (
    <div>
      <header
        className="d-flex justify-content-center align-items-center my-4"
        style={{ position: "relative" }}
      >
        <input
          
          className="form-control w-50 mx-4 rounded-3"
          type="search"
          placeholder="Search a student"
          aria-label="Search"
          ref={searchRef}
          onKeyUp={handlekeyup}
        />
        <i
          style={{ position: "absolute", right: "26%" }}
          className="fas fa-search text-black"
        />
      </header>
    </div>
  );
}

export default SearchList;
