import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';
import AddQuestion from './pages/AddQuestion';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/question/:id/details" element={<QuestionDetails/>}/>
      <Route path="/add-question" element={<AddQuestion/>}/>
    </Routes>
  );
}

export default App;
