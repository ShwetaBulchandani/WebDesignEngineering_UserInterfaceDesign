

function Title(t1) 
{ 
  this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
  return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

const table = document.getElementById("myTable");


const checkRows = table.getElementsByTagName("input");

hideOnStart();

function hideOnStart(){
  var count=0;
  let submitBtn = document.getElementById("button");
  for(var i = 0; i < checkRows.length; i++){
    var row = checkRows[i].parentNode.parentNode;
    
    if(!checkRows[i].checked){
      count++;
      row.querySelectorAll("td")[8].classList.add("columnHide");
      row.querySelectorAll("td")[9].classList.add("columnHide");
    }
  }
    console.log("hide on start", checkRows.length, count);
    if(checkRows.length === count){

    submitBtn.style.backgroundColor = "gray";
    submitBtn.style.border = "";
    submitBtn.style.cursor = "initial";
    submitBtn.disabled = true;
      document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
      document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
    }
  
}


selectRow();

let boolean = true; 

let mainRetoric = true; 

function rowOne(r) {
    const i = r.parentNode.parentNode.rowIndex;
    const row = r.parentNode.parentNode;
    const descRow = row.nextSibling; 
    if (mainRetoric) {
      descRow.style.display = "table-cell";
      mainRetoric = false;
    } else {          
      descRow.style.display = "none";
      mainRetoric = true;
    }
}


function rowTwo(r) {  
  const row = r.parentNode.parentNode;
  const descRow = row.nextElementSibling; 
  if (boolean) {
    descRow.style.display = "table-row";
    boolean = false;
  } else {          
    descRow.style.display = "none";
    boolean = true;
  }
}

function deleteRow(r) {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
  document.getElementById("myTable").deleteRow(i);
  alert(`Row Deleted!`);
  // countBoxPresent--;
  hideOnStart();
  selectRow();
}

function editRow(r) {
  prompt("Edit the details.", "");
  selectRow();
}

function addRow() {
  const row = table.insertRow(table.rows.length);

  const rowCount = table.rows.length;
  const checkboxNew = row.insertCell(0);
  const student = row.insertCell(1);
  const advisor = row.insertCell(2);
  const awardStatus = row.insertCell(3);
  const semester = row.insertCell(4);
  const type = row.insertCell(5);
  const budget = row.insertCell(6);
  const percentage = row.insertCell(7);
  const deleteBtn = row.insertCell(8);
  const editBtn = row.insertCell(9);

  checkboxNew.innerHTML = `<td><input type="checkbox" /><br /><br /><img onClick="rowTwo(this)" src="down.png" width="25px" /></td>`;

  student.innerHTML = `Student ${Math.ceil(rowCount/ 2)}`;
  advisor.innerHTML = `Teacher ${Math.ceil(rowCount/ 2)}`;
  awardStatus.innerHTML = "Approved";
  semester.innerHTML = "Fall";
  type.innerHTML = " TA ";
  budget.innerHTML = Math.ceil(Math.random() * 100000);
  percentage.innerHTML = "100%";

  try {
    setTimeout(() => {alert(`Next Student Added ${Math.ceil(rowCount/ 2)}`)}, 100);
  } catch (error) {
    alert("Something went wrong!");
  }
  
  selectRow();

  nextRowAddition();
  hideOnStart();
}



function nextRowAddition() {
  const row = table.insertRow(table.rows.length);

  row.classList.add("dropDownTextArea")
  
  row.innerHTML = 
      '<td colspan="10"> \
        Advisor:<br /><br /> \
        Award Details<br /> \
        Summer 1-2014(TA)<br /> \
        Budget Number: <br /> \
        Tuition Number: <br /> \
        Comments:<br /><br /><br /> \
        Award Status:<br /><br /><br /> \
      </td>';

  selectRow();
}

var rowname;

function selectRow() {

let countBoxPresent = 0;

  for (let i=0; i<checkRows.length; i++) {
      const row = checkRows[i].parentNode.parentNode;
      let submitBtn = document.getElementById("button")
      rowname=checkRows;
      
      checkRows[i].addEventListener("click", () => {
        if (checkRows[i].checked) {
          countBoxPresent++;
          console.log("select rows if", countBoxPresent)
          row.style.backgroundColor = "yellow";
          row.lastElementChild.innerHTML = "<td><button onClick='editRow(this)'>Edit Row</button></td>";
          row.lastElementChild.previousElementSibling.innerHTML = "<td><button onClick='deleteRow(this)'>Delete Row</button></td>";
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.remove("columnHide");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.remove("columnHide");
          row.querySelectorAll("td")[8].classList.remove("columnHide");
          row.querySelectorAll("td")[9].classList.remove("columnHide");
          submitBtn.style.backgroundColor = "orange";
          submitBtn.style.border = "2px solid orange";
          submitBtn.style.cursor = "pointer";
          submitBtn.disabled = false;
        } else {
          countBoxPresent--;
          console.log("cselect rows else", countBoxPresent);
          row.style.backgroundColor = "white";
          row.lastElementChild.innerHTML = "";
          row.lastElementChild.previousElementSibling.innerHTML = "";
          console.log("event listener gray");
         

          if (countBoxPresent == 0){
          document.querySelectorAll("tr")[0].querySelectorAll("th")[8].classList.add("columnHide");
          document.querySelectorAll("tr")[0].querySelectorAll("th")[9].classList.add("columnHide");
          submitBtn.style.backgroundColor = "gray";
          submitBtn.style.border = "";
          submitBtn.style.cursor = "initial";
          submitBtn.disabled = true;}
          else{
            submitBtn.style.backgroundColor = "orange";
            submitBtn.style.border = "2px solid orange";
            submitBtn.style.cursor = "pointer";
            submitBtn.disabled = false;
          }

          row.querySelectorAll("td")[8].classList.add("columnHide");
          row.querySelectorAll("td")[9].classList.add("columnHide");
        }
      })
  }
}
                               