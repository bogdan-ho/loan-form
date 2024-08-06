import { AxiosResponse } from 'axios'

export interface UserLoanInfoState {
  phone: string
  firstName: string
  lastName: string
  gender: string
  jobPlace: string
  address: string
  loanAmount: number
  loanDuration: number
}

export interface ApplyForLoanResponse {
  id: number
}

export interface UserLoanInfoServices {
  applyForLoan: (
    data: UserLoanInfoState
  ) => Promise<AxiosResponse<ApplyForLoanResponse>>
}
