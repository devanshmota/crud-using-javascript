window.onload = function() {
  let storedFirstName = localStorage.getItem('firstName');
  let storedLastName = localStorage.getItem('lastName');

  if (storedFirstName && storedLastName) {
    let table = document.getElementById('data_table');
    let newRow = table.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = storedFirstName;
    cell2.innerHTML = storedLastName;

    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.onclick = function () {
      editRow(newRow);
    };

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';

    deleteButton.onclick = function () {
      deleteRow(newRow);
    };

    cell3.appendChild(editButton);
    cell3.appendChild(deleteButton);
  }
 }

function submit(){
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;


    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    let table = document.getElementById('data_table')
    let newRow = table.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = localStorage.getItem('firstName');
    cell2.innerHTML = localStorage.getItem('lastName');

    let editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.onclick = function() {
      editRow(newRow);
    };

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';

    deleteButton.onclick = function() {
      deleteRow(newRow);
    };

    cell3.appendChild(editButton);
    cell3.appendChild(deleteButton);

    document.getElementById('first_name').value = ''
    document.getElementById('last_name').value = ''
}

function editRow(row) {
   
    document.getElementById('first_name').value = row.cells[0].innerHTML;
    document.getElementById('last_name').value = row.cells[1].innerHTML;

    row.parentNode.removeChild(row);
  }

  function deleteRow(row) {
    row.parentNode.removeChild(row);
  }