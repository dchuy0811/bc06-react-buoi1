import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <Header/>
        <Carousel/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
