import { ReactNode } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../../shared/ui/ErrorFallback.tsx'
import { Box } from '@mui/material'

interface IProviders {
  children: ReactNode
}
const Providers = ({ children }: IProviders) => {
  return (
    <Box width="100vw" height="100vh">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Box>
  )
}

export default Providers
