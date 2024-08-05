import { Controller, FormProvider, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
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
} from '../../../entities/User/model/userLoanInfoStore.ts'

interface FormData {
  jobPlace: string
  address: string
}
export const AddressAndJobForm = () => {
  const navigate = useNavigate()

  const userLoanInfoStore = useUnit($userLoanInfoStore)
  console.log(userLoanInfoStore, 'userLoanInfoStore')
  const { jobPlace, address } = userLoanInfoStore
  const defaultValues: FormData = {
    jobPlace,
    address,
  }

  const methods = useForm<FormData>({ defaultValues })
  const {
    control,
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = methods

  const onSubmit = (data: FormData) => {
    console.log(data)
    updateUserLoanInfo(data)
    navigate(routes.loanParameters)
  }

  const handleGoToPreviousPage = () => {
    const currentFormData = getValues()
    updateUserLoanInfo(currentFormData)
    navigate(-1)
  }

  console.log(errors, 'errors')
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
          <Typography variant="h5">Адрес и место работы</Typography>

          <FormControl fullWidth error={isFieldError(errors, 'jobPlace')}>
            <InputLabel id="jobPlaceSelectLabel">Место работы</InputLabel>
            <Controller
              name="jobPlace"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Обязательное поле',
                },
              }}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="jobPlaceSelectLabel"
                  id="jobPlaceSelect"
                  label="Место работы"
                >
                  <MenuItem value="male">Мужской</MenuItem>
                  <MenuItem value="female">Женский</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>
              {getFieldErrorMessage(errors, 'jobPlace') ?? ''}
            </FormHelperText>
          </FormControl>

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
