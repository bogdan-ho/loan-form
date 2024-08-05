import useTitle from '../../../shared/lib/hooks/useTitle.tsx'
import { Box } from '@mui/material'
import { AddressAndJobForm } from '../../../features/AddressAndJobForm'

export const AddressAndJobPage = () => {
  useTitle('Адрес и место работы')
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <AddressAndJobForm />
    </Box>
  )
}
