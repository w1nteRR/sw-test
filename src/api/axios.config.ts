import axios from 'axios'

const baseURL = 'https://swapi.dev/api/'

export const mainInstance = axios.create({ baseURL })
