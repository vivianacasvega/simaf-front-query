const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')


class Tools {

  async getRadial () {
    const response = await axios.get(`${URL}/dashboard/getradialtools`, config.configWithToken())
    return response.data
  }

  async getIndicatorsMonth () {
    const response = await axios.get(`${URL}/dashboard/gettoolsmonth`, config.configWithToken())
    return response.data
  }

  async getToolsYear () {
    const response = await axios.get(`${URL}/dashboard/gettoolsyear`, config.configWithToken())
    return response.data
  }

}


export default new Tools
