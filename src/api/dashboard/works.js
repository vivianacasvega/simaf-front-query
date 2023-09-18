const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')


class Works {

  async getRadial () {
    const response = await axios.get(`${URL}/dashboard/getradialworks`, config.configWithToken())
    return response.data
  }

  async getIndicatorsMonth () {
    const response = await axios.get(`${URL}/dashboard/getworksmonth`, config.configWithToken())
    return response.data
  }

  async getWorksYear () {
    const response = await axios.get(`${URL}/dashboard/getworksyear`, config.configWithToken())
    return response.data
  }

}


export default new Works
