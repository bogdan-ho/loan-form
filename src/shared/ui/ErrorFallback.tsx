import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

export const ErrorFallback = () => {
  const error = useRouteError()
  let errorMessage: string

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data?.message || error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    console.error(error)
    errorMessage = 'Неизвестная ошибка'
  }

  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1>Что-то пошло не так</h1>
      <span>{errorMessage}</span>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  )
}
