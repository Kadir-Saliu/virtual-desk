let allInputs = [
  { id: "file1", label: "Datei 1" },
  { id: "file2", label: "Datei 2" },
  { id: "folder1", label: "Ordner 1" },
  { id: "note1", label: "Notiz A" },
  { id: "note2", label: "Notiz B" },
];

function init() {
    renderInput();
}

function renderInput() {
  let input = document.getElementById("desk");
  input.innerHTML = "";
  for (let index = 0; index < allInputs.length; index++) {
    input.innerHTML += getRenderInputTemplate(index);
  }
}

function getRenderInputTemplate(index) {
  return `<div class="icon" draggable="true" id="${allInputs[index].id}">${allInputs[index].label}</div>` ;
}

function dragoverHandler(ev) {
  ev.preventDefault();
}
