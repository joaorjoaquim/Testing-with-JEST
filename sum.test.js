const { sum } = require('./sum')

it('sums 2 numbers', () => {
    expect(sum(1,2)).toBe(3)
})