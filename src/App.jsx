import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'



function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    async function show() {
      const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(res.data);
      setData(res.data)
      
    }
    show();
  },[])
  return (
    <>
    <p>hi</p>
    {
      data.map((ele,index)=>{
        return(<>
        
        <h3>{ele.title}</h3>
        <h3>{ele.body}</h3>
        </>)
      })
    }
    </>
    
  )
}
export default App;