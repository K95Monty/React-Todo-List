import './App.css';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import Header from './Components/Header';

import './Components/Style/Card.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div className="card">
        <Todos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
