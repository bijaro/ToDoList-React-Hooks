import React from "react";

function Student({ stud, deleteStud,editTask }) {
  const handleclick = () => {
    if (window.confirm("Are You Sure?")) deleteStud(stud.id);
  };
  const handleClickEdit = () => {
    editTask(stud.id,  stud.fName,stud.lName,stud.Note,stud.Image)

   
 }

  return (
    <>
      <tr>
        <td className="w-25">
          <img
            src={stud.Image}
            className="w3-circle  "
            style={{ width: "30%", height: "30%" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />
        </td>
        <td>{stud.fName}</td>
        <td>{stud.lName}</td>
        <td>{stud.Note}</td>
        <th scope="row">
          <button
            className="text-success  border-light"
            onClick={handleClickEdit}
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fas fa-edit" />
          </button>
          <button
            className="border-light"
            // data-bs-toggle="modal"
            // data-bs-target="#staticBackdrop"
            onClick={handleclick}
          >
            <i className="far fa-trash-alt text-danger"> </i>
          </button>
        </th>
      </tr>
    </>
  );
}

export default Student;
