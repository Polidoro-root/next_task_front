import { AxiosInstance, AxiosResponse } from 'axios'

interface Token {
  token: string
}

export const AuthService = (axios: AxiosInstance) => ({
  login: async (username: string, password: string) => {
    const response = await axios.post<any, AxiosResponse<Token>>(
      '/auth/login',
      {
        username,
        password
      }
    )

    return response
  }
})
