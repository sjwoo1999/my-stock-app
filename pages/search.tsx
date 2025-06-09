import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();

  const handleSummary = () => {
    router.push('/summary');
  };

  const keywords = ['재무제표 제출', '신규 사업 진출', '투자 공시', '자회사 실적 발표'];

  // 실제 공시 자료 mock (이런 구조로 API 응답 올 거야)
  const relatedDisclosures = [
    {
      report_nm: '사업보고서(2025.03)',
      summary: '2025년 사업보고서 제출. 연결 매출액 10% 증가, 영업이익 15% 증가.',
      url: 'https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20250601000123',
    },
    {
      report_nm: '주요사항보고서(신규시설투자)',
      summary: '반도체 신규공장 설비 투자 결정. 총 투자금액 3조원 규모.',
      url: 'https://dart.fss.or.kr/dsaf001/main.do?rcpNo=20250601000456',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex justify-center">
      <div className="w-full max-w-[393px] min-h-screen bg-white p-6 shadow-md flex flex-col overflow-y-auto space-y-6">
        {/* 헤드라인 */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#111827]">
            📑 삼성전자 공시 분석 결과
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            최근 DART 공시자료 기반으로 투자 분위기를 분석했어요.
          </p>
        </div>

        {/* 날씨 영역 */}
        <div
          className="w-full h-32 rounded-xl bg-cover bg-center shadow-inner"
          style={{ backgroundImage: 'url(/weather/sunny.png)' }}
        ></div>

        {/* 키워드 영역 */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-[#111827]">📌 주요 키워드</h3>
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-brand-primary text-white rounded-full text-sm font-medium shadow-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* 공시자료 영역 */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold text-[#111827]">📄 관련 공시자료</h3>

          {relatedDisclosures.map((disclosure, idx) => (
            <a
              key={idx}
              href={disclosure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition"
            >
              <h4 className="font-semibold text-[#111827] mb-1">{disclosure.report_nm}</h4>
              <p className="text-sm text-gray-700 leading-snug mb-1">
                {disclosure.summary}
              </p>
              <p className="text-xs text-brand-primary font-medium">
                👉 DART 공시 바로가기
              </p>
            </a>
          ))}
        </div>

        {/* 버튼 */}
        <div className="pt-4">
          <button
            onClick={handleSummary}
            className="w-full bg-brand-primary text-white py-3 rounded-full text-base font-semibold shadow hover:opacity-90 transition"
          >
            관심 종목 요약 살펴보기
          </button>
        </div>
      </div>
    </div>
  );
}
