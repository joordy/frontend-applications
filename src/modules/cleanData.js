import { receiveData } from './utils'
import { apiOne, apiTwo } from './helpers/rdwEntry'

export async function cleanMyData() {
  const datasrc1 = await receiveData(apiOne)
  const datasrc2 = await receiveData(apiTwo)

  // console.log(datasrc1, datasrc2)

  const result = datasrc1.map((api1) => {
    const api2 = datasrc2.find((api2) => api1.areaid === api2.areaid)
    api1.spec = api2
    return api1
  })

  // const api2 = datasrc2.find((api2) => api1.areaid === api2.areaid)
  // const api2 = datasrc2.find(api2 => api1.areaid === api2.areaid) api1 = api2 return api1

  // dataset1.map((location) => {
  //   const parkingSpecs = dataset2.find(
  //     (parkingSpecs) => location.areaid === parkingSpecs.areaid
  //   )
  //   location.parkingSpecs = parkingSpecs
  //   return location
  // })

  console.log(result)
}
