import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import QuestionDetails from './pages/QuestionDetails';
import AddQuestion from './pages/AddQuestion';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { UserAuthContextProvider } from './context/UserAuthContextProvider';
import AuthMiddleware from './middleware/AuthMiddleware';
import GuestMiddleware from './middleware/GuestMiddleware';
import PageLoader from './components/loaders/PageLoader';
import NotFoundPage from './pages/NotFoundPage';
import Profil from './pages/Profil';

function App() {
  return (
    <UserAuthContextProvider>
    <Routes>
      <Route path="/profil" element={<AuthMiddleware> <Profil/> </AuthMiddleware>} />
      <Route path="/home" element={<AuthMiddleware> <Home/> </AuthMiddleware>} />
      <Route path="/question/:id/details" element={<QuestionDetails/>}/>
      <Route path="/add-question" element={<AddQuestion/>}/>
      <Route path="/loader" element={<PageLoader/>}/>
      <Route path="/" element={<GuestMiddleware><Login/> </GuestMiddleware> }/>
      <Route path="/register" element={<GuestMiddleware><Register/> </GuestMiddleware>}/>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
