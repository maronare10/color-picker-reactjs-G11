import { useState } from "react"
import "./ColorPicker.css"

const ColorPicker = () => {
 
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

export {ColorPicker}


