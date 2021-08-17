import React from 'react';
import './Header.css';
import {  createTheme, TextField, ThemeProvider } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import categories from '../data/categories';


const Header = ({ setcategory, category , word, setword, LightMode }) => {

    const darkMode = createTheme({
        palette: {
          primary: {
            main: LightMode ? "#000" : "#fff",
          },
          type: LightMode ? "light" : "dark",
        },
      });

      const handleChange = (language) => {
        setcategory(language);
        setword("");
      };
    


    return (
        <div className="header">
            <span className="title">{ word? word : "WordGram"}</span>
            <div className="inputs">
            <ThemeProvider theme={darkMode}>
                <TextField className="search"
                 id="filled-basic" 
                 label="Search a Word" 
                 value= {word}
                 onChange={(e) => setword(e.target.value)} />
                 
                <TextField 
                 className= "select"
                 select label="language" 
                 value={category}
                 onChange={(e) => handleChange(e.target.value)}>
                
                {categories.map( (option ) => (
                    <MenuItem key={option.label} 
                    value= {option.label}>{ option.value }</MenuItem>
                ))}                 
                </TextField>
            </ThemeProvider>
            </div>
        </div>
    )
}

export default Header

