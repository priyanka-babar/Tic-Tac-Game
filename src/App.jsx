import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTac from './Components/TicTac'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TicTac/>
        
    </>
  )
}

export default App
