import useTitle from '../../../shared/lib/hooks/useTitle.tsx'
import { Box } from '@mui/material'
import { LoanParametersForm } from '../../../features/LoanParametersForm'
import { LoanConfirmationModal } from '../../../widgets/LoanConfirmationModal'

export const LoanParametersPage = () => {
  useTitle('Параметры займа')
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <LoanParametersForm />
      <LoanConfirmationModal />
    </Box>
  )
}
