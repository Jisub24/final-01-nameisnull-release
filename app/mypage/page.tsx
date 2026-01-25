'use client';

import UnderBar from '@/components/common/Footer';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function MyPage() {
  const goBack = useRouter();

  return (
    <>
      <div className="font-pretendard pb-20">
        {/* 1. 헤더 */}
        <header className="flex items-center justify-between px-4 py-3">
          <button
            type="button"
            onClick={() => goBack.back()}
            aria-label="뒤로 가기"
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/arrow-left.svg"
              alt=""
              width={8}
              height={16}
              className="w-4 h-4"
            />
            <span className="text-lg font-medium">마이페이지</span>
          </button>
        </header>

        {/* 2. 프로필 섹션 */}
        <section className="px-4 py-4 flex items-center gap-3 mb-2">
          {/* ✨ 프로필 이미지 + 아이콘 */}
          <div className="relative">
            <img
              src="https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/UpcxMNkBGb.png"
              alt="프로필"
              className="w-16 h-16 rounded-full object-cover"
            />
            {/* + 아이콘 */}
            <img
              src="/icons/add.svg"
              alt=""
              className="absolute bottom-0 right-0 w-5 h-5"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-base font-semibold text-br-text-body">
              프루프루룰루
            </h2>
            <p className="text-xs text-br-input-disabled-text">
              sosadong@gmail.com
            </p>
          </div>

          {/* ✨ 크기만 축소 (디자인 동일) */}
          <button className="px-4 py-2 text-sm font-light bg-br-input2-disabled-bg text-br-input2-disabled-text rounded-xl">
            프로필 편집
          </button>
        </section>

        {/* 3. 나의 포포 */}
        <section className="px-4 py-4">
          <h3 className="text-lg font-semibold mb-4">나의 포포</h3>

          <div className="p-4 border border-br-input-disabled-line rounded-xl">
            <div className="flex gap-6">
              {/* 왼쪽: 정보 + 버튼 */}
              <div className="flex-1 p-3">
                {/* 정보 (dl/dt/dd) */}
                <dl className="space-y-2 mb-3">
                  <div className="flex text-sm">
                    <dt className="text-br-primary-500 w-16">이 름</dt>
                    <dd className="text-br-text-body">돌푸</dd>
                  </div>
                  <div className="flex text-sm">
                    <dt className="text-br-primary-500 w-16">품 종</dt>
                    <dd className="text-br-text-body">푸들</dd>
                  </div>
                  <div className="flex text-sm">
                    <dt className="text-br-primary-500 w-16">체 중</dt>
                    <dd className="text-br-text-body">7.5 kg</dd>
                  </div>
                  <div className="flex text-sm">
                    <dt className="text-br-primary-500 w-16">연령대</dt>
                    <dd className="text-br-text-body">시니어 (7살~)</dd>
                  </div>
                </dl>
                {/* 버튼 */}
                <button className="w-full h-8 text-sm font-light bg-br-input2-disabled-bg text-br-input2-disabled-text rounded-xl">
                  나의 포포 변경
                </button>
              </div>

              {/* 오른쪽: 큰 이미지 */}
              <img
                src="https://res.cloudinary.com/ddedslqvv/image/upload/v1769060488/febc15-final01-ecad/0OtsJhqxDW.png"
                alt="반려동물"
                className="w-40 h-40 rounded-lg object-cover shrink-0 items-center m-1"
              />
            </div>
          </div>
        </section>
        {/* 4. 나의 관심 */}
        <section className="px-4 py-4 mt-2">
          <h3 className="text-lg font-semibold mb-4">나의 관심</h3>

          <div className="flex justify-around py-4">
            <button className="flex flex-col items-center gap-2">
              <Image
                src="/icons/heart-line.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="text-xs text-br-input-disabled-text">
                찜 목록
              </span>
            </button>

            <button className="flex flex-col items-center gap-2">
              <Image
                src="/icons/recently.svg"
                alt=""
                width={24}
                height={24}
                className="w-5 h-5"
              />
              <span className="text-xs text-br-input-disabled-text">
                최근 본 상품
              </span>
            </button>
          </div>
        </section>

        {/* 5. 나의 거래 */}
        <section className="px-4 py-4 mt-2">
          <h3 className="text-lg font-semibold mb-4">나의 거래</h3>

          <ul className="space-y-1 ml-7">
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">판매 내역</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">구매내역</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">
                  내 상품 관리하기
                </span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">설정</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
          </ul>
        </section>

        {/* 6. 고객지원 */}
        <section className="px-4 py-4 mt-2">
          <h3 className="text-lg font-semibold mb-4">고객지원</h3>

          <ul className="space-y-1 ml-7">
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">공지사항</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">고객센터</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">
                  약관 및 정책
                </span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
            <li>
              <button className="w-full flex items-center justify-between py-2">
                <span className="text-br-input-disabled-text">로그아웃</span>
                <Image
                  src="/icons/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </button>
            </li>
          </ul>
        </section>
      </div>
      <UnderBar />
    </>
  );
}
