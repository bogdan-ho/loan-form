import { getFieldErrorMessage, isFieldError } from '../../../lib/formUtils.ts'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { $jobPlacesStore } from '../model/jobPlaceStore.ts'
import { useUnit } from 'effector-react/compat'

export const JobPlaceTextField = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const jobPlacesStore = useUnit($jobPlacesStore)

  return (
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
            {jobPlacesStore.map(({ name, slug }, index) => (
              <MenuItem value={slug} key={index}>
                {name}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      <FormHelperText>
        {getFieldErrorMessage(errors, 'jobPlace') ?? ''}
      </FormHelperText>
    </FormControl>
  )
}
