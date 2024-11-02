const employeeForm = document.getElementById('employeeForm');
const employeeTable = document.getElementById('employeeTable').querySelector('tbody');

let employees = [];

function addEmployee(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const middleName = document.getElementById('middleName').value;
    const bornDate = document.getElementById('bornDate').value;
    const area = document.getElementById('area').value;

    const newEmployee = {
        name,
        lastName,
        middleName,
        bornDate,
        area
    };

    employees.push(newEmployee);

    renderEmployeeTable();

    employeeForm.reset();
}

function renderEmployeeTable() {
   
    employeeTable.innerHTML = '';

    employees.forEach((employee, index) => {
        
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.lastName}</td>
            <td>${employee.middleName}</td>
            <td>${employee.bornDate}</td>
            <td>${employee.area}</td>
            <td>
                <button onclick="deleteEmployee(${index})">Eliminar</button>
            </td>
        `;

        employeeTable.appendChild(row);
    });
}

function deleteEmployee(index) {
    employees.splice(index, 1); 
    renderEmployeeTable(); 
}

employeeForm.addEventListener('submit', addEmployee);
