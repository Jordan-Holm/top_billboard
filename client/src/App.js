import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Billboards from './components/billboards/Billboards';
import Artists from './components/artists/Artists';
import Nomatch from './components/shared/Nomatch'
import Navbar from './components/shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/billboards' element={<Billboards />} />
      <Route path='/:billboardId/artists' element={<Artists />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;