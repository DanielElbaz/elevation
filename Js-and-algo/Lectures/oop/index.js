class Person {
    #name = '';
    #age = 0;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    get name() {
        return "Hello " + this.#name;
    }
    get age() {
        return this.#age;
    }
    set age(age) {
        if (age >= 0)
            this.#age = age;
    }
    #addYears(years) {
        this.age += years;
    }
    callYears(years){
        return this.#addYears(years)
    }
}

const p1 = new Person("John", 26)
console.log(p1.name, p1.age);
p1.callYears(15);
console.log(p1.age);


class MyMath{
    constructor(name){
        this.name=name;
    };
    static add(a,b){
        console.log(this.name)
        return a+b;
    }
    static PI=3.1415
}

const math= new MyMath();
console.log(MyMath.add(4,2));
