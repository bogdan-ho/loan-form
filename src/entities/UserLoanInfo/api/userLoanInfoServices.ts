import axios from 'axios'
import { UserLoanInfoServices } from '../types/types.ts'

const useLoanInfoUrls = {
  applyForLoan: 'https://dummyjson.com/products/add',
}
export const userLoanInfoServices: UserLoanInfoServices = {
  applyForLoan: async (data) => {
    return await axios.post(useLoanInfoUrls.applyForLoan, {
      title: data.firstName + ' ' + data.lastName,
    })
  },
}
