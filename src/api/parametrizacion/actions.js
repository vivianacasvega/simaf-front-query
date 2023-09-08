const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class Action {
  async all () {
    const response = await axios.get(`${URL}/actions/getactions`, config.configWithToken())
    return response.data
  }

  async create (data) {
    const response = await axios.post(`${URL}/actions/createaction`, data, config.configWithToken())
    return response.data
  }

  async get (id) {
    const response = await axios.get(`${URL}/actions/getaction/${id}`, config.configWithToken())
    return response.data
  }

  async update (data) {
    const response = await axios.post(`${URL}/actions/updateaction`, data, config.configWithToken())
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

export default new Action()
