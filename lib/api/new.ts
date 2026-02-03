import { ApiResponse } from '@/types/common';
import { Product, SellerProduct } from '@/types/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

// 상품 등록 함수
export async function registProduct(
  formData: SellerProduct
  // accessToken: string
  // accessToken: string = '' // 임시로 빈 문자열 할당
): Promise<ApiResponse<Product>> {
  try {
    const res = await fetch(`${API_URL}/seller/products/`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        // 임시로 토큰 직접 삽입
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsInR5cGUiOiJzZWxsZXIiLCJpYXQiOjE3NzAwNzg2OTksImV4cCI6MTc3MDE2NTA5OSwiaXNzIjoiRkVCQyJ9.rPfd9dreyKAJEE_Xk3yXmCR83n1o91pbCDlMimJ-MHg`,
      },
      body: JSON.stringify(formData),
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return {
      ok: 0,
      message: '상품 등록에 실패했습니다. 다시 시도해 주세요.',
    };
  }
}
