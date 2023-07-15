

function addNum (num:number){
    return num + 25;

}

function proofUpper(name:string){
    return name.toUpperCase();

}


//

const heros = ["thor","spiderman", "ironman"];
console.log(heros.map(her => {
    return `hero is ${her}`
}));

//Errors 
function msgError (errmsg:string) : void{
    console.log(errmsg);
    


}

//
console.log(addNum(3));
console.log(proofUpper("kevin"));
console.log(heros);
export {}