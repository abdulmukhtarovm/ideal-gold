import React from 'react';

import ReactDOM from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.min.css";

import './sass/main.scss';

import App from './App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Contacts from './pages/Contacts';
import AboutCompany from './pages/AboutCompany';
import Certificates from './pages/Certificates';
import Partner from './pages/Partner';
import Catalog from './pages/Catalog';
import News from './pages/News';
import Question from './pages/Question';
import Plintus from './pages/Plintus';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Classic from './pages/Classic';
import Classic55 from './pages/Classic55';
import Classic60 from './pages/Classic60';
import Classic70 from './pages/Classic70';
import PlinPart from './pages/PlinPart';
import PlinPart70 from './pages/PlinPart70';
import PlinPart80 from './pages/PlinPart80';
import Nalichnik from './pages/Nalichnik';
import Rapids from './pages/Rapids';
import Corners from './pages/Corners';
import Outer from './pages/Outer';
import Distr from './pages/Distr';
import Blister from './pages/Blister';
import Trade from './pages/Trade';
import Counter from './pages/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Navbar />
   <ScrollToTop/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/aboutcompany" element={<AboutCompany />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/partner" element={<Partner />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/news" element={<News />} />
      <Route path="/question" element={<Question />} />
      <Route path="/plintus" element={<Plintus />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/question" element={<Question />} />
      <Route path="/classic" element={<Classic />} />
      <Route path="/classic55" element={<Classic55 />} />
      <Route path="/classic60" element={<Classic60 />} />
      <Route path="/classic70" element={<Classic70 />} />
      <Route path="/plinpart" element={<PlinPart />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/plinpart70" element={<PlinPart70 />} />
      <Route path="/plinpart80" element={<PlinPart80 />} />
      <Route path="/nalichnik" element={<Nalichnik />} />
      <Route path="/rapids" element={<Rapids />} />
      <Route path="/corners" element={<Corners />} />
      <Route path="/outer" element={<Outer />} />
      <Route path="/distr" element={<Distr />} />
      <Route path="/blister" element={<Blister />} />
      <Route path="/trade" element={<Trade />} />
    </Routes>
  <Footer/>
  </BrowserRouter>
  </React.StrictMode>
);