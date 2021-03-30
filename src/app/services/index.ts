import axios from "axios"
import api from "../config/consts/api.data"
import http from "../config/axios"
class Home {
  constructor() {}
  SERVER_URL = import.meta.env.DEV
    ? import.meta.env.VITE_APP_AXIOS_BASEURL
    : import.meta.env.VITE_APP_SERVER_URL

  async getHome() {
    return await http.get(`${this.SERVER_URL}${api.getData}`)
  }
}

export default new Home()
