import React from "react";
import MyLayout from "./Components/Layout/MyLayout";
import Home from './Container/Home/Home' 
import About from "./Container/About/About"
import Projects from './Container/Projects/Projects'
import Contact from "./Container/Contact/Contact";
function App() {
  return (
    <MyLayout>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </MyLayout>
  );
}

export default App;