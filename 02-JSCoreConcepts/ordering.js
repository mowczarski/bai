const reverse = function(arr) {
    let arr2 = [];
    arr.forEach(x=> arr2.push(x))
    return arr2.reverse();
  }
  
  const sort = function(arr){
    let arr2 = [];
    arr.forEach(x=> arr2.push(x))
    return arr2.sort()
  }
  
  const even = function(arr) {
    let arrEven = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0){
        arrEven.push(arr[i]);
      }
    }
    return arrEven;
  }
  
  let numbers = [8,3,2,1,5,4,6];
  console.log(numbers);
  console.log(reverse(numbers));
  console.log(even(numbers));
  console.log(reverse(even(numbers)));
  console.log(even(sort(numbers)));
  