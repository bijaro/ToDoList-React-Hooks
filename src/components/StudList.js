import React, { useState,useRef } from "react";
import Student from './Student';
// import { useRef } from 'react';

function StudList(props) {

  const [idedit, setidedit] = useState()
  const fNameRef = useRef();
  
    const lNameRef = useRef();
    const noteRef = useRef();
  const imageRef = useRef();
  
  const editTask = (idEdit, fNameEdit, lNameEdit, NoteEdit, ImageEdit) => {
    setidedit(idEdit)
    fNameRef.current.value = fNameEdit
    lNameRef.current.value = lNameEdit
    noteRef.current.value = NoteEdit
    imageRef.current.value = ImageEdit

  };

  const handleUpdate = () => {
    props.update(
      idedit,
      fNameRef.current.value,
      lNameRef.current.value,
      noteRef.current.value,
      imageRef.current.value
    );
  }
                    return (
                      <div>
                        <div className="mt-3 mx-auto w-75 bg-light text-center">
                          {/* <div className="pt-3 d-flex justify-content-between align-items-center flex-wrap">
                            <h6 className="text-warning bg-light w-25">
                              STUD NUMBER :
                            </h6>
                            <h6 id="numE" />
                            <h6 className="text-warning bg-light w-25">
                              General average :
                            </h6>
                            <h6 id="gen" />
                            <h6 className="mt-3 text-warning bg-light w-25">
                              List of Students
                            </h6>
                          </div> */}
                          {/* stud adm stud non adm */}
{/* 
                          //studentList */}
                          <table className="table text-secondary w3-container w3-center w3-animate-left">
                            <thead>
                              <tr >
                                <th>Picture</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Note</th>
                                <th>#</th>
                              </tr>
                            </thead>
                            <tbody  className="text-dark mx-auto">
                              {props.student
                                .sort((a, b) => b.id - a.id)
                                .map((t) => (
                                  <Student
                                    key={t.id}
                                    stud={t}
                                    deleteStud={props.deleteStud}
                                    editTask={editTask}
                                  />
                                ))}
                            </tbody>
                          </table>
                        </div>
                        <div>
                          {/* Button trigger modal */}

                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="staticBackdropLabel"
                                  >
                                    Update student information
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <main
                                    className="
    bg-light
    mt-3
     mx-auto
   
    fw-bolder
    text-secondary shadow text-center
    w3-container w3-center w3-animate-left

  "
                                  >
                                    {/* firstname */}
                                    <section className="d-flex justify-content-between align-items-center m-4">
                                      <label id="fN">First Name</label>
                                      <input
                                        id="fNV"
                                        className="w-50 shadow form-control"
                                        placeholder="First Name"
                                        type="text"
                                        required
                                        ref={fNameRef}
                                        name="input"
                                        // onChange={onHandleChange}
                                      />
                                    </section>
                                    {/*last name  */}
                                    <section className="d-flex justify-content-between align-items-center m-4">
                                      <label id="dN">Last Name</label>
                                      <input
                                        id="dNV"
                                        className="w-50 shadow form-control"
                                        placeholder="Last Name"
                                        type="text"
                                        ref={lNameRef}
                                      />
                                    </section>
                                    {/* note */}
                                    <section className="d-flex justify-content-between align-items-center m-4">
                                      <label id="nS">Note student</label>
                                      <input
                                        id="nSV"
                                        className="w-50 shadow form-control"
                                        placeholder="Note Student"
                                        type="text"
                                        ref={noteRef}
                                      />
                                    </section>
                                    {/* Picture */}
                                    <section className="d-flex justify-content-between align-items-center m-4">
                                      <label>Picture</label>
                                      <input
                                        id="im"
                                        className="w-50 shadow form-control"
                                        placeholder="URL Of Picture 😊"
                                        type="text"
                                        ref={imageRef}
                                      />
                                    </section>
                                    {/* ADD button */}
                                    <section className="text-center p-3 m-5 ">
                                      <button
                                        id="addBtn"
                                        className="btn btn-success
    w-50 fw-bold mx-auto text-white"
                                        data-bs-dismiss="modal"
                                        onClick={handleUpdate}
                                      >
                                        Update <i className="fas fa-edit" />
                                      </button>
                                      <br />
                                    </section>
                                  </main>
                                </div>
                                <div className="modal-footer">
                                  {/* <button
                                    type="button"
                                    className="btn btn-secondary"
                                  >
                                    Close
                                  </button> */}
                                  {/* <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Understood
                                  </button> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
}

export default StudList;
