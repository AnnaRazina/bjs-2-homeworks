function Student (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  if(this.subjectName === undefined) { 
    Student["subject"];
    this.subject = subjectName;
  } else {
    this.subject = subjectName;
  }
};  

Student.prototype.addMark = function (mark) { 
  if(this.marks === undefined) { 
    Student["marks"];
    this.marks = [mark];      
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined) {
    Student["marks"];
    this.marks = [...mark];
  } else {   
    for (let item of mark) {
    this.marks.push(item);
    }
  }
};

Student.prototype.getAverage = function () {
  let sum = 0;
  let Array = [];
  let average;
  if(this.marks === undefined) { 
    console.log(`У студента ${this.name} оценки отсутствуют.`);
  } else {
    for (let item of this.marks) {
      Array.push(item);
    }
 
    for (let i = 0; i < Array.length; i++) {
      sum += Array[i];
    }
 
    average = sum / Array.length;
    return average;
  }
};
 
Student.prototype.exclude = function (reason) {
  let result = this.getAverage();
  if(result <= 3) {
    Student["excluded"];
    this.excluded = reason;
    reason = "low grades";
    delete this.subject; 
    delete this.marks;
  } 
};

let student3 = new Student("Maria", "female", 17);
student3.setSubject("Geometry");
student3.addMark(3);
student3.addMarks(5, 5, 4);
console.log(student3.getAverage()); 
student3.exclude("low grades");
console.log(student3);

let student4 = new Student("Olivia", "female", 15);
student4.setSubject("Algebra");
student4.addMark(2);
console.log(student4.getAverage()); 
student4.exclude("low grades");
console.log(student4);

let student5 = new Student("Mark", "male", 20);
student5.setSubject("Geometry");
console.log(student5.getAverage());
student5.exclude("low grades");
console.log(student5);