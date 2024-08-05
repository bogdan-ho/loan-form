import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../shared/ui/ErrorFallback.tsx'
import { PersonalDataPage } from '../../pages/PersonalDataPage'
import { AddressAndJobPage } from '../../pages/AddressAndJobPage'
import { LoanParametersPage } from '../../pages/LoanParametersPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <PersonalDataPage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/address-and-job',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AddressAndJobPage />
      </ErrorBoundary>
    ),
  },
  {
    path: '/loan-parameters',
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
