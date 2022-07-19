interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  // something: string;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProduct(): Promise<Product[]> {
  // ..
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// // Product를 그대로 재활용할 수 없는 상태가 됨
// // -> ProductDetail을 따로 선언
// function displayProductDetail(shoppingItem: ProductDetail) {
//   // ..
// }

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
// 유틸리티 타입 Pick을 이용
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {
  // ..
}

type updateProduct = Partial<Product>;
// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}
interface UserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}
// #1
type UserProfileUpdate = {
  username?: UserProfile["username"];
  email?: UserProfile["email"];
  profilePhotoUrl?: UserProfile["profilePhotoUrl"];
};

// #2
type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};
type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T> = {
  [p in keyof T]?: T[p];
};
