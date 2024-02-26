class User{
    constructor(name,surname){
        this.name = name
        this.surname = surname
    }
    print(){
        console.log(`имя - ${this.name}; фамилия - ${this.surname}`);
    }
}
const user = new User('Nuseit', 'Nurdin uulu')
console.log(user);

class Student extends User{
    #password
    constructor(name,surname,username,password){
        super(name,surname)
        this.username = username
        this.#password = password
    }
    print(password){
        if(password === this.#password)console.log(`имя - ${this.name}; фамилия - ${this.surname}; nik-${this.username}`);

    }
}
const student = new Student('Nurseit','Nurdinovich','nurdinov', '123456')
student.print('123456')