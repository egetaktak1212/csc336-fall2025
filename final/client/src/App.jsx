import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [data, setData] = useState({
    title: "GAH",
    items: "12345"
  })

    useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json))
  }, []);


  return (
    <>
    <h1>{data.title}</h1>
    </>
  )
}

export default App
