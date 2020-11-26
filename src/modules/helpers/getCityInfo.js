import { receiveData } from '/src/modules/helpers/utils'

function newCityObj(uniqueCity) {
  // const result = Object.values(
  //   uniqueCity.reduce((acc, city) => {
  //     acc[city] = acc[city] || [city, 0]
  //     acc[city][1]++
  //     return acc
  //   }, {})
  // )
  // console.log(result)
  const result = uniqueCity.map(async (element) => {
    const locationData = await getCityLocation(element)
    return {
      city: element,
      ...locationData,
    }
  })

  return Promise.all(result)
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
  const abc = await newCityObj(uniqueCity)
  return abc
}

//Use HERE Maps API Geocoding to get latitude and longitude coordinates for a city name
//
// const newCityObj = (uniqueCity) => {
//   //const newObj
//   return uniqueCity.map(async (element) => {
//     const result = await getLocation(element)
//     console.log(result)
//     return {
//       city: element,
//       ...result,
//     }
//   })
//   // return Promise.all(newObj)
// }

// async function getLocation(cityName) {
//   const geo = await receiveData(
//     `https://geocode.search.hereapi.com/v1/geocode?apiKey=B1CkIQ-gETJxbw3X00kk3YE0S2gkkODYpcBk_Nl2Bf4&q=${cityName},%20NL`
//   )
//   // let geo = await fetch(
//   //   `https://geocode.search.hereapi.com/v1/geocode?apiKey=B1CkIQ-gETJxbw3X00kk3YE0S2gkkODYpcBk_Nl2Bf4&q=${cityName},%20NL`
//   // ).then(() => {
//   //   geo.json()
//   return geo.items[0] ? geo.items[0].position : { lat: null, lng: null }
// }

// const defg = getMyData(uniqueCity)
// console.log(defg)
// const cityList = newCityObj(uniqueCity)
