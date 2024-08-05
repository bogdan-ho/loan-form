import { createStore, createEvent } from 'effector'

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

export const $userLoanInfoStore = createStore<UserLoanInfoState>(
  initialState
).on(updateUserLoanInfo, (state, data) => ({
  ...state,
  ...data,
}))
