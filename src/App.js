import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Subpage from './pages/Subpage';
import Subpages from './pages/Subpages';
 
function App() {
  return (
    <div className="App">
      <Header sitename="green"/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:productname' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/subpages' element={<Subpages/>}>
          <Route path='/subpages/:id' element={<Subpage/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
