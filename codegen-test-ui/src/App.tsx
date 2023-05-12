import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Weather from './components/weather/Weather';
import Login from './components/login/Login';

function Root() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/weather" element={<Weather />}></Route>
            </Routes>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}

export default App;
