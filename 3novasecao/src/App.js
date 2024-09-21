import './App.css';
import Iowa from './assets/cover2.jpg';
import ManageData from './components/ManageData';
import ListRenderer from './components/ListRenderer';
import NameAppender from './components/NameAppender';

function App() {
  return (
    <div className="App">
      <h1>Nova seção de REACT</h1>
      <div>
        <img className="albumcover" src="/cover1.jpg" alt="9 membros da banda Slipknot juntos na capa do primeiro álbum" />
      </div>
      <div>
        <img src={Iowa} className='albumcover' alt="Capa do álbum Iowa da banda Slipknot contendo um bode" />
      </div>
      <ManageData/>
      <ListRenderer/>
      <NameAppender/>
    </div>
  );
}

export default App;
