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

export function getEvents(perPage, page) {
  return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
}

export function getEventById(id: number) {
  return apiClient.get(`/events/${id}`)
}


