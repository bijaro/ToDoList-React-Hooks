import React from 'react'

function StudentList() {
                    return (
                      <div>
                        <main
                          className="
    bg-light
    mt-3
    mx-auto
    w-50
    fw-bolder
    text-danger text-center
    w3-container w3-center w3-animate-left
  "
                        >
                          {/* firstname */}
                          <section className="d-flex justify-content-between align-items-center m-4">
                            <label id="fN" htmlFor>
                              {" "}
                              First Name
                            </label>
                            <input
                              id="fNV"
                              className="w-50 shadow form-control"
                              placeholder="First Name"
                              type="text"
                              required
                            />
                          </section>
                          {/*last name  */}
                          <section className="d-flex justify-content-between align-items-center m-4">
                            <label id="dN" htmlFor>
                              Last Name
                            </label>
                            <input
                              autofocus
                              id="dNV"
                              className="w-50 shadow form-control"
                              placeholder="Last Name"
                              type="text"
                            />
                          </section>
                          {/* note */}
                          <section className="d-flex justify-content-between align-items-center m-4">
                            <label id="nS" htmlFor>
                              Note student
                            </label>
                            <input
                              id="nSV"
                              className="w-50 shadow form-control"
                              placeholder="Note Student"
                              type="text"
                            />
                          </section>
                          {/* Picture */}
                          <section className="d-flex justify-content-between align-items-center m-4">
                            <label id="nS" htmlFor>
                              Picture
                            </label>
                            <input
                              id="im"
                              className="w-50 shadow form-control"
                              placeholder="URL Of Picture 😊"
                              type="text"
                            />
                          </section>
                          {/* ADD button */}
                          <section className="text-center p-3 m-5 ">
                            <button
                              id="addBtn"
                              onclick="add()"
                              className="btn btn-warning w-50 fw-bold mx-auto text-danger"
                            >
                              Add
                            </button>
                            <br />
                            {/* UPDATE BUTTON */}
                            <button
                              id="updtBtn"
                              onclick="updateEdt()"
                              className="btn btn-success mx-auto  w-50 fw-bold text-warning d-none"
                            >
                              update
                            </button>
                            <h5 id="h5" className="d-none">
                              Please fill in the fields correctly
                            </h5>
                          </section>
                        </main>
                      </div>
                    );
}

export default StudentList
