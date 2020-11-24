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
        item && item.maximumvehicleheight ? item.maximumvehicleheight : 0
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
    return cityname
  } else {
    return null
  }
}

export const countValues = (dataset) => {
  console.log('hello', dataset)

  // let newArr = []
  // dataset.forEach((capacity) => {
  //   if (newArr.find((item) => item.carCapacity == capacity) == undefined) {
  //     newArr.push({
  //       carCapacity: capacity,
  //       value: 0,
  //     })
  //   }
  //   newArr.find((item) => item.carCapacity == capacity).value += 1
  // })

  // console.log(newArr)
}

export const checkForValue = (value) => {
  if (value === 'carCapacity') {
    value = 'parkeer capaciteit'
    return value
  } else if (value === 'maxDriveThrough') {
    value = 'maximale doorrijhoogte'
    return value
  } else if (value === 'evChargerCapacity') {
    value = 'laadpalen'
    return value
  }
  return value
}
