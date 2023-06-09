let attendanceTable = document.getElementById("attendance-table");
let rows = attendanceTable.getElementsByTagName("tr");

function calculateTotalMarks() {
    for (let i = 1; i < rows.length; i++) {
      let row = rows[i];
      let checkboxes = row.getElementsByClassName("attendance-checkbox");
      let dropdowns = row.getElementsByClassName("marks-dropdown");
      let totalMarks = 0;
  
      for (let j = 0; j < checkboxes.length; j++) {
        let checkbox = checkboxes[j];
        let dropdown = dropdowns[j];
  
        if (checkbox.checked) {
          totalMarks += parseInt(dropdown.value) + 1;
        }
      }
  
      row.getElementsByClassName("total-marks")[0].textContent = totalMarks;
    }
  }

for (let i = 0; i < rows.length; i++) {
  let checkboxes = rows[i].getElementsByClassName("attendance-checkbox");
  let dropdowns = rows[i].getElementsByClassName("marks-dropdown");

  for (let j = 0; j < checkboxes.length; j++) {
    checkboxes[j].addEventListener("change", calculateTotalMarks);
    dropdowns[j].addEventListener("change", calculateTotalMarks);
  }
}