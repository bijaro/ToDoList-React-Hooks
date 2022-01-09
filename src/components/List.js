import React from "react";

function List() {
  return (
    <>
      <tr>
        <td class="w-25">
          <img
            id="im"
            src="${imSV} "
            className="w3-circle  "
            style={{ width: "30% height:30%" }}
            alt
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />{" "}
        </td>
        <td>hh</td>
        <td>hh</td>
        <td>nghgh</td>
         <th scope="row"> <button onclick="modif(this)" className="text-success  border-light">
          <i className="fas fa-edit" />
        </button>
        <button onclick="del(this)" className="border-light">
          <i className="far fa-trash-alt text-danger"> </i>
                                                              </button> </th>
                                                              
      </tr>
    </>
  );
}

export default List;
