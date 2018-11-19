function Person(){}

Person.prototype.name = "penn";
Person.prototype.age = 18;
Person.prototype.job = "sw eng";
Person.prototype.sayName = function(){
    console.log(">>>>" + Person.prototype.name);
}

var p1 = new Person();
p1.sayName();

var p2 = new Person();
p2.sayName();

console.log(p1.sayName === p2.sayName);

function Person(){}

Person.prototype = {
    constructor: Person,
    name: "elva",
    age: 20,
    job: "Sales",
    sayName: function(){
        console.log(this.name);
    }
}
var p3 = new Person();
p3.sayName();
