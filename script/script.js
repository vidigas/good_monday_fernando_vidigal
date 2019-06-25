
/**
 * @function calculate 
 * @param {array}  
 * @returns Object with number sum and array of pairs
 *
 * @Logic
 * - Receives an array of integers
 * - Sort the Array
 * - Loop through sorted array
 * - Divide elements into a positive list and a negative list
 * - Count the presence of ones
 * - Look for the presence of Zero
 * 
 * - Call function to calculate positive List results
 * - Call function to calculate negative List results
 *
 * - Combine results and return object with a number sum and an array of pairs
 */

const calculate = (arr) => {
  const sortedArray = arr.sort((a, b) => b - a);

  const positiveList = [];
  const negativeList = [];
  let oneList = [];
  let hasZero = false;

  for (const el of sortedArray) {
    if (el === 1) oneList.push(el);
    else if (el > 1) positiveList.push(el);
    else if (el < 0) negativeList.push(el);
    else hasZero = true;
  }

  const positiveData = calculatePositiveData(positiveList);
  const negativeData = calculateNegativeData(negativeList, hasZero);

  let res = {
    sum: positiveData.sum + negativeData.sum + oneList.length,
    pairs: positiveData.pairs.concat(oneList.concat(negativeData.pairs))
  }
  return res;
};

/**
 * @function calculatePositiveData
 * @param {array}
 * @returns Object with number sum and array of pairs
 *
 * @Logic
 * - Receives a sorted array of positive Integers
 * - Creates a variable sum and a variable pairs
 * - Loop through the list for each two elements
 * - If the list has a next element, the two elements are pushed as a pair
 * - the product of this elements is added to the sum
 * - If the list does not have a next element, the single element is added to the sum and pushed as a pair
 * - return object with total sum and an array of pairs
 */

const calculatePositiveData = (list) => {
  let sum = 0;
  let pairs = [];

  for (let i = 0; i < list.length; i += 2) {
    if (list[i + 1]) {
     sum += list[i] * list[i + 1];
     pairs.push([list[i], list[i+1]]) 
    }
    else {
     sum += list[i];
     pairs.push(list[i])
    }
  }
  return { sum , pairs } ;
};

/**
 * @function calculateUnpairedNegatives
 * @param {array, Boolean}  
 * @returns Object with number sum and array of pairs
 *
 * @Logic
 * - Receives a sorted array of negative Integers with odd number of elements and a boolean hasZero
 * - Creates a variable sum and a variable pairs
 * - Loop through the list for each two elements starting from the second
 * - The elements are pushed as a pair along with the next element on the list
 * - the product of this elements is added to the sum
 * - If the boolean hasZero is true, the first element on the list is pushed along with zero as a pair
 * - If the boolean hasZero is false, the first element is pushed alone to the pairs list and added to the sum
 * - returns final sum and array of pairs
 */

const calculateUnpairedNegatives = (list, hasZero) => {
  let sum = 0;
  let pairs = []

  for (var i = 1; i < list.length - 1; i += 2) {
    sum += list[i] * list[i + 1];
    pairs.push([list[i], list[i + 1]])
  }
  if(hasZero) pairs.push([list[0], 0])
  else {
    sum += list[0]
    pairs.push(list[0]) 
  }

  return { sum, pairs };
};

/**
 * @function calculatePairedNegatives
 * @param {array, Boolean}  
 * @returns Object with number sum and array of pairs
 *
 * @Logic
 * - Receives a sorted array of negative Integers with even number of elements and a boolean hasZero
 * - Creates a variable sum and a variable pairs
 * - Loop through the list for each two elements starting from the first
 * - The elements are pushed as a pair along with the next element on the list
 * - the product of this elements is added to the sum
 * - If the boolean hasZero is true, zero is pushed to the pairs array
 * - returns final sum and array of pairs
 */

const calculatePairedNegatives = (list, hasZero) => {
  let sum = 0;
  let pairs = []

  for (var i = 0; i < list.length - 1; i += 2) {
    sum += list[i] * list[i + 1];
    pairs.push([list[i], list[i + 1]]);
  }
  if(hasZero) pairs.push(0);

  return { sum, pairs };
}

/**
 * @function calculateNegativeData
 * @param {array, Boolean}  
 * @returns Object with number sum and array of pairs
 *
 * @Logic
 * - Receives a sorted array of negative Integers and a boolean hasZero
 * - If list array is empty returns object with sum equal 0
 * - If list has a single element, return object with sum equals this elemtent or zero if the bool hasZero is equals true
 * - Check wheather the list lenght has an even or odd number of elements in the unpairedNegatives
 * - Call the appropriate calculate func based on the variable unpairNegatives
 */

const calculateNegativeData = (list, hasZero) => {
  
  if (!list.length) return {sum: 0, pairs: hasZero ? [0] : [] };
  if (list.length === 1) {
    if(hasZero) return {sum: 0, pairs: [list[0], 0]}
    else return {sum: list[0], pairs: [list[0]]};
  } 

  const unpairedNegatives = list.length % 2;

  return unpairedNegatives ? calculateUnpairedNegatives(list, hasZero) : calculatePairedNegatives(list, hasZero)
};

export default calculate;
