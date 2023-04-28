import './App.css';
import Sabina from './componets/Sabina'
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sabina/>
        <Outlet/>
      </header>
    </div>
  );
}

export default App;
