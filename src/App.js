import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


function App() {
    const activeTheme = useSelector(state => state.theme.activeTheme);


    useEffect(()=>{
        localStorage.setItem('currentTheme',"halloween");
    },[]);



  return (
    <div data-theme={`${activeTheme}`}>
      <AllRoutes />
    </div>
  );
}

export default App;
