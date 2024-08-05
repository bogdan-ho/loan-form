import { FormProvider, useForm } from 'react-hook-form'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import {
  getFieldErrorMessage,
  isFieldError,
} from '../../../shared/lib/formUtils.ts'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../shared/lib/routes.ts'
import { useUnit } from 'effector-react'
import {
  $userLoanInfoStore,
  updateUserLoanInfo,
} from '../../../entities/UserLoanInfo'
import { JobPlaceTextField } from '../../../shared/ui/JobPlaceTextField'

interface FormData {
  jobPlace: string
  address: string
}
export const AddressAndJobForm = () => {
  const navigate = useNavigate()

  const userLoanInfoStore = useUnit($userLoanInfoStore)
  const { jobPlace, address } = userLoanInfoStore
  const defaultValues: FormData = {
    jobPlace,
    address,
  }

  const methods = useForm<FormData>({ defaultValues })
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = methods

  const onSubmit = (data: FormData) => {
    updateUserLoanInfo(data)

    navigate(routes.loanParameters)
  }

  const handleGoToPreviousPage = () => {
    const currentFormData = getValues()
    updateUserLoanInfo(currentFormData)
    navigate(-1)
  }

  return (
    <Paper
      elevation={2}
      sx={{
        width: '400px',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        padding={4}
        gap={2}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormProvider {...methods}>
          <Typography variant="h5" component="h1">
            Адрес и место работы
          </Typography>

          <JobPlaceTextField />

          <TextField
            variant="outlined"
            label="Адрес проживания"
            {...register('address', {
              required: {
                value: true,
                message: 'Обязательное поле',
              },
            })}
            error={isFieldError(errors, 'address')}
            helperText={getFieldErrorMessage(errors, 'address')}
          />

          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              onClick={handleGoToPreviousPage}
            >
              Назад
            </Button>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Далее
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Paper>
  )
}
