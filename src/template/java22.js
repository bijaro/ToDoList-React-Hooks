

//students number
var nEtudiant = 0
//update element
var updateElement

//function numbers onclick To vAlidate

function numberS()
{
//get the student Number Value
   var numL = document.getElementById("stud")
   var numS = numL.value
   nEtudiant = numS

   if (Number(numS) <= 0 || numS == "" || isNaN(Number(numS))) {
      var p = document.getElementById("p")
      p.classList.remove("d-none")
      p.classList.add("d-block")
   }
   else {
      //get the div of student list
      var stud = document.getElementById("list")
      //get the list of container of form
      var container = document.getElementById("cont")
      //make list display none and container display block
      stud.classList.add("d-none")
      container.classList.remove("d-none")

      container.classList.add("d-block")
//get the element of STUDENT NUMBER IN TABLE AND GIVE HIM THE numS value
      var etud = document.getElementById("numE")

      etud.innerHTML = numL.value

   }

}

// ------function Add-----

//moyenne genral depart value
var moyenne = 0





function add()
{
//get the table children and compare it with number of etudiant if its greater you cant add anymore children(student) 
   var idTab = document.getElementById("tab")
   console.log(idTab.children.length);
   if (idTab.children.length + 1 > nEtudiant) {
      alert("Sorry you can't add anymore student")
      return
   }

   // get the image value
   var imSt = document.getElementById("im")
   // console.log(imSt);
   var imSV = imSt.value
   // console.log(imSt.value);

   //get the fName student value
   var fNV = document.getElementById("fNV")
   var fNameV = fNV.value
   //   console.log(fNVV);
   //last name
   var dNV = document.getElementById("dNV")
   var lNameV = dNV.value
   //   console.log(dNVV);
   // get the note value 
   var nSV = document.getElementById("nSV")
   var noteStdV = Number(nSV.value)
   // get the student number h6 and give nEtudiant value
   var etud = document.getElementById("numE")
   numR = etud.textContent
// creat etd object
   var etd = { fNameV, lNameV, noteStdV }


   // to secur the table we compare if the user respect all cases

   if (fNameV.length == "" || lNameV.length == "" || isNaN(noteStdV) || noteStdV < 0 || noteStdV > 20 || noteStdV == "" || imSV == "") {
      var h5 = document.getElementById("h5")
      h5.classList.remove("d-none")
      h5.classList.add("d-block")
      

   }
   else {
      //in case of the user want to rectify the error message d-none
      var h5 = document.getElementById("h5")
      h5.classList.remove("d-block")
      h5.classList.add("d-none")
      // creat liTab with the the values of fName lName Note and image
      var liTab = `<tr id="etu" >

      <td class="w-25"> <img   id="im" src="${imSV} " class="w3-circle  " style="width:30% height:30%"alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal"> </td>
       
      <td>${fNameV}</td>
      <td>${lNameV}</td>
      <td>${noteStdV}</td>
       <th scope="row"><button onclick="modif(this)" class="text-success  border-light"><i class="fas fa-edit"></button></i> <button onclick="del(this)" class="border-light"><i class="far fa-trash-alt text-danger"> </i> </button></i></th>
    </tr>
     `

//add the liTab in the table 
      var tabBody = document.getElementById("tab")
      tabBody.innerHTML += liTab
      var etd = { fNameV, lNameV, noteStdV }

//table have etd object (optional)
      
      
         moyenne += etd.noteStdV / numR
      
      //creat student table 
      var admis = []
      var nnadmis = []
//calculate the General average
      if (etd.noteStdV >= 10) {
         admis.push(etd.fNameV)
         console.log(admis)
         var reussi = document.getElementById("ad"
         )
         reussi.innerHTML += admis[0] + "<br>"
      }
      else {
         nnadmis.push(etd.fNameV)
         var nnreussi = document.getElementById("nnAd")
      nnreussi.innerHTML += nnadmis[0] + "<br>"}
      console.log(nnadmis)
     
      // console.log(moyenne);

     
   

//emty the fName lName Note and Image value

      fNV.value = ""
      dNV.value = ""
      nSV.value = ""
      imSt.value = ""
// add the value of general average in the table

      var moy = document.getElementById("gen")
      moy.innerHTML = moyenne
   }

}

//-----------  function delete

function del(x) {
   // if the user confirm delete the icon.parentElement.parentElement
   var conf = confirm("You want to delete the student from the list ?")
   if (conf) { x.parentElement.parentElement.remove() }
}

// --------------modif function Edit button
function modif(x) {

   
   updateElement = x
   //get the image fname lname note content 
   imglEdit = x.parentElement.parentElement.children[0].src
   fnameEdit = x.parentElement.parentElement.children[1].textContent
   lnlEdit = x.parentElement.parentElement.children[2].textContent
   noteEdit = x.parentElement.parentElement.children[3].textContent
//get the image fname lname note .value and give it image fname lname note content
   document.getElementById("im").value = imglEdit
   document.getElementById("fNV").value = fnameEdit
   document.getElementById("dNV").value = lnlEdit
   document.getElementById("nSV").value = noteEdit
//change button add with update button 
   addbtn = document.getElementById("addBtn")
   addbtn.classList.remove("d-block")
   addbtn.classList.add("d-none") 

   upbtn = document.getElementById("updtBtn")
   upbtn.classList.remove("d-none")
   upbtn.classList.add("d-block") 

}

function updateEdt() {

  upfname= document.getElementById("fNV").value
  uplname= document.getElementById("dNV").value
  upnote = document.getElementById("nSV").value
   upimage = document.getElementById("im").value

   updateElement.parentElement.parentElement.children[0].src = upimage
   updateElement.parentElement.parentElement.children[1].textContent = upfname
   updateElement.parentElement.parentElement.children[2].textContent = uplname

   updateElement.parentElement.parentElement.children[3].textContent = upnote

   addbtn = document.getElementById("addBtn")
   addbtn.classList.remove("d-none")
   addbtn.classList.add("d-block")

   upbtn = document.getElementById("updtBtn")
   upbtn.classList.remove("d-block")
   upbtn.classList.add("d-none")

   document.getElementById("fNV").value = ""
    document.getElementById("fNV").value=""
   document.getElementById("dNV").value=""
    document.getElementById("nSV").value=""
   document.getElementById("im").value=""
   
   
}

//------------function delete
function sup(x) {
   var confr = confirm("You want to delete the student from the list ?")
   if (confr) {

      x.parentElement.remove()
   }
}
//------------function delete
// -----------function search 
function search(searchVal) {
   // user input value
   var searchInp = searchVal.value
   console.log(searchInp);
   // studetns list
   var studC = document.getElementsByTagName("tr")
      ;


   for (var i = 0; i < studC.length; i++) {  //student element
      var studE = studC[i]

      // console.log(student)
      if (studE.textContent.includes(searchInp) == true) {
         studE.classList.remove("d-none")
         studE.classList.add("d-flex")
         studE.classList.add("justify-content-around")

      }



      else {
         studE.classList.add("d-none")
         studE.classList.remove("d-block")
      }
   }

}
function picture(x) 
    {


      //get the image fname lname note content 
      imglEdit = x.parentElement.parentElement.children[0].src
      fnameEdit = x.parentElement.parentElement.children[1].textContent
      lnlEdit = x.parentElement.parentElement.children[2].textContent
      noteEdit = x.parentElement.parentElement.children[3].textContent
      photo= document.getElementById("photo")
      first = document.getElementById("first")
      seconde = document.getElementById("second")
      note = document.getElementById("note")

      photo.innerHTML = imglEdit
      first.innerHTML = fnameEdit
      seconde.innerHTML = lnlEdit
      note.innerHTML = noteEdit




}
// ------------function search end----------------------------------------------


//--------------------------------------END-------------------------------------

   // imginp = document.getElementById("im").value
   // finp = document.getElementById("fNV").value
   // linp = document.getElementById("dNV").value
   // noteinp = document.getElementById("nSV").value

   // updateElement.parentElement.parentElement.children[0].src = imginp
   // updateElement.parentElement.parentElement.children[1].textContent = finp
   // updateElement.parentElement.parentElement.children[2].textContent = linp
   // updateElement.parentElement.parentElement.children[3].textContent = noteinp

   // addbtn = document.getElementById("addBtn")
   // addbtn.classList.remove("d-none")
   // addbtn.classList.add("d-block")


   // upbtn = document.getElementById("updtBtn")
   // addbtn.classList.remove("d-block")
   // upbtn.classList.add("d-none")




//function add 2
// // function add2(x) {
// //    //image
// //    var imSt = document.getElementById("im")
// //    // console.log(imSt);
// //    var imSV = imSt.value
// //    // console.log(imSt.value);
// //    //fName 

// //    var fNV = document.getElementById("fNV")
// //    var fNameV = fNV.value
// //    //   console.log(fNVV);
// //    //last name
// //    var dNV = document.getElementById("dNV")
// //    var lNameV = dNV.value
// //    //   console.log(dNVV);
// //    //note
// //    var nSV = document.getElementById("nSV")
// //    var noteStdV = Number(nSV.value)





//    //   console.log(nSVV);


//    if (fNameV.length == "" || lNameV.length == "" || isNaN(noteStdV) || noteStdV < 0 || noteStdV > 20 || noteStdV == "" || imSV == "") {
//       var h = document.getElementById("hh")
//       h.classList.remove("d-none")
//       h.classList.add("d-block")
//       // document.getElementById("fNV").addEventListener("focus", modifier());
//       // document.getElementById("dNV").addEventListener("focus", modifier())
//       // document.getElementById("nSV").addEventListener("focus", modifier())
//       // document.getElementById("im").addEventListener("focus", modifier())
//       // function modifier() {
//       //    h5.classList.remove("d-block")
//       //    h5.classList.add("d-none")
//       // }

//    }
//    else {
//       var h = document.getElementById("hh")
//       h.classList.remove("d-block")
//       h.classList.add("d-none")
//       var liTab = `<tr id="etu" >

//                         <td class="w-25"> <img id="im" src="${imSV} " class="w3-circle  " style="width:30%"alt=""> </td>
       
//       <td>${fNameV}</td>
//       <td>${lNameV}</td>
//       <td>${noteStdV}</td>
//        <th scope="row"><button onclick="modif(this)" class="text-success  border-light"><i class="fas fa-edit"></button></i> <button onclick="del(this)" class="border-light"><i class="far fa-trash-alt text-danger"> </i> </button></i></th>
       
//     </tr>`


//       // var tabBody = document.getElementById("tab")
//       x.parentElement.innerHTML = liTab
//       var etd = { fNameV, lNameV, noteStdV }





      // student = etd
      // // console.log(student[i]);

      // moyenne += student.noteStdV / numR
      // console.log(moyenne)
//    }
//    //image
//    var imSt = document.getElementById("im")
//    // console.log(imSt);
//    var imSV = imSt.value
//    // console.log(imSt.value);
//    //fName 

//    var fNV = document.getElementById("fNV")
//    var fNameV = fNV.value
//    //   console.log(fNVV);
//    //last name
//    var dNV = document.getElementById("dNV")
//    var lNameV = dNV.value
//    //   console.log(dNVV);
//    //note
//    var nSV = document.getElementById("nSV")
//    var noteStdV = Number(nSV.value)
//    var etud = document.getElementById("numE")
//    numR = etud.textContent

//    var etd = { fNameV, lNameV, noteStdV }


//    //   console.log(nSVV);


//    if (fNameV.length == "" || lNameV.length == "" || isNaN(noteStdV) || noteStdV < 0 || noteStdV > 20 || noteStdV == "" || imSV == "") {
//       var h5 = document.getElementById("h5")
//       h5.classList.remove("d-none")
//       h5.classList.add("d-block")
//       // document.getElementById("fNV").addEventListener("focus", modifier());
//       // document.getElementById("dNV").addEventListener("focus", modifier())
//       // document.getElementById("nSV").addEventListener("focus", modifier())
//       // document.getElementById("im").addEventListener("focus", modifier())
//       // function modifier() {
//       //    h5.classList.remove("d-block")
//       //    h5.classList.add("d-none")
//       // }

//    }
//    else {
//       var h5 = document.getElementById("h5")
//       h5.classList.remove("d-block")
//       h5.classList.add("d-none")
//       var liTab = `<tr id="etu" >

//                         <td class="w-25"> <img id="im" src="${imSV} " class="w3-circle  " style="width:30%"alt=""> </td>
       
//       <td>${fNameV}</td>
//       <td>${lNameV}</td>
//       <td>${noteStdV}</td>
//        <th scope="row"><button onclick="modif(this)" class="text-success  border-light"><i class="fas fa-edit"></button></i> <button onclick="del(this)" class="border-light"><i class="far fa-trash-alt text-danger"> </i> </button></i></th>
//     </tr>`


//       var tabBody = document.getElementById("tab")
//       tabBody.innerHTML += liTab
//       var etd = { fNameV, lNameV, noteStdV }





//       student = etd
//       // console.log(student[i]);

//       moyenne += student.noteStdV / numR
//       console.log(moyenne);
//    }
// }

