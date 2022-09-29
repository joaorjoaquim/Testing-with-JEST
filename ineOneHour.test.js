const { inOneHour } = require('./inOneHour')

describe('time function', () => {
    it('return the timestamp one hour ahead', () => {
        const realDate = Date.now.bind(global.Date)     
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDate
        console.log(global.Date.now())
    })
})