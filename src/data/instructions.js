const instructions =  {
  title: 'Developer Coding Test',
  paragraphs: {
    p1: 'You are given a list of integers, both positive and negative. Each integer in the list must either be paired with another element in the list or be a single element. Once the elements have been paired, the integers in the pairs are multiplied and the results are summed up - the sum will include the single elements.',
    p2: 'Write a program to find the sequence of pairs and singles which give the biggest possible sum.',
    p3: 'Examples:',
    p4: 'for the list [0,1,2,3,4,5] the pairs (4,5) and (2,3) are formed and 0 and 1 are single elements. The max. sum is 27 - (20+6+0+1).',
    p5: 'for the list [-1,0,1] the pairs (-1,0) is formed and 1 is a single element. The max. sum is 1.',
    p6: 'for the list [1,1] no pairs are formed only two single elements. The max. sum is 2. ',
  },
};

export default instructions;
