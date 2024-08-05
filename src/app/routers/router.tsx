import { createBrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../shared/ui/ErrorFallback.tsx'
import {PersonalDataPage} from "../../pages/PersonalDataPage";

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
    path: '/test',
    element: 'test',
  },
])
