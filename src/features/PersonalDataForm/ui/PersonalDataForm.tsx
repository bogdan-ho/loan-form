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
import { PhoneInput } from '../../../shared/ui/PhoneInput'
import { useForm, Controller, FormProvider } from 'react-hook-form'
import {
  getFieldErrorMessage,
  isFieldError,
} from '../../../shared/lib/formUtils.ts'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../../shared/lib/routes.ts'

interface FormData {
  phone: string
  firstName: string
  lastName: string
  gender: string
}

export const PersonalDataForm = () => {
  const navigate = useNavigate()

  const methods = useForm<FormData>()
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const onSubmit = (data: FormData) => {
    console.log(data)
    navigate(routes.addressAndJob)
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
          <Typography variant="h5">Личные данные</Typography>
          <PhoneInput variant="outlined" label="Номер телефона" />

          <TextField
            variant="outlined"
            label="Имя"
            {...register('firstName', {
              required: {
                value: true,
                message: 'Обязательное поле',
              },
            })}
            error={isFieldError(errors, 'firstName')}
            helperText={getFieldErrorMessage(errors, 'firstName')}
          />

          <TextField
            variant="outlined"
            label="Фамилия"
            {...register('lastName', {
              required: {
                value: true,
                message: 'Обязательное поле',
              },
            })}
            error={isFieldError(errors, 'lastName')}
            helperText={getFieldErrorMessage(errors, 'lastName')}
          />

          <FormControl fullWidth error={isFieldError(errors, 'gender')}>
            <InputLabel id="genderSelectLabel">Пол</InputLabel>
            <Controller
              name="gender"
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
                  labelId="genderSelectLabel"
                  id="genderSelect"
                  label="Пол"
                >
                  <MenuItem value="male">Мужской</MenuItem>
                  <MenuItem value="female">Женский</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>
              {getFieldErrorMessage(errors, 'gender') ?? ''}
            </FormHelperText>
          </FormControl>

          <Button type="submit" variant="contained" size="large">
            Далее
          </Button>
        </FormProvider>
      </Box>
    </Paper>
  )
}
