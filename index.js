
const logDriverNames = function(drivers){
    drivers.forEach(function(driver){
        console.log(driver.name)
    })
}

const logDriversByHometown = function(drivers, location) {
    drivers.forEach(function(driver){
        if (driver.hometown === location) {
        console.log(driver.name)
        }
    })
}

const driversByRevenue = function(drivers){
    return drivers.slice().sort(function(driver1, driver2) {
        return driver1.revenue - driver2.revenue
    })
}

const driversByName = function(drivers){
    return drivers.slice().sort(function(driver1, driver2){
        return driver1.name.localeCompare(driver2.name)
    })
}

const totalRevenue = function(drivers) {
    return drivers.reduce(function (total, driver){
        return driver.revenue + total
    }, 0)
}
// the 0 is telling the reduce function that the first amount is 0. It calls is at the end, as the 2nd argument, but it takes a break to define a function belonging to the first argument

const averageRevenue = function(drivers) {
    return totalRevenue(drivers)/drivers.length
}