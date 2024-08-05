import { createEvent, createStore } from 'effector'

export const openLoanConfirmationModal = createEvent(
  'openLoanConfirmationModal'
)
export const closeLoanConfirmationModal = createEvent(
  'closeLoanConfirmationModal'
)
export const $loanConfirmationModalStore = createStore({
  open: false,
})
  .on(openLoanConfirmationModal, () => ({
    open: true,
  }))
  .on(closeLoanConfirmationModal, () => ({
    open: false,
  }))
