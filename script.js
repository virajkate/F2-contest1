/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((val)=>{
    if(val.profession=="developer")
    console.log(val)
    })
  }

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((val)=>{
    if(val.profession=="developer")
    console.log(val)
    })
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {id: 4, name: "Susan", age: "20", profession: "intern"};
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((val)=>{
    if(val.profession=="admin")
    arr.pop()
    })
    console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    { id: 4, name: "Mike", age: "28", profession: "developer" },
    { id: 5, name: "Sarah", age: "24", profession: "designer" },
    { id: 6, name: "Tom", age: "32", profession: "manager" }
  ];
  const allEmployees = arr.concat(newEmployees);
  console.log(allEmployees);
}
