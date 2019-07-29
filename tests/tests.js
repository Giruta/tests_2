describe('HomeWork tasks', () => {

    describe('Calculations', () => {
        const testData = [
            {
                a: 2,
                b: 3,
                expected: 6,
            },
            {
                a: 1,
                b: 4,
                expected: 5,
            },
            {
                a: 0,
                b: 1,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const { a, b, expected } = data;

            const actual = calculations(a, b);

            it(`should return ${expected} when a = ${a} and b = ${b}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('GetQuarter', () => {
        const testData = [
            {
                x: 0,
                y: 0,
                expected: 0,
            },
            {
                x: 0,
                y: 40,
                expected: 'ось',
            },
            {
                x: 19,
                y: 0,
                expected: 'ось',
            },
            {
                x: 10,
                y: 40,
                expected: 1,
            },
            {
                x: -10,
                y: 40,
                expected: 2,
            },
            {
                x: 0,
                y: -23,
                expected: 'ось',
            },
            {
                x: -10,
                y: -40,
                expected: 3,
            },
            {
                x: 10,
                y: -40,
                expected: 4,
            },
            {
                x: -19,
                y: 0,
                expected: 'ось',
            }
        ];

        testData.forEach(data => {
            const { x, y, expected } = data;

            const actual = getQuarter(x, y);

            it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
                assert.equal(actual, expected);
            });
        });
    });

    describe('SumPositive', () => {
        const testData = [
            {
                k: 0,
                l: 0,
                m: 0,
                expected: 0,
            },
            {
                k: 10,
                l: 20,
                m: -30,
                expected: 30,
            },
            {
                k: -20,
                l: 23,
                m: 7,
                expected: 30,
            },
            {
                k: 12,
                l: -10,
                m: -8,
                expected: 12,
            },
            {
                k: -10,
                l: -20,
                m: -30,
                expected: 0,
            }
        ];

        testData.forEach(data => {
            const { k, l, m, expected } = data;

            const actual = sumPositive(k, l, m);

            it(`should return ${expected} when k = ${k} and l = ${l} and m = ${m}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('maxExpression', () => {
        const testData = [
            {
                a: 2,
                b: 3,
                c: 4,
                expected: 27,
            },
            {
                a: 0,
                b: 3,
                c: 4,
                expected: 10,
            },
            {
                a: 2,
                b: 0,
                c: -6,
                expected: -1,
            },
            {
                k: 0,
                l: 0,
                m: 0,
                expected: 3,
            },
            {
                k: 1,
                l: 1,
                m: 1,
                expected: 6,
            }
        ];

        testData.forEach(data => {
            const { k, l, m, expected } = data;

            const actual = maxExpression(k, l, m);

            it(`should return ${expected} when k = ${k} and l = ${l} and m = ${m}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('getMark', () => {
        const testData = [
            {
                rating: 0,
                expected: 'F'
            },
            {
                rating: 19,
                expected: 'F'
            },
            {
                rating: 10,
                expected: 'F'
            },
            {
                rating: 20,
                expected: 'E'
            },
            {
                rating: 39,
                expected: 'E'
            },
            {
                rating: 21,
                expected: 'E'
            },
            {
                rating: 40,
                expected: 'D'
            },
            {
                rating: 59,
                expected: 'D'
            },
            {
                rating: 60,
                expected: 'C'
            },
            {
                rating: 74,
                expected: 'C'
            },
            {
                rating: 76,
                expected: 'B'
            },
            {
                rating: 89,
                expected: 'B'
            },
            {
                rating: 91,
                expected: 'A'
            },
            {
                rating: 100,
                expected: 'A'
            },
            {
                rating: 109,
                expected: 'not certified'
            }
        ];

        testData.forEach((data) => {
            const {rating, expected} = data;
            const actual = getMark(rating);

            it(`should return ${expected} when rating = ${rating}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });
})
