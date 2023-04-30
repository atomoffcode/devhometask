import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './shared/Header/components/Header';
import { Footer } from './shared/Footer/Footer';
import { HomePage } from './pages/HomePage/components/HomePage';
import { Route,Routes} from 'react-router-dom'
import { ProductPage } from './pages/ProductPage/components/ProductPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ProductPage/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
