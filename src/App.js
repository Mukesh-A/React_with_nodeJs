import "./App.css";
import React, { useEffect, useState } from "react";
import AddUserData from "./AddUserData";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4000/todo").then((result) => {
  //     result.json().then((res) => {
  //       setData(res);
  //     });
  //   });
  // }, []);
  // console.warn(data);
  return <div className="App">get api
  <AddUserData/></div>;
}

export default App;
