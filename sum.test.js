const { sum } = require('./sum')

describe('math functions', () => {
    beforeAll(() => {
        console.log('Before all')
    })

    beforeEach(() => {
        console.log('before each')
    })

    afterAll(() => {
       console.log('after all') 
    })

    afterEach(() => {
        console.log('after each')
    })

    it('sums 2 numbers', () => {
        expect(sum(1,2)).toBe(3)
    })

    it('sums 2 numbers', () => {
        expect(sum(1,2)).toBe(3)
    })
})
