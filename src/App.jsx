import Header from './components/Layout/Header'
import Home from './pages/Home'
// import { MovieProvider } from './context/MovieContext'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';

export const App = () => {
 
  return (

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<MovieDetails />}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
   
  )
}

export default App