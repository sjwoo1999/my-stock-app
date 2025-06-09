'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/components/LoadingSpinner'; // ← 이게 맞음!

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/search');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-[#9333EA] flex flex-col items-center justify-center">
      <LoadingSpinner
        message="DART 공시자료를 분석하는 중입니다."
        currentStep="공시 텍스트 읽는 중..."
      />
    </div>
  );
}
