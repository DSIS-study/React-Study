import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home/home_page';
import SominPage from './somin/somin_page';
import HyeongjunPage from './hyeongjun/hyeongjun_page';
import YunseungPage from './yunseung/yunseung_page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/somin" element={<SominPage />} />
        <Route path="/hyeongjun" element={<HyeongjunPage />} />
        <Route path="/yunseung" element={<YunseungPage />} />
      </Routes>
    </Router>
  );
}
