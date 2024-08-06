import { createStore, createEvent, createEffect, sample } from 'effector'
import { AxiosError } from 'axios'
import { openLoanConfirmationModal } from './loanConfirmationModalStore.ts'
import { ApplyForLoanResponse, UserLoanInfoState } from '../types/types.ts'
import { userLoanInfoServices } from '../api/userLoanInfoServices.ts'

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

export const submitLoanForm = createEvent('submitLoanForm')

export const applyForLoanFx = createEffect<
  UserLoanInfoState,
  ApplyForLoanResponse,
  AxiosError
>(async (data) => {
  const response = await userLoanInfoServices.applyForLoan(data)

  return response.data
})
export const $userLoanInfoStore = createStore<UserLoanInfoState>(initialState)
  .on(updateUserLoanInfo, (state, data) => ({
    ...state,
    ...data,
  }))
  .on(applyForLoanFx.done, (state, { result }) => {
    console.log('Заявка на кредит успешно отправлена! ID:', result.id)
    return state
  })
  .on(applyForLoanFx.fail, (state, error) => {
    console.error('Ошибка при отправке заявки на кредит:', error)
    return state
  })

export const $isAllLoanFormsFilled = createStore<boolean>(false)

sample({
  clock: $userLoanInfoStore,
  fn: (userLoanInfoStore) => {
    return userLoanInfoStore
      ? !Object.values(userLoanInfoStore).some((fieldValue) => !fieldValue)
      : false
  },
  target: $isAllLoanFormsFilled,
})

sample({
  clock: submitLoanForm,
  source: $userLoanInfoStore,
  fn: (userLoanInfoStore) => userLoanInfoStore,
  target: applyForLoanFx,
})

sample({
  clock: applyForLoanFx.done,
  target: openLoanConfirmationModal,
})
