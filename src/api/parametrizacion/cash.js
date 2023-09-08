const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class ExtCash {

  async getselectcash (us) {
    const response = await axios.get(`${URL}/extapprovals/getselectcash/${us}`, config.configWithToken())
    return response.data
  }

  async getdoc (data) {
    const response = await axios.post(`${URL}/extapprovals/getdoceti`, data, config.configWithToken())
    return response.data
  }

  async update (data) {
    const response = await axios.post(`${URL}/extapprovals/updatestatuseti`, data, config.configWithToken())
    return response.data
  }

  async returnsign (data) {
    const response = await axios.post(`${URL}/rules/returnsign`, data, config.configWithToken())
    return response.data
  }

  async getreturncancel (us) {
    const response = await axios.get(`${URL}/rules/returncancelsign/${us}`, config.configWithToken())
    return response.data
  }

  async enable (_id) {
    const response = await axios.post(`${URL}/actions/enableaction`, {'id': _id}, config.configWithToken())
    return response.data
  }

  async delete (_id) {
    const response = await axios.post(`${URL}/actions/deleteaction`, {'id': _id}, config.configWithToken())
    return response.data
  }

  async verifyCode (code) {
    const response = await axios.get(`${URL}/actions/codeactions/${code}`, config.configWithToken())
    return response.data
  }

  async filterByPage (page) {
    const response = await axios.get(`${URL}/actions/getactionpag/${page}`, config.configWithToken())
    return response.data
  }

  async filterSearch (key, page) {
    const response = await axios.get(`${URL}/actions/getactionfilter/${key}/${page}`, config.configWithToken())
    return response.data
  }

  
}

export default new ExtCash()
