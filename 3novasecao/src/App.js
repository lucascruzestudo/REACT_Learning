import './App.css';
import Iowa from './assets/cover2.jpg';

function App() {
  return (
    <div className="App">
      <h1>Nova seção de REACT</h1>
      <div>
        <img src="/cover1.jpg" alt="9 membros da banda Slipknot juntos na capa do primeiro álbum" />
      </div>
      <div>
        <img src={Iowa} alt="Capa do álbum Iowa da banda Slipknot contendo um bode" />
      </div>
    </div>
  );
}

export default App;
