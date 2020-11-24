import { receiveData, mergeData, filterData } from './helpers/utils'
import { apiOne, apiTwo } from './helpers/entrys'

export const cleanMyData = async () => {
  const datasrc1 = await receiveData(apiOne)
  const datasrc2 = await receiveData(apiTwo)
  const mergedData = await mergeData(datasrc1, datasrc2)
  const data = await filterData(mergedData)
  return data
}
