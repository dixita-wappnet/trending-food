import './Styles/App.css';
import Footer from './components/layouts/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/layouts/Header';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header/>
        <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/about' element={<About />} />
           <Route exact path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
