const solution = {
  title: 'Solution',
  articles: {
    a1: {
      title: 'Math',
      paragraphs: {
        p1: 'To solve this test I took in consideration some  math principles.',
        p2: '1 - If C is a Positive Integer and C = (A x B), with A and B, both integers and greater than 1. Then, C >= A + B.',
        p3: '2 - If A , B and C are both Positive Integers and A < B < C. Then (A x B) < ( B x C )',
        p4: '3 - If A is a Positive Integer, A + 1 > (A x 1).',
        p5: '4 - if A and B are Negative Numbers, C = A x B is a Positive Number',
        p6: '5 - if A is a Negative Number, A * 0  > A . ',
      },
    },
    a2: {
      title: 'Logic',
      paragraphs: {
        p0: 'The implementation of the algorithm is an abstraction to express the logic concieved. Here are the thoughs behind the proposed solution.',
        p1: 'From principle 1 and 2 I took that, in order to maximize the sum, I have to make pairs and multiply the positive numbers from the greatest to the smallest',
        p2: 'From principle 3 I took that is better to add a single element to 1 than to make a pair and multiply this element by one',
        p3: 'From principle 4 I took that I should make pairs with the negative numbers, following the same logic used for the positive numbers. I should multiply them in order from greatest to the smallest in a perspective of total quantity or module ',
        p4: 'From principle 5 I took that is better to multiply a negative by 0 than add them to the sum.',
        p5: 'Basically the ideal solution should multiply the positive numbers in pairs from the greatests to the smallests, except for the number one which should be added to the sum by itself, and multiply the negative numbers in pairs as well as the positive ones, but thinking that if a single negative element is left unpaired to be added to the sum by itself, it is better to multiply by zero if zero is present on the list.',
      },
    },
    a3: {
      title: 'Algorithm',
      subtitle: 'Calculate Function',
      img: 'images/calculateFunc.png',
      paragraphs: {
        p1: '1 - Given a list of integers the first step of the algorithm is sorting the list.',
        p2: '2 - Second step is to create a boolean to track the presence of zero`s on the list, a list for the presence of one`s, an array to store the positive integers greater than one and one array to store the negative integers.',
        p3: '3 - Then, third step is to loop through the sorted list and update the variables created.',
        p4: '4 - Call Function to calculate Positive Sum passing the positive numbers list as parameter',
        p5: '5 - Call Function  to calculate Negative Sum passing the negative numbers list and the has zero boolean as parameters',
        p6: '6 - Final sum is the sum calculated by the positive sum func plus the sum calculated by the negative sum func plus the one`s Counter.',
      },
    },
  },
};

export default solution;
