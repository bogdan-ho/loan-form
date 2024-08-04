import './App.css'
import Providers from './providers/Providers.tsx'
import AppRouter from './routers/AppRouter.tsx'

const App = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  )
}

export default App
