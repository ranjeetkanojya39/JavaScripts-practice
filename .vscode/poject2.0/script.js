const tasks = [];

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const form = document.querySelector("#noteForm");

// Image URL Input
const imageUrlInput = form.querySelector(
  "input[placeholder='https://example.com/photo.jpg']"
);

// Preview Image
const previewImg = form.querySelector("#previewImg");

// Full Name Input
const fullNameInput = form.querySelector(
  "input[placeholder='Enter full name']"
);

// Home Town Input
const homeTownInput = form.querySelector(
  "input[placeholder='Enter home town']"
);

// Purpose Input
const purposeInput = form.querySelector(
  "input[placeholder='e.g., Quick appointment note']"
);

// All Category Radio Buttons
const categoryRadios = form.querySelectorAll(
  "input[name='category']"
);

// Submit Button
const submitBtn = form.querySelector(".submit-btn");

function saveToLocalStorage(obj) {
if (localStorage.getItem("tasks") === null){
  let oldTasks = [];
  oldTasks.push(obj);
  localStorage.setItem("tasks", JSON.stringify(oldTasks));
} else {
  let oldTasks = localStorage.getItem("tasks");
  oldTasks = JSON.parse(oldTasks);
  oldTasks.push(obj);
  localStorage.setItem("tasks" , JSON.stringify(oldTasks));
}
}
// OPEN FORM
addNote.addEventListener("click", function () {
  formContainer.style.display = "initial";
});

// CLOSE FORM
closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
});

// FORM SUBMIT
form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  // GET VALUES
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  // GET SELECTED CATEGORY
  let selected = false;

  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  // VALIDATION
  if (imageUrl === "") {
    alert("Please enter image URL");
    return;
  }

  if (fullName === "") {
    alert("Please enter full name");
    return;
  }

  if (homeTown === "") {
    alert("Please enter home town");
    return;
  }

  if (purpose === "") {
    alert("Please enter purpose");
    return;
  }

  if (!selected) {
    alert("Please select a category");
    return;
  }

  // OBJECT
saveToLocalStorage({
    imageUrl,
    fullName,
    purpose,
    homeTown,
    selected,
  });

  form.reset();
  formContainer.style.display = "none";
 
});

function addCards(){
  

}