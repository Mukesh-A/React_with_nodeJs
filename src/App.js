import "./App.css";
import React, { useEffect, useState } from "react";
import AddUserData from "./AddUserData";
import PreFilled from "./PreFilled";
import Users from "./Users";

function App() {

  //PREV STATE
  const [count, setCount] = useState(1)

  const [counts, setCounts] = useState(0);

  function updateCount(){
    let rand = Math.floor(Math.random(1)*10)

    //prev value
    setCount((prev)=>{
      console.log(prev);
      return rand;
    })
  }


  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/todo").then((result) => {
  //     result.json().then((res) => {
  //       setData(res);
  //     });
  //   });
  // }, []);
  // console.warn(data);
  return <div className="App">
  {/* <AddUserData/>
  <PreFilled/> */}

  <h1>{count}</h1>
  {/* <button onClick={updateCount}>Click me</button> */}


  <Users counter={counts}/>
  </div>;
}

export default App;
