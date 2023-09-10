// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AlertDis from './components/AlertDis';

function App() {
  const [mode, setMode] = useState('light'); //Whether Dark Mode is enabled or not
  const [myStyle, setMyStyle] = useState({
    backgroundColor : 'white',
    color: '#495057'
  });

  const [textHand, setTextHand] = useState("black");

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  let toggleMode = ()=>{
    if( mode !== "dark"){
      setTextHand("")
      setMode("dark");
      document.body.style.background = "radial-gradient(circle at 10% 20%,#343a40 0%,#343a40 90%)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : '#343a40',
        color: 'white'
      })
      showAlert("Dark Mode Enabled","success")
    }
  }

  let handleWhite = ()=>{
    if (mode !== 'light'){
      setTextHand("")
      setMode("light");
      document.body.style.background = "white"
      document.body.style.color = "black"
      setMyStyle({
        backgroundColor : 'white',
        color: 'black'
      })
      showAlert("Light Mode Enabled","success");
    }
  }

  let handleGreen = ()=>{
    if (mode !== 'success'){
      setMode("success");
      setTextHand("white");
      document.body.style.background = "rgb(112,224,0)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : "rgb(112,224,0)",
        color: "black"
      })
      showAlert("Theme Applied","success");
    }
  }

  let handleOrange = ()=>{
    if (mode !== 'warning'){
      setMode("warning");
      setTextHand("white");
      document.body.style.background = "rgb(255,193,7,0.72)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : "rgb(244,193,7,0.72)",
        color: "black"
      })
      showAlert("Theme Applied","success");
    }
  }


  let handleRed = ()=>{
    if (mode !== 'danger'){
      setMode("danger");
      setTextHand("white");
      document.body.style.background = "rgb(255,10,84)"
      document.body.style.color = "white"
      setMyStyle({
        backgroundColor : "rgb(255,10,84)",
        color: "black"
      })
      showAlert("Theme Applied","success");
    }
  }
  
  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} textHand={textHand} green={handleGreen} orange={handleOrange} red={handleRed} white={handleWhite}/>
      <AlertDis alert={alert} />
      <div className="container my-3">
          <TextForm heading="Text Analyzer" myStyle={myStyle} showAlert={showAlert} />
      </div>
      
    </>
  );
}

export default App;
