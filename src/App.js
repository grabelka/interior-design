import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import ReviewContainer from './components/ReviewContainer';
import Projects from './components/Projects';
import Info from './components/Info';
import JoinBlock from './components/JoinBlock';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <ReviewContainer />
      <Projects />
      <Info />
      <JoinBlock />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
