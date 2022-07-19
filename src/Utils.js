function secondsToTime(seconds) {
    return new Date(1000 * seconds)
    .toISOString()
    .substring(19, 14)
}

export{
    secondsToTime
}