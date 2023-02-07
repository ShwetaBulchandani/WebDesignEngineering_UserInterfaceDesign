var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

const titles = document.querySelectorAll('input[name="title"]');
const source = document.querySelectorAll('input[name="source"]');
var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validAdd1 = false;
var validCity = false;
var validState = false;
var validZip = false;
var validationBool = false;
var validTitle = false;
var validationSource = false;

//regex
var regExName = /^[a-zA-Z]+$/;
var regExEmail = /[a-z0-9]+@northeastern.edu/;
var regExPhone = /\d{3}-?\d{3}-\d{4}$/;
var regExZip = /^\d{5}(-\d{4})?$/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var streetAddress1 = document.getElementById("streetAddress1");
streetAddress1.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

//validate function
function validate(e) {
  var value = e.target.value;
  var type = this.id;
  var em = "error_" + type;
  var ems = "errors_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validFirstName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validFirstName = true;
      }
      break;

    case "lastName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validLastName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validLastName = true;
      }
      break;

    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;

    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;

    case "streetAddress1":
      if (value.trim().length == 0) {
        document.getElementById(ems).style.display = "block";
        this.style.border = "2px solid red";
        validAdd1 = false;
      } else {
        document.getElementById(ems).style.display = "none";
        this.style.border = "";
        validAdd1 = true;
      }
      break;

    case "city":
      if (value.trim().length == 0) {
        document.getElementById(ems).style.display = "block";
        this.style.border = "2px solid red";
        validCity = false;
      } else {
        document.getElementById(ems).style.display = "none";
        this.style.border = "";
        validCity = true;
      }
      break;

    case "state":
      if (value.trim().length == 0) {
        document.getElementById(ems).style.display = "block";
        this.style.border = "2px solid red";
        validState = false;
      } else {
        document.getElementById(ems).style.display = "none";
        this.style.border = "";
        validState = true;
      }
      break;

    case "zipcode":
      if (!value.trim().match(regExZip)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validZip = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validZip = true;
      }
      break;
  }
}

//onChange function
const myDrinkList = document.getElementById("myDrinkList");
const additionalCustom = document.getElementById("additionalCustom");
const dynamicCB = document.getElementById("dynamicCB");
const customisation = document.getElementById("customisation");

dynamicCB.style.display = "none";
additionalCustom.style.display = "none";

dynamicCB.innerHTML = "";

myDrinkList.onchange = (e) => {
  if (e.target.value == "Hot Black Tea") {
    dynamicCB.style.display = "block";
    additionalCustom.style.display = "none";

    document.getElementById("dynamicCB").innerHTML = `<br>
        <label for="hear">Hot Black Tea - Large <br> ($1 extra):</label>
		<input type='checkbox' id="checkbox1" name="source" value="Hot Black Tea" />
        <br><br>
        `;
    validationBool = true;
    const messageCB1 = document.getElementById("checkbox1");

    messageCB1.addEventListener("click", () => {
      if (messageCB1.checked) {
        additionalCustom.style.display = "block";
        if (customisation.value.length == 0) {
          validationBool = false;
        } else {
          validationBool = true;
        }
      } else {
        additionalCustom.style.display = "none";
        validationBool = true;
      }
    });
  } else if (e.target.value == "Cold Coffee") {
    dynamicCB.style.display = "block";
    additionalCustom.style.display = "none";

    document.getElementById("dynamicCB").innerHTML = `<br>
        <label for="hear">Cold Coffee - Large <br> ($1 extra):</label>
		<input type='checkbox' id="checkbox2" name="source" value="Cold Coffee" />
        <br><br>
        `;

    const messageCB2 = document.getElementById("checkbox2");

    validationBool = true;
    messageCB2.addEventListener("click", () => {
      if (messageCB2.checked) {
        additionalCustom.style.display = "block";
        if (customisation.value.length == 0) {
          validationBool = false;
        } else {
          validationBool = true;
        }
      } else {
        additionalCustom.style.display = "none";
        validationBool = true;
      }
    });
  } else if (e.target.value == "Lemon Iced Tea") {
    dynamicCB.style.display = "block";
    additionalCustom.style.display = "none";

    document.getElementById("dynamicCB").innerHTML = `<br>
        <label for="hear">Lemon Iced Tea - Large <br> ($1 extra):</label>
		<input type='checkbox' id="checkbox3" name="source" value="Lemon Iced Tea" />
        <br><br>
        `;

    const messageCB3 = document.getElementById("checkbox3");

    validationBool = true;
    messageCB3.addEventListener("click", () => {
      if (messageCB3.checked) {
        additionalCustom.style.display = "block";
        if (customisation.value.length == 0) {
          validationBool = false;
        } else {
          validationBool = true;
        }
      } else {
        additionalCustom.style.display = "none";
        validationBool = true;
      }
    });
  } else if (e.target.value == "Espresso") {
    dynamicCB.style.display = "block";
    additionalCustom.style.display = "none";

    document.getElementById("dynamicCB").innerHTML = `<br>
        <label for="hear">Espresso - Large <br> ($1 extra):</label>
		<input type='checkbox' id="checkbox4" name="source" value="Espresso" />
        <br><br>
        `;

    const messageCB4 = document.getElementById("checkbox4");

    validationBool = true;
    messageCB4.addEventListener("click", () => {
      if (messageCB4.checked) {
        additionalCustom.style.display = "block";
        if (customisation.value.length == 0) {
          validationBool = false;
        } else {
          validationBool = true;
        }
      } else {
        additionalCustom.style.display = "none";
        validationBool = true;
      }
    });
  } else if (e.target.value == "Latte") {
    dynamicCB.style.display = "block";
    additionalCustom.style.display = "none";

    document.getElementById("dynamicCB").innerHTML = `<br>
        <label for="hear">Latte - Large <br> ($1 extra):</label>
		<input type='checkbox' id="checkbox5" name="source" value="Latte" />
        <br><br>
        `;

    const messageCB5 = document.getElementById("checkbox5");

    validationBool = true;
    messageCB5.addEventListener("click", () => {
      if (messageCB5.checked) {
        additionalCustom.style.display = "block";
        if (customisation.value.length == 0) {
          validationBool = false;
        } else {
          validationBool = true;
        }
      } else {
        additionalCustom.style.display = "none";
        validationBool = true;
      }
    });
  } else {
    dynamicCB.style.display = "none";
    additionalCustom.style.display = "none";
    validationBool = false;

    dynamicCB.innerHTML = "";
  }
};

function submitted(e) {
  e.preventDefault();

  let title;
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].checked) {
      validTitle = true;
      title = titles[i].value;
    }
  }
  let sources = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i].checked) {
      validationSource = true;
      sources[i] = " "+source[i].value;
    }
  }

  if (customisation.value.length != 0 && validationBool == false) {
    validationBool = true;
  }

  if (
    validationBool &&
    validTitle &&
    validationSource &&
    firstName.value != "" &&
    validFirstName &&
    lastName.value != "" &&
    validLastName &&
    emailId.value != "" &&
    validEmail &&
    phoneNumber.value != "" &&
    validPhone &&
    streetAddress1.value != "" &&
    validAdd1 &&
    city.value != "" &&
    validCity &&
    state.value != "" &&
    validState &&
    zipcode.value != "" &&
    validZip &&
    comments.value != ""
  ) {
    tableData.innerHTML += `
    <tr>
        <td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${
      document.getElementById("firstName").value
    } </td>
        <td>${document.getElementById("lastName").value}</td>
        <td>${document.getElementById("emailId").value}</td>
        <td>${document.getElementById("phoneNumber").value}</td>
        <td>${document.getElementById("streetAddress1").value}</td>
        <td>${document.getElementById("streetAddress2").value}</td>
        <td>${document.getElementById("city").value}</td>
        <td>${document.getElementById("state").value}</td>
        <td>${document.getElementById("zipcode").value}</td>
        <td>${sources.join().replace(/,/g," ")}</td>
        <td>${document.getElementById("myDrinkList").value}</td>
        <td>${document.getElementById("customisation").value}</td>
        <td>${document.getElementById("comments").value}</td>
    </tr>
    `;

    alert("Order added successfully!");
    validationBool = false;
    validationSource = false;
    validTitle = false;
    form.reset();
    dynamicCB.style.display = "none";
    additionalCustom.style.display = "none";

    dynamicCB.innerHTML = "";
  } else {
    alert("Form incomplete / Invalid Details");
  }
}

document.getElementById("Reset").addEventListener("click", () => {
  form.reset();
  validationBool = false;
  validTitle = false;
  validationSource = false;

  dynamicCB.style.display = "none";
  additionalCustom.style.display = "none";

  dynamicCB.innerHTML = "";
});
 