import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className='App'>
      <Header onToggle={handleToggle} />
      <Search isMenuOpen={isMenuOpen} />
    </div>
  )
}

export default App
