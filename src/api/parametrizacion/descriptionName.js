const axios = require('axios')
const { URL } = require('../constant')
const config = require('../config')

class DescriptionName {
  async all () {
    const response = await axios.get(`${URL}/descriptionnames/getdescriptionnames`, config.configWithToken())
    return response.data
  }

  async create (data) {
    const response = await axios.post(`${URL}/descriptionnames/createdescriptionname`, data, config.configWithToken())
    return response.data
  }

  async get (id) {
    const response = await axios.get(`${URL}/descriptionnames/getdescriptionname/${id}`, config.configWithToken())
    return response.data
  }

  async update (data) {
    const response = await axios.post(`${URL}/descriptionnames/updatedescriptionname`, data, config.configWithToken())
    return response.data
  }

  async enable (_id) {
    const response = await axios.post(`${URL}/descriptionnames/enabledescriptionname`, {'id': _id}, config.configWithToken())
    return response.data
  }

  async delete (_id) {
    const response = await axios.post(`${URL}/descriptionnames/deletedescriptionnames`, {'id': _id}, config.configWithToken())
    return response.data
  }

  async filterSelect () {
    const response = await axios.get(`${URL}/descriptionnames/selectdescriptionnames`, config.configWithToken())
    return response.data
  }

  async filterByPage (page) {
    const response = await axios.get(`${URL}/descriptionnames/getdescriptionnamepag/${page}`, config.configWithToken())
    return response.data
  }

  async filterSearch (key, page) {
    const response = await axios.get(`${URL}/descriptionnames/getdescriptionnamefilter/${key}/${page}`, config.configWithToken())
    return response.data
  }
}

export default new DescriptionName()
