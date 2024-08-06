import { createEffect, createStore } from 'effector'
import { AxiosError } from 'axios'
import { Product } from '../types/types.ts'
import { jobPlaceServices } from '../api/jobPlaceServices.ts'

export const fetchJobPlacesFx = createEffect<void, Product[], AxiosError>(
  async () => {
    const response = await jobPlaceServices.getJobPlaces()
    return response.data
  }
)

export const $jobPlacesStore = createStore<Product[]>([]).on(
  fetchJobPlacesFx.doneData,
  (_, data) => data
)

fetchJobPlacesFx()
