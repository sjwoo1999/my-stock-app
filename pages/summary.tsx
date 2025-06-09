import { useRouter } from 'next/router';

export default function Summary() {
  const router = useRouter();

  const handleHome = () => {
    router.push('/');
  };

  const summaryItems = [
    { icon: '✅', text: '재무제표 제출: 매출 증가' },
    { icon: '📊', text: '신규 사업 진출 발표' },
    { icon: '⚡', text: '대규모 투자 공시' },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center px-4"
      style={{
        backgroundImage: 'url(/weather/column.png)',
      }}
    >
      <div className="w-full max-w-[393px] bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-8 flex flex-col items-center space-y-6 text-center">
        {/* 날짜 */}
        <h2 className="text-xl font-bold text-[#111827]">2025년 05월 24일</h2>

        {/* 요약 텍스트 */}
        <p className="text-sm text-gray-700 leading-relaxed">
          최근 DART 공시 분석 결과,<br />
          <span className="font-semibold text-brand-primary">삼성전자</span>에 긍정적인 투자 분위기가 감지되고 있어요.
        </p>

        {/* 리스트 */}
        <ul className="space-y-3 text-sm text-[#111827] w-full">
          {summaryItems.map((item, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <span className="text-lg">{item.icon}</span>
              <span className="flex-1 text-left leading-snug">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* 버튼 */}
        <button
          onClick={handleHome}
          className="w-full bg-brand-primary text-white py-3 rounded-full text-base font-semibold shadow hover:opacity-90 transition"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
