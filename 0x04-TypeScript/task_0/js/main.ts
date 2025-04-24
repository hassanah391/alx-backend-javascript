interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
};

const student1: Student = {
  firstName: 'Hassan',
  lastName: 'Ahmed',
  age: 24,
  location: 'Bani mazar, Minya, Egypt'
}
const student2: Student = {
  firstName: 'Medhat',
  lastName: 'Tarek',
  age: 23,
  location: 'Bani mazar, Minya, Egypt'
}

const studentsList: Array<Student> = [student1, student2];

// Create the table
const table: HTMLTableElement = document.createElement("table");
table.border = "1";

// Create table header (optional)
const headerRow: HTMLTableRowElement = table.insertRow();
const header1: HTMLTableCellElement = headerRow.insertCell();
header1.innerText = "First Name";
const header2: HTMLTableCellElement = headerRow.insertCell();
header2.innerText = "Location";

// Loop through students and add rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const nameCell: HTMLTableCellElement = row.insertCell();
  nameCell.innerText = student.firstName;

  const locationCell: HTMLTableCellElement = row.insertCell();
  locationCell.innerText = student.location;
});

// Append the table to the body
document.body.appendChild(table);