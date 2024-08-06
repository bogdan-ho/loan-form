import axios from 'axios'
import { JobPlacesServices } from '../types/types.ts'

const jobPlacesUrls = {
  getJobPlaces: 'https://dummyjson.com/products/categories',
}
export const jobPlaceServices: JobPlacesServices = {
  getJobPlaces: async () => {
    return await axios.get(jobPlacesUrls.getJobPlaces)
  },
}
