import { AxiosResponse } from 'axios'

export interface Product {
  name: string
  slug: string
  url: string
}

export interface JobPlacesServices {
  getJobPlaces: () => Promise<AxiosResponse<Product[]>>
}
