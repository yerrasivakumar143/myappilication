import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Service from './components/Services';
import SignIn from './components/Signup';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/Services' element={<Service/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/blog' element={<Blog/>} />
    </Routes>
    </Router>
  )
}

export default App;