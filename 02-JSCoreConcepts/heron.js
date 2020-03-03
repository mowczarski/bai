let a = 3;
let b = 4;
let c = 5;
let h = 7

let result = (a,b,c,h) => 
  { 
    let p=(a+b+c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c)); 
  };
    
console.log(result(a,b,c,h));