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
      <section className=" d-lg-flex d-sm-block  justify-content-around align-items-center  mt-5">
        <label className="mx-auto w-40  " >
          First Name
        </label>
        <input
          id="fNV"
          className="  w-50 mx-auto  shadow form-control"
          placeholder="First Name"
          type="text"
          required
          ref={fNameRef}
          name="input"
          // onChange={onHandleChange}
        />
      </section>
      {/*last name  */}
      <section className=" d-lg-flex d-sm-block  justify-content-around align-items-center  mt-5 ">
        <label className="mx-auto  w-40 text-center " id="dN">
          Last Name
        </label>
        <input
          
          className="w-50 mx-auto  shadow form-control"
          placeholder="Last Name"
          type="text"
          ref={lNameRef}
        />
      </section>
      {/* note */}
      <section className="  d-lg-flex d-sm-block  justify-content-around align-items-center  mt-5">
        <label className=" mx-auto w-40   text-center ">Note student</label>
        <input
          
          className=" w-50 mx-auto  shadow form-control"
          placeholder="Note Student"
          type="text"
          ref={noteRef}
        />
      </section>
      {/* Picture */}
      <section className=" d-lg-flex d-sm-block  justify-content-around align-items-center  mt-5">
        <label className="mx-auto w-40 text-center">
          Picture
        </label>
        <input
       
          className=" w-50 mx-auto  shadow form-control"
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
