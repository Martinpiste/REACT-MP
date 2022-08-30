
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';

let titulo = "Distribuidora Piste"

function App() {
  return (
    <div>
      <Header />
      <h3>{titulo}</h3>
      <Footer/>
    </div>
  );
}

export default App;
