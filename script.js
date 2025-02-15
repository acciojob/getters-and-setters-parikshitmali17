//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age=age
	}

	get name(){
		return this.name
	}

	set age(newAge){
		return this.age=newAge
	}
}

class Student extends Person {
	constructor (name,age){
		super(name,age)
		
	}

	study(){
		console.log(`{${name}+ is studying}`)
	}

	
}

class Teacher extends Person {
	constructor(name, age){
		super(name,age)
	}
	teach(){
		console.log(`{${name}+ is teaching}`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
