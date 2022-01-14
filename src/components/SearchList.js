import React from 'react'

function SearchList() {
                    return (
                      <div>
                        <header className="d-flex justify-content-center align-items-center mt-3">
                          <input
                            id="filter"
                           
                            className="form-control w-25 mx-4"
                            type="search"
                            placeholder="Search a student"
                            aria-label="Search"
                          />
                          <i className="fas fa-search text-danger" />
                        </header>
                      </div>
                    );
}

export default SearchList
