const employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
];

function PrintDeveloperbyMap() {
    // Using map to filter and log developers
    employees.map(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// Using forEach to filter and log developers
function PrintDeveloperbyForEach() {
    employees.forEach(employee => {
        if (employee.profession === "developer") {
            console.log(employee);
        }
    });
}

// Create a new employee object
function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
}

// Remove the object where profession is admin
function removeAdmin() {
    const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
    console.log(updatedEmployees);
}

// Create another array with 3 different employee objects
function ConcatinateArray() {
    const newEmployees = [
        { id: 4, name: "susan", age: "20", profession: "intern" },
        { id: 5, name: "mike", age: "22", profession: "designer" },
        { id: 6, name: "lisa", age: "25", profession: "manager" }
    ];
    const allEmployees = employees.concat(newEmployees);
    console.log(allEmployees);
}

PrintDeveloperbyMap();
PrintDeveloperbyForEach();
addData();
removeAdmin();
ConcatinateArray();