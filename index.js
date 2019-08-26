const logNameCallback = function (el, i, arr) {
  console.log(el.name);
};

function logDriverNames(arr) {
  arr.forEach(logNameCallback);
}

function logDriversByHometown(arr, loc) {
  const hometownArr = arr.filter( function (driver) {return driver.hometown === loc});
  
  logDriverNames(hometownArr);
}

function driversByRevenue(arr) {
  return [...arr].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(arr) {
  return [...arr].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

const reduceDriverRevenue = function (agg, el, i, arr) {
  return agg + el.revenue;
}

function totalRevenue(arr) {
  return arr.reduce(reduceDriverRevenue, 0);
}

function averageRevenue(arr) {
  return totalRevenue(arr) / arr.length;
}