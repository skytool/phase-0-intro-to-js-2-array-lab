// Write your solution here!
let cats =["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
     return cats.push(name);
    
}

function destructivelyPrependCat(name){
     return cats.unshift(name);
     
}

function destructivelyRemoveLastCat(){
    return cats.pop();
    
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
    
}

function appendCat(name){
    let newCat = [...cats, name];
    return newCat;
        
}

function prependCat(name){
    return [name, ...cats];
    
}

function removeLastCat(name){
    const newCat = cats.slice(0, cats.length-1);
    return newCat;
}

function removeFirstCat(name){
    const newCat = cats.slice(1);
    return newCat;
}