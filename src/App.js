import { Container } from '@mui/material';
import './App.css';
import Details from './components/ChefDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Example from './components/SliderImage';
import Items from './components/FoodItems';

function App() {
  return (
    <div className="App">
      <Header/>
      <Example/>
      <br/><br/>
      <Items/>
      <br/>
      <Container maxWidth="md">
      <h1 className="h1">TRENDING CHEF</h1>
      <p style={{marginLeft:"100px"}}>Sed ut perspiciatis uncle omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
      </Container>
      <br/>
      <Details/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
