import UnderBar from '@/components/common/Footer';
import Image from 'next/image';

/* ai 검색창 페이지 */
export default function SearchPage() {
  return (
    <>
      <main className="font-pretendard min-h-screen flex flex-col items-center text-center">
        <Image
          src="/icons/aisearch-sparkle.svg"
          alt="별빛"
          width={40}
          height={40}
          className="mt-42.5"
        />

        <p className="text-2xl mt-3.75">
          AI 검색으로 나의 포포에게
          <br /> 맞는 상품을 추천해드려요.
        </p>
        <div className="relative w-85.75 mt-12.75">
          <Image
            src="/icons/aisearch-generation.svg"
            alt="검색"
            width={26}
            height={25}
            className="absolute left-4 top-1/2 -translate-y-1/2"
          />

          <input
            type="search"
            placeholder='"말랑한 간식 추천해 줘"'
            className="w-full h-13 border border-br-input-disabled-line 
          focus:border-br-primary-500 focus:border-2 focus:outline-none 
          rounded-full shadow-[0_6px_14px_-10px_rgba(0,0,0,0.25)] text-center text-[15px] text-br-input-disabled-text"
          />
        </div>

        <div className="text-br-input-disabled-line text-[13px] mt-4.5 flex flex-col gap-2.25">
          <p>&quot;시니어 강아지가 먹을 간식 뭐야?&quot;</p>
          <p>&quot;활동량 적은 고양이 장난감 추천해 줘!&quot;</p>
          <p>&quot;관절 사료 추천해 줘!&quot;</p>
        </div>
      </main>
      <UnderBar />
    </>
  );
}
