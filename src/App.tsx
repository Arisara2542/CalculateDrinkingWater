import { Water } from './Components/Water'
import { Button } from './Components/Button'
import { useState } from 'react'
import './App.css'

function App() {
  const [isDark , setIsDark] =useState(false)

  return (
      <div className='container' data-theme ={isDark? "dark" : "light"}>
        <div>
          <Water />
        </div>
        <div className='btn-container'>
          <Button 
            isCheck={isDark}
            handleChange={() =>setIsDark(!isDark)}
          />
        </div>
      </div>
      
    
  )
}

export default App
