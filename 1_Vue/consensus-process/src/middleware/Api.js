import axios from 'axios'

const baseURL = '/api'
const RestApi = class {
  constructor () { }

  // membmer part
  postMember (params) { return axios.post(`${baseURL}/member`, params) }

}

export default new RestApi();