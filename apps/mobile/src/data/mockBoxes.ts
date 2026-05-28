import type { SaveBox } from "@savebox/shared";

export const mockBoxes: SaveBox[] = [
  {
    id: "box_bakery_001",
    storeId: "store_bakery_001",
    storeName: "동네 베이커리",
    category: "bakery",
    title: "오늘의 베이커리 마감박스",
    originalPrice: 15000,
    salePrice: 6900,
    quantityRemaining: 4,
    pickupStartsAt: "2026-05-28T19:00:00+09:00",
    pickupEndsAt: "2026-05-28T21:00:00+09:00",
    storageNote: "당일 섭취 권장",
    allergyNote: "밀, 우유, 계란 포함 가능",
    distanceMeters: 420,
  },
  {
    id: "box_side_001",
    storeId: "store_side_001",
    storeName: "정성 반찬",
    category: "side_dish",
    title: "저녁 반찬 마감박스",
    originalPrice: 12000,
    salePrice: 5900,
    quantityRemaining: 3,
    pickupStartsAt: "2026-05-28T18:30:00+09:00",
    pickupEndsAt: "2026-05-28T20:00:00+09:00",
    storageNote: "수령 후 냉장 보관",
    allergyNote: "대두, 참깨 포함 가능",
    distanceMeters: 680,
  },
];

