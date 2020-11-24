export const receiveData = async (url) => {
  try {
    const dataSource = await fetch(url)
    return await dataSource.json()
  } catch (err) {
    err
  }
}

export const mergeData = (datasrc1, datasrc2) => {
  const result = datasrc1.map((src1) => {
    const spec = datasrc2.find((src2) => src1.areaid === src2.areaid)
    return { ...src1, ...spec }
  })
  return result
}

export const filterData = (data) => {
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
      maxDriveThrough: parseInt(
        item && item.maximumvehicleheight ? item.maximumvehicleheight : 430
      ),
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

export const checkForValue = (value) => {
  if (value === 'totalCapacity') {
    value = 'parkeer capaciteit'
    return value
  } else if (value === 'avgDriveThrough') {
    value = 'maximale doorrijhoogte'
    return value
  } else if (value === '') {
    value = 'chargingPoints'
    return value
  }
  return value
}

export const countValues = (dataset) => {
  const newData = filterCities(dataset)
  const finalData = mergeDataCity(dataset, newData)
  return finalData
}

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

const mergeDataCity = (dataset, newData) => {
  const uniqueCities = newData.map((item) => item.cityName)
  const allData = createObj(uniqueCities)
  parseInfo(allData, dataset)
  return allData
}

// Made with the expertise of @veerleprins
const createObj = (allCities) => {
  let countObj
  return allCities.map((city) => {
    return (countObj = {
      name: city,
      totalCapacity: 0,
      avgDriveThrough: 0,
      chargingPoints: 0,
    })
  })
}

const parseInfo = (a, dataset) => {
  let num
  let avg
  let num2
  a.forEach((obj) => {
    num = 0
    avg = 0
    num2 = 0
    dataset.forEach((totalObj) => {
      if (obj.name === totalObj.city) {
        num += totalObj.carCapacity
        avg += totalObj.maxDriveThrough
        num2 += totalObj.evChargerCapacity
      }
    })
    let newAvg = avg / dataset.length
    obj.totalCapacity = num
    obj.avgDriveThrough = newAvg
    obj.chargingPoints = num2
  })
}
