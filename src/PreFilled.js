import { useState } from "react";
import React from 'react'

const PreFilled = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
  return (
    <div>
      <input type="text" value={name}/> <br />
      <input type="text" value={mobile}/> <br />
      <input type="text" value={email}/> <br />
      <button>Update</button>
    </div>
  )
}

export default PreFilled
