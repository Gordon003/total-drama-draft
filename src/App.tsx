import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import DraftPage from './pages/DraftPage'
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<DraftPage/>} />
            </Routes>
          </main>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;
