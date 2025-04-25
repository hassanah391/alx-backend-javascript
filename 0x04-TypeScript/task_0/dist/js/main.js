var student1 = {
    firstName: 'Hassan',
    lastName: 'Ahmed',
    age: 24,
    location: 'Bani mazar, Minya, Egypt'
};
var student2 = {
    firstName: 'Medhat',
    lastName: 'Tarek',
    age: 23,
    location: 'Bani mazar, Minya, Egypt'
};
var studentsList = [student1, student2];
// DOM manipulation
var body = document.body;
var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
// Header row
var headerRow = thead.insertRow();
var header1 = headerRow.insertCell();
var header2 = headerRow.insertCell();
header1.innerText = "First Name";
header2.innerText = "Location";
// Data rows
studentsList.forEach(function (student) {
    var row = tbody.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    cell1.innerText = student.firstName;
    cell2.innerText = student.location;
});
// Append elements
table.appendChild(thead);
table.appendChild(tbody);
body.appendChild(table);
//# sourceMappingURL=main.js.map