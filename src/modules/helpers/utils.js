// Fetch received URL's and convert them to JSON.
export const receiveData = async (url) => {
  try {
    const dataSource = await fetch(url)
    return await dataSource.json()
  } catch (err) {
    err
  }
}

// Merge the two datasets together. Made use of the spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
export const mergeData = (datasrc1, datasrc2) => {
  const result = datasrc1.map((src1) => {
    const spec = datasrc2.find((src2) => src1.areaid === src2.areaid)
    return { ...src1, ...spec }
  })
  return result
}

// Filter the data, and convert numbers to valid integers.
export const filterData = (data) => {
  // const getLocation = getCoordinates(city)
  // filteredValues(data)
  return data.map((item) => {
    return {
      areaDesc: item.areadesc,
      areaID: item.areaid,
      areaManagerID: item.areamanagerid,
      carCapacity: parseInt(item && item.capacity ? item.capacity : 0),
      evChargerCapacity: parseInt(
        item && item.chargingpointcapacity ? item.chargingpointcapacity : 0
      ),
      disAccess: parseInt(
        item && item.disabledaccess ? item.disabledaccess : 0
      ),
      maxDriveThrough: getMaxDrive(item.maximumvehicleheight),
      lat: parseFloat(
        item && item.location.latitude ? item.location.latitude : 0
      ),
      long: parseFloat(
        item && item.location.longitude ? item.location.longitude : 0
      ),
      city: item.areadesc ? getCityName(item.areadesc) : null,
    }
  })
}

// async function getCoordinates(city) {
//   const geo = await getData(`https://geocode.search.hereapi.com/v1/geocode?apiKey=B1CkIQ-gETJxbw3X00kk3YE0S2gkkODYpcBk_Nl2Bf4&q=${cityName},%20NL`);
//   return geo.items[0] ? geo.items[0].position : {lat: null, lng: null};
// }

// const getCoordinates = async (city) => {
//   const locationGeo = await receiveData(
//     `https://geocode.search.hereapi.com/v1/geocode?q=Invalidenstr+117%2C+${city}&apiKey={K6Vrb51b9j-7Y21zaMKN1b5hWvDBR0cpN1iCOweFshg}`
//   )
//   return locationGeo.items[0]
//     ? locationGeo.items[0].position
//     : { lat: null, long: null }
// }

// Give maxDriveThrough average size when number is 0.
const getMaxDrive = (item) => {
  // console.log(item)
  if (item === 0) {
    return parseInt(400)
  } else if (item === undefined) {
    return parseInt(400)
  } else {
    return parseInt(item)
  }
}

// Gets name between the '( )' and place it inside an new object value.
// Used source:  https://stackoverflow.com/questions/49676897/javascript-es6-count-duplicates-to-an-array-of-objects && help of @lars-ruijs
const getCityName = (parkingName) => {
  let regex = /\(/g
  const checker = regex.test(parkingName)
  if (checker === true) {
    let name = parkingName
    let regPattern = /\(([^)]+)\)/
    let cityname = regPattern.exec(name)[1]
    return cityname.toLowerCase()
  } else {
    return null
  }
}

// Converts reactive decleration to readable Dutch string.
export const checkForValue = (value) => {
  if (value === 'totalCapacity') {
    value = 'parkeer capaciteit'
    return value
  } else if (value === 'avgDriveThrough') {
    value = 'maximale doorrijhoogte'
    return value
  }
  // else if (value === 'chargingPoints') {
  //   value = 'laadpunten'
  //   return value
  // }
  else if (value === 'totalGarage') {
    value = 'totaal aantal parkeergarages'
    return value
  }
  return value
}

// Merges all the usable variables for barchart together
export const countValues = (dataset) => {
  const newData = filterCities(dataset)
  const finalData = mergeDataCity(dataset, newData)
  return finalData
}

// Filter the cities on unique ones, goes from 355 to 86.
const filterCities = (dataset) => {
  let newData = []
  dataset.forEach((item) => {
    let i = newData.findIndex((x) => x.cityName == item.city)
    if (i <= -1) {
      newData.push({ cityName: item.city })
    }
  })
  return newData
}

// Function chain to fire the functions which merges all the capacity places and charger spots.
// Made with the expertise of @veerleprins
const mergeDataCity = (dataset, newData) => {
  const allCities = dataset.map((item) => item.city)
  const uniqueCities = newData.map((item) => item.cityName)
  const allData = createObj(uniqueCities)
  parseInfo(allData, dataset, allCities)
  return allData
}

// Creating new objects for barchart with total values
// Made with the expertise of @veerleprins
const createObj = (allCities) => {
  let countObj
  return allCities.map((city) => {
    return (countObj = {
      name: city,
      totalCapacity: 0,
      avgDriveThrough: 0,
      chargingPoints: 0,
      totalGarage: 0,
    })
  })
}

// // Changes city name to first letter Uppercase
// // Used source: https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/
// const newCityName = (city) => {
//   console.log
//   if (city === null) {
//     return
//   } else {
//     return city.charAt(0).toUpperCase() + city.slice(1)
//   }
// }

// Parses all the information to the specific cities.
// With a bit of help from @veerleprins
const parseInfo = (a, dataset, allCities) => {
  let num1
  let cityCount
  let avg
  let num2
  a.forEach((obj) => {
    num1 = 0
    cityCount = 0
    avg = 0
    num2 = 0
    dataset.forEach((totalObj) => {
      if (obj.name === totalObj.city) {
        num1 += totalObj.carCapacity
        avg += totalObj.maxDriveThrough
        num2 += totalObj.evChargerCapacity
        cityCount++
      }
    })
    obj.totalGarage = cityCount
    let newAvg = avg / cityCount
    obj.totalCapacity = num1
    obj.avgDriveThrough = parseInt(newAvg)
    obj.chargingPoints = num2
    // obj.totalGarage = cityCount
  })
}
