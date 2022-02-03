import React, { useRef, useState } from "react";

function StudAdd(props) {
  //useRef for all inputs
  const fNameRef = useRef();
  const lNameRef = useRef();
  const noteRef = useRef();
  const imageRef = useRef();

  //onHandleClick ADD Button
  const handleClick = () => {
    let fNameValue = fNameRef.current.value;
    let lNameValue = lNameRef.current.value;
    let noteValue = noteRef.current.value;
    let imageValue = imageRef.current.value;

    if (
      fNameValue == "" ||
      lNameValue == "" ||
      noteValue == "" ||
      isNaN(Number(noteValue)) ||
      noteValue > 20 ||
      noteValue < 0 ||
      imageValue == ""
    )
      alert("Invalide Task 😖");
    else {
      fNameRef.current.value = "";
      lNameRef.current.value = "";
      noteRef.current.value = "";
      imageRef.current.value = "";

      props.addNewTask(fNameValue, lNameValue, noteValue, imageValue);
    }
  };

  return (
    <main
      className="
    bg-light
    mt-3
   mx-auto
  col-xs-12 col-sm-8
    fw-bolder
    text-secondary text-center
    w3-container w3-center w3-animate-left

  "
    >
      {/* firstname */}
      <section className=" d-lg-flex d-sm-block  justify-content-around align-items-center p-2 m-lg-4 m-sm-1">
        <label className="col-md-4  w-50 mx-auto " id="fN">
          First Name
        </label>
        <input
          id="fNV"
          className=" col-md-4 w-50 mx-auto  shadow form-control"
          placeholder="First Name"
          type="text"
          required
          ref={fNameRef}
          name="input"
          // onChange={onHandleChange}
        />
      </section>
      {/*last name  */}
      <section className=" d-lg-flex d-sm-block  justify-content-around align-items-center p-2 m-4 ">
        <label className="col-md-4  w-50 text-center " id="dN">
          Last Name
        </label>
        <input
          id="dNV"
          className=" col-md-4 w-50 mx-auto shadow form-control"
          placeholder="Last Name"
          type="text"
          ref={lNameRef}
        />
      </section>
      {/* note */}
      <section className="  d-lg-flex d-sm-block  justify-content-between align-items-center p-2 m-4">
        <label className="col-md-4  w-50   text-center ">
          Note student
        </label>
        <input
          // id="nSV"
          className=" col-md-4 w-50 mx-auto 
          
         overflow-none shadow form-control"
          placeholder="Note Student"
          type="text"
          ref={noteRef}
        />
      </section>
      {/* Picture */}
      <section className=" d-lg-flex d-sm-block  justify-content-between align-items-center  p-2 m-4">
        <label className="col-md-4  w-50 mx-xs-auto mx-lg-center  ">
          Picture
        </label>
        <input
          id="im"
          className="   col-md-4 w-50 mx-auto overflow-none shadow form-control"
          placeholder="URL Of Picture 😊"
          type="text"
          ref={imageRef}
        />
      </section>
      {/* ADD button */}
      <section className="text-center p-3 m-5 ">
        <button
          id="addBtn"
          className="btn  btn-outline-warning
                            *
                             w-50 fw-bold mx-auto text-secondary"
          onClick={handleClick}
        >
          Add
        </button>
      </section>
    </main>
  );
}

export default StudAdd;
