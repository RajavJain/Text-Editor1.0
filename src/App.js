// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import { useState } from 'react'; 

import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";

// import About from './components/About';


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type: type
     })
     setTimeout(() => {
       setAlert(null);
     }, 2000);
  } 

  const toggleMode = () => {
    if (mode === 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }
      
    else {
    setMode('dark');
    document.body.style.backgroundColor='#101054';
    showAlert("Dark Mode has been Enabled","success");
    }
}

  return (
    <>
    {<Router>

      <Navbar title="Text-Utils" about="About Us" mode={mode} toggleMode={toggleMode} /> {/* Isme mode and toggleMode prop m send kiya hai */}
      <Alert alert={alert}/>
      
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>

      </Router>}
          {/* Was used in older version of react
          Instead of Routes  */}
        {/* <div className="container my-3">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert}heading="Enter the text to analyze below" mode={mode} />
          </Route>  
        </Switch>    
      </div> */}

    </>
  ); 
}

export default App;
