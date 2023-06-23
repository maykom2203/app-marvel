import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ListMarvel from './Pages/ListMarvel';


function App() {
  return (
    <Routes>
      <Route path="/homePage" element={ <HomePage /> } />
      <Route path="/listMarvel" element={ <ListMarvel /> } />
      <Route path="/" element={ <Navigate to="/homePage" /> } />
    </Routes>
  )
}

export default App;
