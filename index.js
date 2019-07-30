// Code your solution in this file!

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, location) {
  drivers.filter(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  let totalRevenue = 0;

  drivers.forEach(function (driver) {
    totalRevenue += driver.revenue;
  });

  return totalRevenue;
}

function averageRevenue(drivers) {
  const totalBeforeAverage = totalRevenue(drivers);
  return totalBeforeAverage / drivers.length;
}
