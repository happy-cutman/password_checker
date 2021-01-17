import './App.css';
import React from 'react'
import OriginPasswordForm from './components/OriginPasswordForm';
import AuthPasswordForm from './components/AuthPasswordForm';


function App() {
    return (
        <div className='App'>
            <OriginPasswordForm/>
            <AuthPasswordForm/>
        </div>
    );
}

export default App;
