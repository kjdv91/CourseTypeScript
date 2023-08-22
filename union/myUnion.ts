let id : string | number;

const data : (string | number) []= [];
const scop : any[] = ["Jose",1, false];


function getDbId(id:number|string){
    if(typeof id === "string"){
        id.toUpperCase();
    }else{
        id + 4;
    }

}

