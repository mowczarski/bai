
let result = () => 
{ 
  let arr = [];

  for (let i = 0; i < 10; i++)
  {
      arr.push(Math.floor(Math.random() * 20)) + 5;
  }
  
  return arr;
};

console.log(result())