
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Loginpage from './Pages/Loginpage';

import Homepage from './Pages/Homepage'
import RegisterPage from './Pages/Signuppage';


function App() {
  return (
    
    <Router>
      
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        
        <Route path="/Register" element={ <RegisterPage /> } />

        <Route path="/login" element={ <Loginpage /> } />
        
        
      </Routes>
    </Router>
  );
}

export default App;

