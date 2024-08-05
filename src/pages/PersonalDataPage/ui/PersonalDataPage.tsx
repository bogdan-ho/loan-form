import useTitle from '../../../shared/lib/hooks/useTitle.tsx'
import { Box } from '@mui/material'
import { PersonalDataForm } from '../../../features/PersonalDataForm'

export const PersonalDataPage = () => {
  useTitle('Личные данные')
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <PersonalDataForm />
    </Box>
  )
}
