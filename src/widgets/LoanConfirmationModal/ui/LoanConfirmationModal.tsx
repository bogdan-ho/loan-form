import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useUnit } from 'effector-react'
import { $userLoanInfoStore } from '../../../entities/UserLoanInfo'
import {
  $loanConfirmationModalStore,
  closeLoanConfirmationModal,
} from '../../../entities/UserLoanInfo'

export const LoanConfirmationModal = () => {
  const loanConfirmationModalStore = useUnit($loanConfirmationModalStore)
  const userLoanInfoStore = useUnit($userLoanInfoStore)
  const { loanAmount, loanDuration, firstName, lastName } = userLoanInfoStore

  const handleClose = () => {
    closeLoanConfirmationModal()
  }

  return (
    <Dialog
      open={loanConfirmationModalStore.open}
      fullWidth={true}
      maxWidth={'xs'}
      onClose={handleClose}
      PaperProps={{
        sx: {
          padding: 1,
        },
      }}
    >
      <DialogTitle>
        Поздравляем, {lastName} {firstName}!
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          paddingY: 1,
        }}
      >
        <Typography>
          Вам одобрено ${loanAmount} на {loanDuration} дней.
        </Typography>
      </DialogContent>

      <DialogActions
        sx={{
          padding: 2,
        }}
      >
        <Button variant="contained" onClick={handleClose}>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  )
}
