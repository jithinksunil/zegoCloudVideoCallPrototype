import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [value, setValue] = useState('')
    const navigate=useNavigate()
    const handleClick=(e)=>{
        e.preventDefault()
        navigate(`/room/${value}`)
    }
  return (
    <div>
      <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
      <button onClick={handleClick}>Join</button>
    </div>
  )
}

export default Home
