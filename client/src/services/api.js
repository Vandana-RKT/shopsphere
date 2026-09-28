import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

export function getProducts() {
  return axios.get(`${API_URL}/products`)
}