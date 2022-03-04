


import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//page components

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import Navbar from './components/Navbar'




//How do I use Navigate to redirect the unauthorized user to the login page when trying to go to the home page ?
// And how to redirect the authorized user to the home page after Login.

function App() {

  const { authIsReady, user } = useAuthContext()
  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>
    <Navbar />
    
    <Routes>

    <Route exact path="/" element={user && <Home/>}/>
    
    <Route path='/Login' element= {!user && <Login/>}/>
    <Route path='/Signup' element= {!user && <Signup/>}/>

    </Routes>
    

    </BrowserRouter>
    )}
    </div>
  );
}

export default App
