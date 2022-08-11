import React, { useState } from 'react';
import HeaderContainer from './Header/HeaderContainer';
import FilmsContainer from './Films/FilmsContainer';
import DetailsContainer from './Details/DetailsContainer';
import * as Style from './Style';
import { GlobalStyle } from '../theme/theme';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme/theme';

const App = () => {
    const [theme, setTheme] = useState("light"); 

    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }; 
 
    return ( 
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle ></GlobalStyle>
            <Style.App >
                <Style.Content>
                    <HeaderContainer switchTheme={switchTheme}></HeaderContainer>
                    <Routes>
                        <Route path='' element={ <FilmsContainer></FilmsContainer>}></Route>
                        <Route path='/films/' element={ <FilmsContainer></FilmsContainer>}></Route>
                        <Route path='/films/:filmId/' element={ <DetailsContainer></DetailsContainer>}></Route>
                    </Routes>
                </Style.Content>
            </Style.App>
        </ThemeProvider >
    );
};

export default App;