import axios from 'axios'

axios.defaults.baseURL = 'https://api-monthly-channel.exp.channel.io/'

export const registerEmail = async (email: string) => {
  const response = await axios.post('/', { email })

  return response
}
