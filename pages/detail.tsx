'use client';
import { useRouter } from 'next/router';

const stocks = [
  { name: '삼성전자', signal: '강력 매수', percent: 92 },
  { name: '네이버', signal: '매수', percent: 82 },
  { name: '엔비디아', signal: '중립', percent: 74 },
  { name: '테슬라', signal: '비중 축소', percent: 65 },
  { name: '넷이즈', signal: '매도', percent: 58 },
];

function getSignalStyle(signal: string) {
  switch (signal) {
    case '강력 매수':
    case '매수':
      return 'bg-green-100 text-green-700';
    case '중립':
    case '비중 축소':
      return 'bg-gray-100 text-gray-700';
    case '매도':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export default function Detail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex justify-center">
      <div className="w-full max-w-[393px] h-screen flex flex-col">
        {/* 스크롤 영역 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* 타이틀 */}
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#1F2937]">📂 내 포트폴리오</h2>
            <p className="text-sm text-gray-600">
              관심 종목별 투자 의견 현황
            </p>
          </div>

          {/* 종목 카드 리스트 */}
          <div className="space-y-4">
            {stocks.map((stock) => (
              <div
                key={stock.name}
                className="bg-white p-5 rounded-lg shadow-md border border-gray-100 flex flex-col space-y-3 transition hover:shadow-lg"
              >
                {/* 종목명 + 의견 */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#111827]">
                    {stock.name}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getSignalStyle(
                      stock.signal
                    )}`}
                  >
                    {stock.signal}
                  </span>
                </div>

                {/* subtle divider */}
                <div className="border-t border-gray-100"></div>

                {/* 투자 확신도 - 고급화 */}
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500">투자 확신도</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-primary text-lg">
                      {stock.percent}%
                    </span>
                    <div className="w-2/3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-brand-primary h-2 rounded-full transition-all"
                        style={{ width: `${stock.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 안내 문구 */}
          <p className="text-xs text-gray-500">
            ※ 본 데이터는 최근 DART 공시자료 분석 결과를 기반으로 산출된 투자 의견입니다.
          </p>
        </div>

        {/* 고정된 하단 버튼 */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <button
            className="w-full py-3 rounded-full text-base font-semibold bg-brand-primary text-white hover:opacity-90 transition"
            onClick={() => router.push('/')}
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
