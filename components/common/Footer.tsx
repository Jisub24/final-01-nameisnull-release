'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//푸터
export default function UnderBar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href; // pathname과 href가 같으면 true, 아니면 false를 반환

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 font-pretendard flex justify-between items-center w-full h-15 shadow-[0_-6px_12px_-8px_rgba(0,0,0,0.12)] px-[36.86px]">
        <Link href="/products" className="flex flex-col items-center gap-0.75">
          <Image
            src={
              isActive('/products')
                ? '/icons/footer-home-fill.svg'
                : '/icons/footer-home-line.svg'
            }
            alt="홈"
            width={22}
            height={22}
          />
          <span
            className={`text-[11px] leading-none ${
              isActive('/products')
                ? 'text-br-primary-500'
                : 'text-br-button-disabled-text'
            }`}
          >
            홈
          </span>
        </Link>
        <Link href="/search" className="flex flex-col items-center gap-0.75">
          <Image
            src={
              isActive('/search')
                ? '/icons/footer-aisearch-fill.svg'
                : '/icons/footer-aisearch-line.svg'
            }
            alt="검색페이지"
            width={22}
            height={22}
          />
          <span
            className={`text-[11px] leading-none ${isActive('/search') ? 'text-br-primary-500' : 'text-br-button-disabled-text'}`}
          >
            AI 검색
          </span>
        </Link>
        <Link href="/chat" className="flex flex-col items-center gap-0.75">
          <Image
            src={
              isActive('/chat')
                ? '/icons/footer-chat-fill.svg'
                : '/icons/footer-chat-line.svg'
            }
            alt="채팅페이지"
            width={22}
            height={22}
          />
          <span
            className={`text-[11px] leading-none ${isActive('/chat') ? 'text-br-primary-500' : 'text-br-button-disabled-text'}`}
          >
            포포톡
          </span>
        </Link>
        <Link href="/mypage" className="flex flex-col items-center gap-0.75">
          <Image
            src={
              isActive('/mypage')
                ? '/icons/footer-mypage-fill.svg'
                : '/icons/footer-mypage-line.svg'
            }
            alt="마이페이지"
            width={22}
            height={22}
          />
          <span
            className={`text-[11px] leading-none ${isActive('/mypage') ? 'text-br-primary-500' : 'text-br-button-disabled-text'}`}
          >
            마이페이지
          </span>
        </Link>
      </div>
    </>
  );
}
