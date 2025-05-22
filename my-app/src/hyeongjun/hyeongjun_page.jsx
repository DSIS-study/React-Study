import './hyeongjun_page.css';

export default function HyeongjunPage() {
  return (
    <div className="hyeongjun-container">
      <h1 className="main-title">안녕하세요! 김형준입니다.</h1>
      <p className="intro">
        동아대학교 <strong>디스이즈 개발팀</strong>에서 활동 중입니다.
      </p>
      <p className="github">
        제{' '}
        <a
          href="https://github.com/HyeongJun02"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        도 놀러오세요!
      </p>
      <img
        src="./00-Info-Image.png"
        alt="김형준 이미지"
        className="profile-image"
      />
      <div className="headings">
        <h1>이건 h1 태그에요</h1>
        <h2>이건 h2 태그에요</h2>
        <h3>이건 h3 태그에요</h3>
        <h4>이건 h4 태그에요</h4>
        <h5>이건 h5 태그에요</h5>
        <h6>이건 h6 태그에요</h6>
      </div>

      <div className="test">안녕하세요 저는 테스트에요.</div>
    </div>
  );
}
