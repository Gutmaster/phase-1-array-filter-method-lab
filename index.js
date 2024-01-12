// Code your solution here
function findMatching(nameArray, name){
    return nameArray.filter(function(driver){
        return driver.toUpperCase() === name.toUpperCase()
    })
}

function fuzzyMatch(nameArray, letters){
    return nameArray.filter(function(driver){
        return driver.slice(0, letters.length) === letters
    })
}

function matchName(driverArray, name){
    return driverArray.filter(function(driver){
        return driver.name === name
    })
}