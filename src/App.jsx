import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import DocumentPage from './pages/DocumentPage';
import CatalogPage from './pages/CatalogPage';
import GuidePage from './pages/GuidePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import Visualisasi from './pages/Infografis';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/news" element={<NewsPage/>}/>
          <Route path="/kontak" element={<ContactPage/>}/>
          <Route path="/dokumen" element={<DocumentPage/>}/>
          <Route path="/katalog" element={<CatalogPage/>}/>
          <Route path="/panduan" element={<GuidePage/>}/>
          <Route path="/infografis" element={<Visualisasi/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
