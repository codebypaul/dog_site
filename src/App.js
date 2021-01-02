// import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
// components
import Navigation from './components/Navbar'
import Footer from './components/Footer'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Available from './pages/Available'
import Contact from './pages/Contact'
import Planned from './pages/Planned'
import Payment from './pages/Payment'
import Reviews from './pages/Reviews'

function App() {
  const [dog,setBreed] = useState({
    breed: '',
    background: ''
  })
  const setDane =() =>{
    setBreed({
      breed:'Great Dane',
      background: 'https://www.abbastandanes.com/wp-content/uploads/2018/10/dane-family-hero-1024x806.jpg'
    })
  }
  const setLab =() =>{
    setBreed({
      breed:'Labrador Retriever',
      background: 'https://kingdomacreslabpuppies.com/files/packed/1wefanscc25vyhb8pjhafy2yeqegc0w0rfneokw9fv9shk1uisdnt40s6ooj429ptmeszx696p0q0c2to8mm69v13lv6x2xtqqoxwd95h7nsnm3i5gt7i4ov2soizcfj6sykia2ftxj4lbl62090x59x9e2zc8sd.jpg'
    })
  }
  const setAussie =() =>{
    setBreed({
      breed:'Australian Shepherd',
      background: 'https://www.dogtime.com/assets/uploads/2019/06/australian-shepherd-puppy-5-1280x720.jpg'
    })
    // 
  }
  console.log(dog);
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path='/'>
          <Home setDane={setDane} setLab={setLab} setAussie={setAussie}/>
        </Route>
        {/* <Route path='/' component={Home}/> */}
        <Route path='/about' component={About}/>
        <Route path='/available'>
          <Available dog={dog}/>
        </Route>
        <Route path='/contact' component={Contact}/>
        <Route path='/planned' component={Planned}/>
        <Route path='/payment' component={Payment}/>
        <Route path='/reviews' component={Reviews}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
