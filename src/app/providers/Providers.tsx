import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../shared/ui/ErrorFallback.tsx'

interface IProviders {
  children: ReactNode
}
const Providers = ({ children }: IProviders) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  )
}

export default Providers
