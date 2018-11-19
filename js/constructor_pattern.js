function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        console.log(">>>" + this.name);
    }
}

var p1 = new Person('penn', 18, 'sw eng');
var p2 = new Person('ela', 19, 'sw eng');

p1.sayName();
console.log(p1 instanceof Object);
console.log(p1 instanceof Person);