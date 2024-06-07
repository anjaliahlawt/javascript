class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    greet()
    {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
    havebirthday()
    {
        this.age+=1;
        return `Happy birthday ${this.name}! You are now ${this.age} years old.`;
    }
}
const person1=new person("anjali",23);
console.log(person1.greet());
console.log(person1.havebirthday());