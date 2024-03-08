import {BrowserRouter as Router,Route,Routes
} from 'react-router-dom'
import LandingPage from './Pages/LandingPage';
import ProfileDetails from './Pages/ProfileDetails';

function App() {
  return <>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/profile-details' element={<ProfileDetails/>}></Route>
    </Routes>
   </Router>
  </>;
}

export default App;
