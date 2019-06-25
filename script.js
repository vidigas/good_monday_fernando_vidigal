var list = [-2,0,6,7, 19,8, 23, 45, -68]

const calculate = arr => {
  let sortedArray = arr.sort((a, b) => b - a);
  
  var positiveList = [];
  var negativeList = [];
  var oneCount = 0;
  var hasZero = false;

  for(var el of sortedArray){
    if(el === 1) oneCount++;
    else if(el > 1) positiveList.push(el);
    else if(el < 0) negativeList.push(el);
    else hasZero = true
  }

  var positiveSum = calculatePositiveSum(positiveList);
  var negativeSum = calculateNegativeSum(negativeList, hasZero);

  return positiveSum + negativeSum + oneCount
}

const calculatePositiveSum = list => {
  let sum = 0;

  for(var i = 0; i < list.length; i+=2){
    if(list[i+1]) sum += list[i]*list[i+1]
    else sum += list[i]
  }
  return sum
}

const calculateNegativeSum = (list, hasZero) => {
  if(!list.length) return 0
  if(list.length === 1) return hasZero ? 0 : list[0];

  let sum = 0

  var unpairedNegatives = list.length%2
  
  if(unpairedNegatives){

    for(var i = 1; i < list.length - 1; i+=2){
      console.log(list[i])
      sum += list[i]*list[i+1]
    }
    sum = hasZero ? sum : sum + list[0] 
  } 
  else {
    for(var i = 0; i < list.length - 1; i+=2){
      sum += list[i]*list[i+1]
    }
  }
  return sum
}

calculate(list);
