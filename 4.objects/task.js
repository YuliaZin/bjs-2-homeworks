function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

student1 = new Student("Василий", "муж", "21");
student2 = new Student("Пётр", "муж", "22");
student3 = new Student("Ульяна", "жен", "21");
student4 = new Student("Марина", "жен", "19");


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function(mark) {
  if ( this.marks === undefined) {
    this.marks = [mark]; 
  } else {
    this.marks.push(mark); 
  }
}

Student.prototype.addMarks = function(...mark) {
  let args = Array.from(mark);
  this.marks = args; 
}

Student.prototype.getAverage = function() {
  let arr = this.marks;
  let result = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return result = sum / arr.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
