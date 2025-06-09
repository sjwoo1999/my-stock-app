import { FaSearch, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleSearch = () => {
    router.push('/loading');
  };

  const handlePortfolio = () => {
    router.push('/detail');
  };

  return (
    <div className="min-h-screen bg-[#F9F5FF] flex justify-center items-center px-4">
      <div className="w-full max-w-[393px] bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-8">
        {/* 서비스 타이틀 */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-extrabold text-brand-primary">StockWeather</h1>
          <p className="text-sm text-gray-600">
            DART 공시 기반 AI 투자 분석 서비스
          </p>
        </div>

        {/* 검색 영역 */}
        <div className="flex items-center bg-surface-subtle px-4 py-3 rounded-full shadow-sm w-full border border-gray-200 focus-within:ring-2 focus-within:ring-brand-primary transition">
          <FaSearch className="text-gray-500 mr-2" />
          <span className="text-black flex-1 text-sm">삼성전자</span>
          <button
            onClick={handleSearch}
            className="ml-2 bg-brand-primary text-white rounded-full w-9 h-9 flex items-center justify-center hover:opacity-90 transition"
          >
            <FaArrowRight size={14} />
          </button>
        </div>

        {/* 안내 텍스트 */}
        <p className="text-xs text-gray-400 text-center">
          ※ 종목명을 입력하고 AI 분석 결과를 확인하세요.
        </p>

        {/* 포트폴리오 바로 가기 버튼 */}
        <button
          onClick={handlePortfolio}
          className="w-full bg-brand-primary text-white py-3 rounded-full text-base font-semibold shadow hover:opacity-90 transition"
        >
          내 포트폴리오 확인하기
        </button>
      </div>
    </div>
  );
}
