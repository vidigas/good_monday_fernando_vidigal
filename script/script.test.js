import calculate from './script';

describe('empty array and single element', () => {
	test('input = [] -> sum equals to 0', () => {
		expect(calculate([]).sum).toBe(0);
	})

	test('input = [0] -> sum and pairs equals to 0', () => {
		expect(calculate([0]).sum).toBe(0);
		expect(calculate([0]).pairs).toEqual([0]);

	})

	test('input = [1] -> sum and pairs  equals to 1', () => {
		expect(calculate([1]).sum).toBe(1);
		expect(calculate([1]).pairs).toEqual([1]);
	})

	test('input = [12] -> sum and pairs  equals to 12', () => {
		expect(calculate([12]).sum).toBe(12);
		expect(calculate([12]).pairs).toEqual([12]);
	})

	test('input = [-12] -> sum and pairs  equals to -12', () => {
		expect(calculate([-12]).sum).toBe(-12);
		expect(calculate([-12]).pairs).toEqual([-12]);
	})

	test('input = [-12, 0] -> pairs equals to (-12, 0)', () => {
		expect(calculate([-12,0]).pairs).toEqual([[-12,0]])
	})

})

describe('unordered positive Numbers with 1', () => {
	test('input = [2,1,4,3,5] -> sum is equals to 27 ', () => {
    expect(calculate([2,1,4,3,5]).sum).toBe(27);
	});

	test('input = [2,1,4,3,5] -> pairs are (5,4), (3,2) and (1)', () => {
    expect(calculate([2,1,4,3,5]).pairs).toEqual([[5,4],[3,2],1]);
	});

	test('input = [2,1,4,3] -> sum is equals to 15 ', () => {
    expect(calculate([2,1,4,3]).sum).toBe(15);
	});

	test('input = [2,1,4,3] -> pairs are (4,3), (2) and (1)', () => {
    expect(calculate([2,1,4,3]).pairs).toEqual([[4,3], 2, 1]);
	});

});

describe('unordered even negative numbers' , () => {
	test('input = [-3, -1,-4, -2] -> sum is equals to 14 ', () => {
  	expect(calculate([-3,-1,-4,-2]).sum).toBe(14);
	});

	test('input = [-3, -1,-4, -2, 0] -> sum is equals to 14 ', () => {
  	expect(calculate([-3,-1,-4,-2, 0]).sum).toBe(14);
	});

	test('input = [-3,-1,-4,-2,0] -> pairs are (-4,-3), (-2, -1), 0 ', () => {
  	expect(calculate([-3,-1,-4,-2, 0]).pairs).toEqual([[-1,-2], [-3,-4], 0]);
	});
});

describe('odd negative numbers', () => {
	test('input = [-4, -3, -2,] -> sum is equals to 14 ', () => {
  	expect(calculate([-4,-3,-2,]).sum).toBe(10);
	});

	test('input = [-4, -3, -2,] -> pairs are (-4,-3),(-2) ', () => {
  	expect(calculate([-4,-3,-2,]).pairs).toEqual([[-3,-4], -2]);
	});
})

describe('odd negative numbers with 0', () => {
	test('input = [-4, -3, -2, 0] -> sum is equals to 12 ', () => {
  	expect(calculate([-4,-3,-2, 0]).sum).toBe(12);
	});

	test('input = [-4, -3, -2, 0] -> pairs are (-4,-3),(-2,0) ', () => {
  	expect(calculate([-4,-3,-2,0]).pairs).toEqual([[-3,-4], [-2, 0]]);
	});
})

describe('positive and negative numbers', () => {
	test('input = [-4, -3, -2, 0 , 1, 2, 3, 4] -> sum is equals to 27 ', () => {
  	expect(calculate([-4,-3,-2, 0, 1, 2, 3, 4]).sum).toBe(27);
	});

	test('input = [-4, -3, -2 , 1, 2, 3, 4] -> sum is equals to 25 ', () => {
  	expect(calculate([-4,-3,-2, 1, 2, 3, 4]).sum).toBe(25);
	});

	test('input = [-4, -3, -2, 0 , 1, 2, 3, 4] -> pairs are (-4,-3),(-2,0), (4,3), 2, 1 ', () => {
  	expect(calculate([-4,-3,-2, 0, 1, 2, 3, 4]).pairs).toEqual([ [ 4, 3 ], 2, 1, [ -3, -4 ], [ -2, 0 ] ]);
	});

		test('input = [-4, -3, -2 , 1, 2, 3, 4] -> pairs are (-4,-3),-2, (4,3), 2, 1 ', () => {
  	expect(calculate([-4,-3,-2, 1, 2, 3, 4]).pairs).toEqual([ [ 4, 3 ], 2, 1, [ -3, -4 ], -2 ]);
	});
})
