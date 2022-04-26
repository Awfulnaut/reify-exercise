import axios from 'axios';

const BASE_URL = 'https://www.example.com'

export const client = axios.create({
  baseURL: BASE_URL,
})
