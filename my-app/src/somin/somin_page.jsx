import './somin_page.css';

export default function SominPage() {
  return (
    <div className="somin-container">
      <h1 className='title'>안녕하세요. 저는 정소민입니다. </h1>
      <h2>
        {' '}
        <span>컴퓨터공학과 25학번입니다.</span>
        열심히 해 보겠습니다{' '}
      </h2>
      <p>
        제 <strong>취미</strong>는 <a href="https://www.youtube.com/">유튜브</a>
        보기 입니다
      </p>
      <h3>감사합니다</h3>
      <h6 className='thank'>thank you</h6>{' '}
    </div>
  );
}
