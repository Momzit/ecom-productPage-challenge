import './App.css';
import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
