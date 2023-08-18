const User  = {
    name: "Pepe",
    email: "prueba@gmail.com",
    isActive : true
}


let newUser = {
    name: "David",
    email:"prueba2@gmail.com",
    isPaid: false
}


function cretaCourse(): {name:string, price:number}{
    return {name: "reactjs", price: 250}
}


type User = {
    name: string,
    email: string,
    isActive: boolean

};
function createUser(user:User): User{
    return {name:"David", email:"prueba",isActive:false}
}
createUser({name:"Kevin", email:"kjdvdevelop@gmail.com", isActive:true});

type Teacher ={
    readonly _id: number,
    name : string,
    email: string,
    course:[
        subject: string,
        students:number
    ]
    creditCardDetails?: number  // optional 
}


let teacher1: Teacher = {
    _id : 1,
    name : "Pepe",
    email : "kholo@gmail.com",
    course : ["Mathematics", 30]
}

function createTeacher(teacher:Teacher){
    return teacher;
}


const newTeacher = createTeacher(teacher1);
console.log(newTeacher);
