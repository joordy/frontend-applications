import { receiveData } from './utils'
import { apiOne, apiTwo } from './helpers/rdwEntry'

export async function cleanMyData() {
  const datasrc1 = await receiveData(apiOne)
  const datasrc2 = await receiveData(apiTwo)

  console.log(datasrc1, datasrc2)
}
