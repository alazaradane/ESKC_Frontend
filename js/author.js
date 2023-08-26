$('#menu-btn').click(function(){
    $('#menu').toggleClass("active");
})

const toggleButton = document.getElementById("toggle");
            toggleButton.addEventListener("click", toggle);
function toggle() {
    const box = document.getElementById("courseAdd");
             box.classList.toggle("hidden");
        }

        let profilePic = document.getElementById('profile-pic');
        let inputFile = document.getElementById('input-file');
        inputFile.onchange = function(){
            profilePic.src = URL.createObjectURL(inputFile.files[0])
        }

/*Course Section */

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["courseId"] = document.getElementById("courseId").value;
    formData["courseTitle"] = document.getElementById("courseTitle").value;
    formData["courseName"] = document.getElementById("courseName").value;
    formData["detail"] = document.getElementById("detail").value;
    formData['myfile']= document.getElementById('myfile').value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("courseList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.courseId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.courseName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.courseTitle;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.detail;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.myfile;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("courseId").value = "";
    document.getElementById("courseTitle").value = "";
    document.getElementById("CourseName").value = "";
    document.getElementById("detail").value = "";
    document.getElementById('myfile').value="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("courseId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("courseTitle").value = selectedRow.cells[1].innerHTML;
    document.getElementById("courseName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("detail").value = selectedRow.cells[3].innerHTML;
    document.getElementById('myfile').value=selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.courseId;
    selectedRow.cells[1].innerHTML = formData.courseTitle;
    selectedRow.cells[2].innerHTML = formData.courseName;
    selectedRow.cells[3].innerHTML = formData.detail;
    selectedRow.cells[4].innerHTML = formData.myfile;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("courseList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("courseId").value == "") {
        isValid = false;
        document.getElementById("courseIdValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("courseIdValidationError").classList.contains("hide"))
            document.getElementById("courseIdValidationError").classList.add("hide");
    }
    return isValid;
}