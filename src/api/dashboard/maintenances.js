const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')


class Maintenances {

  async getRadial () {
    const response = await axios.get(`${URL}/dashboard/getradialmant`, config.configWithToken())
    return response.data
  }

  async getIndicatorsMonth () {
    const response = await axios.get(`${URL}/dashboard/getmaintenancemonth`, config.configWithToken())
    return response.data
  }

  async getMantYear () {
    const response = await axios.get(`${URL}/dashboard/getmantyear`, config.configWithToken())
    return response.data
  }

}


export default new Maintenances
