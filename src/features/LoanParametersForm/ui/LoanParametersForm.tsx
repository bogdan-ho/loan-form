import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Box, Button, Paper, Slider, Typography } from '@mui/material'

interface FormData {
  loanAmount: number
  loanDuration: number
}
export const LoanParametersForm = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      loanAmount: 200,
      loanDuration: 10,
    },
  })
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = (data: FormData) => {
    console.log(data)
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
          <Typography variant="h5">Параметры займа</Typography>

          <Box>
            <Controller
              name="loanAmount"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Обязательное поле',
                },
                min: {
                  value: 200,
                  message: 'Минимальная сумма займа - $200',
                },
                max: {
                  value: 1000,
                  message: 'Максимальная сумма займа - $1000',
                },
              }}
              render={({ field }) => (
                <>
                  <Typography variant="subtitle1">
                    Сумма займа - ${field.value?.toFixed(0)}
                  </Typography>
                  <Slider
                    {...field}
                    aria-label="Сумма займа"
                    valueLabelDisplay="auto"
                    step={100}
                    min={200}
                    max={1000}
                  />
                </>
              )}
            />
          </Box>

          <Box>
            <Controller
              name="loanDuration"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Обязательное поле',
                },
                min: {
                  value: 10,
                  message: 'Минимальный срок займа - 10 дней',
                },
                max: {
                  value: 30,
                  message: 'Максимальный срок займа - 30 дней',
                },
              }}
              render={({ field }) => (
                <>
                  <Typography variant="subtitle1">
                    Срок займа - {field.value?.toFixed(0)} дней
                  </Typography>
                  <Slider
                    {...field}
                    aria-label="Срок займа"
                    valueLabelDisplay="auto"
                    step={1}
                    min={10}
                    max={30}
                  />
                </>
              )}
            />
          </Box>

          <Button type="submit" variant="contained" size="large">
            Подать заявку
          </Button>
        </FormProvider>
      </Box>
    </Paper>
  )
}
