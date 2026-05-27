import type { SaveBox } from "@savebox/shared";

export function createMockSaveBoxes(): SaveBox[] {
  return [
    {
      id: "box_bakery_001",
      storeId: "store_bakery_001",
      storeName: "동네 베이커리",
      category: "bakery",
      title: "오늘의 베이커리 마감박스",
      originalPrice: 15000,
      salePrice: 6900,
      quantityRemaining: 4,
      pickupStartsAt: "2026-05-27T19:00:00+09:00",
      pickupEndsAt: "2026-05-27T21:00:00+09:00",
      storageNote: "당일 섭취 권장",
      allergyNote: "밀, 우유, 계란 포함 가능",
      distanceMeters: 420,
    },
  ];
}

