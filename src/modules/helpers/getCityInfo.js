import { receiveData } from '/src/modules/helpers/utils'

// With the help from Laurens Aarnoudse
export async function newCityObj(uniqueCity) {
  const result = uniqueCity.map(async (element) => {
    const locationData = await getCityLocation(element)
    return {
      city: element,
      ...locationData,
    }
  })
  return Promise.all(result).then((data) => data)
}

async function getCityLocation(city) {
  const geo = await receiveData(
    `https://geocode.search.hereapi.com/v1/geocode?apiKey=B1CkIQ-gETJxbw3X00kk3YE0S2gkkODYpcBk_Nl2Bf4&q=${city},%20NL`
  )
  const latAndLong = geo.items[0]
    ? geo.items[0].position
    : { lat: null, lng: null }
  return latAndLong
}

export async function getMyData(uniqueCity) {
  const theData = await newCityObj(uniqueCity)
  return theData
}
