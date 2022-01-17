import React, { useRef, useState } from 'react'

function StudAdd(props) {
  // const [input, setInput] = useState('')
  // const[fname,setFname] = useState('')
  //                   const onHandleChange = e => {
  //                                    setInput(e.target.value)
  //                   }
  // const onHandleSubmit =
  //   e => {
  //                                       e.prevenDefault();
  //                                       setInput('')
  //                  }

  const fNameRef = useRef()
  const lNameRef = useRef();
  const noteRef = useRef();
  const imageRef = useRef();

  const handleClick = () => {
    
   let fNameValue = fNameRef.current.value
   let lNameValue = lNameRef.current.value;
    let noteValue = noteRef.current.value;
    let imageValue = imageRef.current.value;

    if (
      fNameValue == "" ||
      lNameValue == "" ||
      noteValue == "" ||
      isNaN (Number(noteValue))  ||
      imageValue == ""
    )
      alert("Invalide Task 😖");
    else {
      fNameRef.current.value = "";
      lNameRef.current.value = "";
      noteRef.current.value = "";
      imageRef.current.value = "";

      props.addNewTask(fNameValue, lNameValue, noteValue, imageValue
      )

      
    }

  }




                    return (
                      <main
                        className="
    bg-light
    mt-3
    mx-auto
    w-75
    fw-bolder
    text-secondary text-center
    w3-container w3-center w3-animate-left

  "
                      >
                        {/* firstname */}
                        <section className="d-flex justify-content-between align-items-center p-2 m-4">
                          <label className="w-25" id="fN">
                            First Name
                          </label>
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
                        <section className="d-flex justify-content-between align-items-center p-2 m-4">
                          <label className="w-25" id="dN">
                            Last Name
                          </label>
                          <input
                            id="dNV"
                            className="w-50 shadow form-control"
                            placeholder="Last Name"
                            type="text"
                            ref={lNameRef}
                          />
                        </section>
                        {/* note */}
                        <section className="d-flex justify-content-between align-items-center p-2 m-4">
                          <label className="w-25" id="nS">
                            Note student
                          </label>
                          <input
                            id="nSV"
                            className="w-50 shadow form-control"
                            placeholder="Note Student"
                            type="text"
                            ref={noteRef}
                          />
                        </section>
                        {/* Picture */}
                        <section className="d-flex justify-content-between align-items-center p-2 m-4">
                          <label className="w-25">Picture</label>
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
                            className="btn  btn-outline-warning
                            *
                             w-50 fw-bold mx-auto text-secondary"
                            onClick={handleClick}
                          >
                            Add
                          </button>
                          <br />
                          {/* UPDATE BUTTON
                          <button
                            id="updtBtn"
                            className="btn btn-success mx-auto  w-50 fw-bold text-warning d-none"
                          >
                            update
                          </button>
                          <h5 id="h5" className="d-none">
                            Please fill in the fields correctly
                          </h5> */}
                        </section>
                      </main>
                    );
}

export default StudAdd
