import React,{useState,useEffect} from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';

const Nav = () => {
  const [theme,setTheme]=useState("light-theme");
  const toggleTheme=()=>{
    if(theme=== "dark-theme"){
      setTheme("light-theme")
    }else{
      setTheme("dark-theme")
    }
  }
  useEffect(() => {
       document.body.className=theme;
  }, [theme])
  return (
    <>
    <div className='nav'>
        <h1>Text Converter</h1>
            <button  className="nav-btn"onClick={()=>toggleTheme()}><LightModeIcon/></button>
    </div>
    </>
  )
}

export default Nav