import { Route, Routes } from 'react-router-dom'
import clsx from 'clsx';
import HomePage from "./pages/Home/HomePage";
import Feartures from "./pages/Features/Feartures";
import Pricing from "./pages/Pricing/Pricing";
import Resources from "./pages/Resources/Resources";
import Header from "./components/header/Header";
import Login from "./pages/account/Login"
import Register from "./pages/account/register"
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <div className={clsx('grid', 'wide')}>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/features' element={<Feartures />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
