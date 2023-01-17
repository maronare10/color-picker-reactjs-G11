import { useState } from "react"
import './App.css'

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('')
   
  const handleChange = (event) => {
    // console.log(event.target.value)
    setBackgroundColor(event.target.value)

  }

  return (
    <div className="app" style= {{backgroundColor}}>
      <span>Selecciona un color:</span>
      <input
        // type="color"
        type='text'
        placeholder="#FF0000"
        onChange={handleChange}
      />
    </div>
  )
}

export default App