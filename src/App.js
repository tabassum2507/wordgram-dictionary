import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { Container, Switch, withStyles } from "@material-ui/core";
import Header from './components/Header';
import categories from "./data/categories";
import Definition from "./components/Definition";
import {  teal } from "@material-ui/core/colors";

function App() {

  const [ meanings, setMeanings ] = useState([]);
  const [ word, setword ] = useState("");
  const [ category, setcategory ] = useState("en");
  const  [ LightMode, setLightMode ] = useState(false)

  const DarkTheme = withStyles({
    switchBase: {
      color: teal[50],
      '&$checked': {
        color: teal[500],
      },
      '&$checked + $track': {
        backgroundColor: teal[900],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      setMeanings(data.data);
    }catch (error) {
      console.log(error);
    }

  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);


  return (
    <div className="App" style={{
      height: "100vh",
      backgroundColor: LightMode ? "#fff" : "#004d40",
      color: LightMode ?  "black" : "white",
      transition: "all 0.5s linear",
    }}>
      <Container maxwidth="md" style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly"
        }}>
          
          <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 15, paddingBottom: 15}}>
            <span>{ LightMode ? "Light" : "Dark" } Mode</span>
            <DarkTheme  checked={LightMode} onChange={() => setLightMode(!LightMode)} />
          </div>

        <Header category={category} setcategory={setcategory} word={word}  setword={ setword} LightMode= {LightMode} />
        {meanings && (<Definition word ={ word } meanings = {meanings} category ={category} />)}
      </Container>
      
    </div>
  );
}

export default App;
