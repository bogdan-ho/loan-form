import { createBrowserRouter } from 'react-router-dom'
import Counter from '../../features/Counter.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../shared/ui/ErrorFallback.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Counter />
      </ErrorBoundary>
    ),
  },
  {
    path: '/test',
    element: 'test',
  },
])
