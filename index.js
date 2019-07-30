function logDriverNames(drivers) {
  const callback = function (driver,i, drivers) {
    console.log(`${driver.name}`)
  };

  drivers.forEach(callback);
}

function logDriversByHometown(drivers, location) {
  let homies = drivers.filter(driver => driver.hometown === location);

  const callback = function (driver, i, homies) {
    console.log(`${driver.name}`)
  };
    homies.forEach(callback);
}

function driversByRevenue(drivers) {
 let earners = [...drivers]
     earners.sort(function(a, b) {
    return a.revenue - b.revenue;
});

  return earners;
}

function driversByName(drivers) {
 let names = [...drivers]
     names.sort(function(a, b){
       if(a.name < b.name) { return -1; }
       if(a.name > b.name) { return 1; }
       return 0;
})
  return names;
}

function totalRevenue(drivers) {
  let totalRevenue = 0;

  drivers.forEach(function (revenue) {
    totalRevenue += driver.revenue;
  });

  return totalRevenue;
};


