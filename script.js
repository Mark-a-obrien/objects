
const container = document.querySelector(".container");

// student constructor 
function Student(firstname, lastname, className, attendance, subjects) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.className = className;
    this.attendance = attendance;
    this.subjects = subjects
}


// subjects constructor 
function Subject(name, grade, description) {
    this.name = name;
    this.grade = grade;
    this.description = description;
}





// Student.prototype.displayGrades = function() {
//     const grade = (
//         `<ul> 
//             <li>${this.subjects.physics}</li> 
//             <li>${this.subjects.maths}</li> 
//             <li>${this.subjects.english}</li> 
//             <li>${this.subjects.art}</li> 
//             <li>${this.subjects.Enginnering}</li> 
//         </ul>`
//     )

//     const div = document.createElement("div");
//     div.innerHTML = grade;

//     container.appendChild(div);
// }

Student.prototype.displayGrades = function(subject) {
    const template = (
        `<div class="card">
            <h1>${subject.name}</h1>
            <p>${subject.grade}%</p>
            <p id="desc">${subject.description}</p>
        </div>`
    );

    const div = document.createElement("div");
    div.innerHTML = template;

    container.appendChild(div);

}



// example student
// const newStudent = new Student("John", "Ford", "cs1", 80, {
//     physics : 60,
//     maths : 50,
//     english : 50,
//     art : 80,
//     Enginnering : 80,
// })

const physics = new Subject("Physics", 60, "Student is passing"); // To-Do change description depending on grade
const maths = new Subject("Maths", 50, "Student is failing");

const newStudent = new Student("John", "Ford", "cs1", 80, [physics, maths]);

newStudent.displayGrades(physics);
newStudent.displayGrades(maths);



function Obj(name, size) {
    name = name;
    size = [10, 10];
}

Obj.prototype.calcArea = function() {
    return size[0]*size[1];
}

const square = new Obj("Square");







