import { AxiosInstance, AxiosResponse } from 'axios'

export interface UserDto {
  id: number
  email: string
  password: string
}

export const UserService = (axios: AxiosInstance) => ({
  async index() {
    const response = await axios.get<UserDto[]>('/users')

    return response
  },
  async create(user: Omit<UserDto, 'id'>) {
    const response = await axios.post<any, AxiosResponse<UserDto>>(
      '/users',
      user
    )

    return response
  }
})
