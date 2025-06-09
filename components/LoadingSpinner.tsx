import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  currentStep?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = 'DART 공시자료를 분석하는 중입니다.',
  currentStep = '초기화 중...',
}) => {
  const desiredSpinnerDisplaySize = 60; // 살짝 더 크게
  const originalSet4Size = 180;
  const originalLiquidSize = 50;
  const scaleFactor = desiredSpinnerDisplaySize / originalSet4Size;
  const adjustedStdDeviation = 5 * scaleFactor;
  const feColorMatrixValueM44 = 15;
  const feColorMatrixValueM45 = -7;
  const liquidSize = originalLiquidSize * scaleFactor;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
      <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xl max-w-sm text-center space-y-4">
        <div
          className="relative"
          style={{
            width: `${desiredSpinnerDisplaySize}px`,
            height: `${desiredSpinnerDisplaySize}px`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg className="svg">
            <filter id="gooey">
              <feGaussianBlur stdDeviation={`${adjustedStdDeviation}`} in="SourceGraphic"></feGaussianBlur>
              <feColorMatrix
                values={`1 0 0 0 0
                         0 1 0 0 0
                         0 0 1 0 0
                         0 0 0 ${feColorMatrixValueM44} ${feColorMatrixValueM45}`}
              ></feColorMatrix>
            </filter>
          </svg>

          <div className="loading-content">
            <div className="liquid"></div>
            <div className="liquid"></div>
            <div className="liquid"></div>
            <div className="liquid"></div>
          </div>
        </div>

        <p className="text-lg font-bold text-gray-800 animate-fade-in-up">
          {message}
        </p>
        {currentStep && (
          <p className="text-md text-indigo-600 font-semibold animate-fade-in-up delay-100">
            {currentStep}
          </p>
        )}
        <p className="text-sm text-gray-500 animate-fade-in-up delay-200">
          공시 데이터 속 숨은 흐름을 읽고 있어요...
        </p>
      </div>

      {/* 스타일 */}
      <style jsx>{`
        .loading-content {
          position: relative;
          width: ${desiredSpinnerDisplaySize}px !important;
          height: ${desiredSpinnerDisplaySize}px !important;
          animation: rotate 4s ease-in-out infinite;
          filter: url("#gooey");
        }
        @keyframes rotate {
          0% { transform: rotate(360deg); }
          50% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .loading-content .liquid {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(
            90deg,
            rgba(67, 56, 202, 1) 0%,   /* indigo-700 */
            rgba(147, 51, 234, 1) 100% /* purple-600 */
          );
          width: ${liquidSize}px !important;
          height: ${liquidSize}px !important;
          border-radius: 50%;
          --ani_dur: 4s;
        }
        .loading-content .liquid:nth-child(1) {
          top: 0;
          animation: animate1 var(--ani_dur) ease-in-out infinite;
        }
        .loading-content .liquid:nth-child(2) {
          left: 0;
          animation: animate2 var(--ani_dur) ease-in-out infinite;
        }
        .loading-content .liquid:nth-child(3) {
          left: 100%;
          animation: animate3 var(--ani_dur) ease-in-out infinite;
        }
        .loading-content .liquid:nth-child(4) {
          top: 100%;
          animation: animate4 var(--ani_dur) ease-in-out infinite;
        }
        @keyframes animate1 {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 100%; }
        }
        @keyframes animate2 {
          0% { left: 0; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        @keyframes animate3 {
          0% { left: 100%; }
          50% { left: 0; }
          100% { left: 0; }
        }
        @keyframes animate4 {
          0% { top: 100%; }
          50% { top: 0; }
          100% { top: 0; }
        }
        .svg {
          width: 0;
          height: 0;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
