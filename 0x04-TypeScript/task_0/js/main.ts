/**
 * @interface Student
 * @property {string} firstName
 * @property {string} lastName
 * @property {number} age
 * @property {string} location
 */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mohamed',
  lastName: 'Elfadil',
  age: 29,
  location: 'Sudan',
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Jane',
  age: 25,
  location: 'California',
};

const studentsList: Array<Student> = [student1, student2];
const headers = ['firstName', 'location'];

const table = document.createElement('table');

const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const headerRow = document.createElement('tr');

// Create table headers
headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});

// Append headers to the table
thead.appendChild(headerRow);
table.appendChild(thead);

// Create table rows
studentsList.forEach((student: Student) => {
  const tr = document.createElement('tr');
  const tdFName = document.createElement('td');
  tdFName.textContent = student.firstName;
  const tdLocation = document.createElement('td');
  tdLocation.textContent = student.location;

  [tdFName, tdLocation].forEach(td => {
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});

// Append rows to the table
table.appendChild(thead);
table.appendChild(tbody);

// Append the table to the body
document.body.appendChild(table);

