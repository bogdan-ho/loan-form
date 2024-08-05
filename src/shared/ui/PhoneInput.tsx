import { ElementType, forwardRef } from 'react'
import { InputBaseComponentProps, TextField } from '@mui/material'
import { IMaskInput } from 'react-imask'
import IntrinsicElements = React.JSX.IntrinsicElements
import { TextFieldProps } from '@mui/material/TextField/TextField'
import { useFormContext } from 'react-hook-form'
import { getFieldErrorMessage, isFieldError } from '../lib/formUtils.ts'
interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
  telMask?: string
}

const defaultTelMask = '0(000) 000 000'

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, telMask, ...other } = props
    return (
      <IMaskInput
        {...other}
        mask={telMask ?? defaultTelMask}
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: string) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    )
  }
)

export const PhoneInput = (props: TextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <TextField
      {...props}
      placeholder="0XXX XXX XXX"
      InputProps={{
        inputComponent: TextMaskCustom as unknown as
          | ElementType<InputBaseComponentProps, keyof IntrinsicElements>
          | undefined,
      }}
      {...register('phone', {
        required: {
          value: true,
          message: 'Обязательное поле',
        },
        minLength: {
          value: 10,
          message: 'Введите номер в формате 0(123) 456 789',
        },
        pattern: {
          value: /^0/,
          message: 'Номер телефона должен начинаться с 0',
        },
      })}
      error={isFieldError(errors, 'phone')}
      helperText={getFieldErrorMessage(errors, 'phone')}
    />
  )
}
