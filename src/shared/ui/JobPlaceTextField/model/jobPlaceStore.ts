import { createEffect, createStore } from 'effector'
import axios, { AxiosError } from 'axios'

interface Product {
  name: string
  slug: string
  url: string
}

export const fetchJobPlacesFx = createEffect<void, Product[], AxiosError>(
  async () => {
    const response = await axios.get(
      'https://dummyjson.com/products/categories'
    )
    return response.data
  }
)

export const $jobPlacesStore = createStore<Product[]>([]).on(
  fetchJobPlacesFx.doneData,
  (_, data) => data
)

fetchJobPlacesFx()
