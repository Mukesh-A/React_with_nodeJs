import { useState } from "react";
import React from "react";

const AddUserData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  function saveUser() {
    console.log({name, email, mobile});
    let data = {name, email, mobile}
    fetch("http://localhost:4000/todo",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },body:JSON.stringify(data)
    }).then((result)=>{
        
    result.json((res)=>{
         console.log(res)
    })})
  }
  return (
    <div>
      <h1>POST API EXAMPLE</h1>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      /><br/>
      <input
        type="text"
        name="name"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      /><br/>
      <input
        type="text"
        name="name"
        value={mobile}
        onChange={(e) => {
          setMobile(e.target.value);
        }}
      /><br/>
      <button type="button" onClick={saveUser}>Submit</button>
    </div>
  );
};

export default AddUserData;
