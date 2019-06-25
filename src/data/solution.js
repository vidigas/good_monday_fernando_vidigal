const solution = {
  title: 'Solution',
  articles: {
    a1: {
      title: 'Math',
      paragraphs: {
        p1: 'To solve this test I took in consideration some  math principles.',
        p2: 'If C is a Positive Integer and C = (A x B), with A and B, both integers and greater than 1. Then, C >= A + B.',
        p3: 'If A , B and C are both Positive Integers and A < B < C. Then (A x B) < ( B x C )',
        p4: 'If A is a Positive Integer, A + 1 > (A x 1).',
        p5: 'if A and B are Negative Numbers, C = A x B is a Positive Number',
        p6: 'if A is a Negative Number, A * 0  > A . ',
      },
    },
    a2: {
      title: 'Algorithm',
      subtitle: 'Calculate Function',
      img: 'images/calculateFunc.png',
      paragraphs: {
        p1: '1 - Given a list of integers the first step of the algorithm is sorting the list.',
        p2: '2 - Second step is to create a boolean to track the presence of zero`s on the list, a counter for the presence of one`s, an array to store the positive integers greater than one and one array to store the negative integers.',
        p3: '3 - Then, third step is to loop through the sorted list and update the variables created.',
        p4: '4 - Call Function to calculate Positive Sum passing the positive numbers list as parameter',
        p5: '5 - Call Function  to calculate Negative Sum passing the negative numbers list and the has zero boolean as parameters',
        p6: '6 - Final sum is the sum calculated by the positive sum func plus the sum calculated by the negative sum func plus the one`s Counter.',
      },
    },
  },
};

export default solution;
