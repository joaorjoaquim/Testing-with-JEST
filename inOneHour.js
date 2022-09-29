const inOneHour = () =>{
    const now = Date.now()
    const oneHourInMiliseconds = 1*60*60*1000
    return now + oneHourInMiliseconds
}

module.exports = { inOneHour }