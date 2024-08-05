import { FieldErrors } from 'react-hook-form'

export const isFieldError = (errors: FieldErrors, fieldName: string): boolean =>
  Boolean(errors[fieldName]?.message)

export const getFieldErrorMessage = (
  errors: FieldErrors,
  fieldName: string
): string | null =>
  errors[fieldName]?.message ? String(errors[fieldName]?.message) : null
