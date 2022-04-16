import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';
import AddQuestion from './pages/AddQuestion';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { UserAuthContextProvider } from './context/UserAuthContextProvider';
// import AuthMiddleware from './middleware/AuthMiddleware';

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
      <Route path="/home" element={ <Home/>} />
      <Route path="/question/:id/details" element={<QuestionDetails/>}/>
      <Route path="/add-question" element={<AddQuestion/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
