const axios = require('axios')
const { URL } = require('./constant')
const config = require('./config')

class Auth {
  async login (email, password) {
    const response = await axios.post(`${URL}/auth/login`, {
      email: email,
      password: password
    })
    return response.data
  }

  async verify () {
    const response = await axios.get(`${URL}/auth/verify`, config.configWithToken())
    return response.data
  }
}

export default new Auth()
