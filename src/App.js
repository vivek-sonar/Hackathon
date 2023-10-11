import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './Registration';
import Middle from './Middle';
import Otp from './Otp';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Verification from './Verification';

function App() {
  return (
    <div>

      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Registration/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
      </Routes>
      </Router>
      <Login/>
    

    </div>
    
  );
}

export default App;
