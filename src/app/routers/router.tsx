import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../shared/ui/ErrorFallback.tsx'
import { PersonalDataPage } from '../../pages/PersonalDataPage'
import { AddressAndJobPage } from '../../pages/AddressAndJobPage'
import { LoanParametersPage } from '../../pages/LoanParametersPage'
import { routes } from '../../shared/lib/routes.ts'

export const router = createBrowserRouter([
  {
    path: routes.main,
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <PersonalDataPage />
      </ErrorBoundary>
    ),
  },
  {
    path: routes.addressAndJob,
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AddressAndJobPage />
      </ErrorBoundary>
    ),
  },
  {
    path: routes.loanParameters,
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LoanParametersPage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/test',
    element: 'test',
  },
])
