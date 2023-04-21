import { useQuery } from '@tanstack/vue-query'
import axios from 'axios'

export const getMovie = () => {
  return useQuery({
    queryKey: ['get-movie'],
    queryFn: async () => {
      const res = await axios.get('https://api.tvmaze.com/search/shows?q=girls')
      return res.data
    }
  })
}
