import './App.css';
import Index from './components/index'
import Home from './components/homePage'
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Index />
      <Home />
    </div>
  );
}

export default App;
