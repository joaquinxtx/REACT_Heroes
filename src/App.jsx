import './App.css'
import { AuthProvider } from './auth/context/AuthProvider'
import { HeroesApp } from './heroes/components/HeroesApp'

function App() {
 

  return (
    <AuthProvider>
      <HeroesApp/>
    </AuthProvider>
    
  )
}

export default App
