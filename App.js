import About from './components/About';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
