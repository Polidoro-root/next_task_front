import axios, { AxiosResponse } from 'axios'
import { AuthService } from './auth'
import { UserService } from './users'

const baseURL = 'http://localhost:3333'

const httpClient = axios.create({
  baseURL
})

export const api = {
  auth: AuthService(httpClient),
  user: UserService(httpClient)
}
