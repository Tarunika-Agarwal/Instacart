import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CardDetails from './Pages/CardDetails';
import Home from './Pages/Home';
import Homepage from './Pages/Homepage';
import Pizzas from './Pages/Pizzas';
import Snacks from './Pages/Snacks';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
<Routes>
  
<Route path='/' element={<Homepage/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/pizzas' element={<Pizzas/>}/>
  <Route path='/snacks' element={<Snacks/>}/>
  <Route path='/cart/:id' element={<CardDetails/>}/>
</Routes>
    </BrowserRouter>
      
  );
}

export default App;
