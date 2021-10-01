function Error() {
	
    var value = document.getElementById("message").value;
   message.innerHTML = "";
  let x = document.getElementById("Error").value;
  try { 
    if(x == "")  throw "empty";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
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


