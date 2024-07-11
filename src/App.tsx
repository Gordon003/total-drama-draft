import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import DraftPage from './pages/DraftPage'
import './App.css';
import Header from './components/Header/Header';
import { DraftProvider } from 'contexts/DraftContext';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
        <div className = "Header-Div"> 
            <Header />
        </div>
        <div className="Main-Div"> 
          <main>
            <Routes>
                <Route path="/" element={<DraftProvider> <DraftPage/> </DraftProvider>} />
            </Routes>
          </main>
          </div>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;
