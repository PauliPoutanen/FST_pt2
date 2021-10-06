import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll2 = () => {
const request = axios.get(baseUrl)
return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
  id: 10000,
  name: 'This NUMBER is NOT-EXISTING in DB!',
   number: '66666666666-666',
    }
    return request.then(response => response.data.concat(nonExisting))
  }


const create = newObject => {
const request = axios.post(baseUrl, newObject)
return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
    }

export default { getAll, create, remove }