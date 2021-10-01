function Error() {
	
    var value = document.getElementById("Error").value;

    if (isNaN(value) || value == 0) {
        message.innerHTML = "Input Entered is Invalid";
        throw new Error("Invalid Input");
    } 
    else {
	message.innerHTML = "Input Entered is valid";
    }
}


const student1 = {
    name: "Ryan Rodricks",
    className: "D15A",
    rollNo: 60,
};

class Student {
    constructor(name, className, rollNo) {
        this.name = name;
        this.className = className;
        this.rollNo = rollNo;
    }
}

const student2 = new Student("Ryan Rodricks", "D15A", 60);



Student.prototype.surname = "Rodricks";
console.log("Student 2: ", student2);

document.getElementById("printName").innerHTML = student2.name;
document.getElementById("printClass").innerHTML = student2.className;
document.getElementById("printRoll").innerHTML = student2.rollNo;


