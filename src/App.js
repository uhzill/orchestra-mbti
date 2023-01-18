import Home from './page/Home';
import Question from './page/Question';
import Result from './page/Result';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path = '/' element = { <Home/> } />
      <Route path = '/question' element = { <Question/> } />
      <Route path = '/result' element = { <Result/> } />
    </Routes>
  );
}

export default App;
