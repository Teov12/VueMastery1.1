import axios from 'axios'
import { IEvent } from '../interfaces/IEvent'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Teov12/prueba-json',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export function getEvents() {
  return apiClient.get('/db')
}

export function getEventById(id: number) {
  return apiClient.get(`/db/${id}`)
}


