import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SEO from './components/SEO';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <SEO />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
