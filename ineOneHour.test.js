const { inOneHour } = require('./inOneHour')

describe('time function', () => {
    it('return the timestamp one hour ahead', () => {
        global.Date.now = () => 0
        expect(inOneHour()).toBe(36000001)
    })
})