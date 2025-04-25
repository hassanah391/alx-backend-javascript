interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Hassan',
  lastName: 'Ahmed',
  age: 24,
  location: 'Bani mazar, Minya, Egypt'
};

const student2: Student = {
  firstName: 'Medhat',
  lastName: 'Tarek',
  age: 23,
  location: 'Bani mazar, Minya, Egypt'
};

const studentsList: Student[] = [student1, student2];

// DOM manipulation
const body = document.body;
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Header row
const headerRow = thead.insertRow();
const header1 = headerRow.insertCell();
const header2 = headerRow.insertCell();
header1.innerText = "First Name";
header2.innerText = "Location";

// Data rows
studentsList.forEach((student) => {
  const row = tbody.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.innerText = student.firstName;
  cell2.innerText = student.location;
});

// Append elements
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
