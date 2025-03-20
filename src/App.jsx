import { useState } from 'react';
import HomePage from './HomePage';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HomePage />
  )
}

export default App
