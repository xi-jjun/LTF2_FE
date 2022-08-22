import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/detail/:id' exact component={Detail}/>
        <Route path='/cart' exact component={Cart}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
