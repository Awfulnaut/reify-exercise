import axios from 'axios';

const BASE_URL = 'https://frontend-interview-20210623.herokuapp.com'

export const client = axios.create({
  baseURL: BASE_URL,
})
