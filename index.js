// Code your solution here
function findMatching(drivers, query) {
    let lowerCaseQuery = query.toLowerCase();

    let matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase() === lowerCaseQuery
    );
    return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
    let lowerCaseQuery = query.toLowerCase();

    let matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(lowerCaseQuery)
    );
    return matchingDrivers;
}
function matchName(drivers, query) {
    let lowerCaseQuery = query.toLowerCase();

    let matchingDrivers = drivers.filter(driver =>
        driver.name.toLowerCase() === lowerCaseQuery
    );
    return matchingDrivers;
}
