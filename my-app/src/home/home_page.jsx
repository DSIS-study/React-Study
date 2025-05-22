import { useNavigate } from 'react-router-dom';
import './home_page.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="card" onClick={() => navigate('/hyeongjun')}>
        <h2>김형준</h2>
        <p>2142851</p>
        <button>이동하기</button>
      </div>
      <div className="card" onClick={() => navigate('/somin')}>
        <h2>정소민</h2>
        <p>2545044</p>
        <button>이동하기</button>
      </div>
      <div className="card" onClick={() => navigate('/yunseung')}>
        <h2>태윤승</h2>
        <p>2545738</p>
        <button>이동하기</button>
      </div>
    </div>
  );
}
