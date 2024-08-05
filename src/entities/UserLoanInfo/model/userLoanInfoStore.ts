import { createStore, createEvent, createEffect, sample } from 'effector'
import axios, { AxiosError } from 'axios'
import { openLoanConfirmationModal } from './loanConfirmationModalStore.ts'

interface UserLoanInfoState {
  phone: string
  firstName: string
  lastName: string
  gender: string
  jobPlace: string
  address: string
  loanAmount: number
  loanDuration: number
}

const initialState: UserLoanInfoState = {
  phone: '',
  firstName: '',
  lastName: '',
  gender: '',
  jobPlace: '',
  address: '',
  loanAmount: 200,
  loanDuration: 10,
}

export const updateUserLoanInfo =
  createEvent<Partial<UserLoanInfoState>>('updateUserLoanInfo')

export const applyForLoanFx = createEffect<
  UserLoanInfoState,
  { id: number },
  AxiosError
>(async (data) => {
  console.log('applyForLoanFx called with', data)

  const response = await axios.post('https://dummyjson.com/products/add', {
    title: data.firstName + ' ' + data.lastName,
  })

  return response.data
})
export const $userLoanInfoStore = createStore<UserLoanInfoState>(initialState)
  .on(updateUserLoanInfo, (state, data) => ({
    ...state,
    ...data,
  }))
  .on(applyForLoanFx.done, (_, { result }) => {
    console.log('Заявка на кредит успешно отправлена! ID:', result.id)
  })
  .on(applyForLoanFx.fail, (state, error) => {
    console.error('Ошибка при отправке заявки на кредит:', error)
    return state
  })

$userLoanInfoStore.watch((state) =>
  console.log(state, '$userLoanInfoStore state')
)

sample({
  clock: applyForLoanFx.done,
  target: openLoanConfirmationModal,
})
