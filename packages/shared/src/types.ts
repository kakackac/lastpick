import type { CATEGORIES, PICKUP_STATUS } from "./constants";

export type Category = (typeof CATEGORIES)[number];

export type PickupStatus = (typeof PICKUP_STATUS)[keyof typeof PICKUP_STATUS];

export interface Store {
  id: string;
  name: string;
  category: Category;
  distanceMeters?: number;
  address: string;
  rating?: number;
}

export interface SaveBox {
  id: string;
  storeId: string;
  storeName: string;
  category: Category;
  title: string;
  originalPrice: number;
  salePrice: number;
  quantityRemaining: number;
  pickupStartsAt: string;
  pickupEndsAt: string;
  storageNote?: string;
  allergyNote?: string;
  distanceMeters?: number;
}

export interface Order {
  id: string;
  saveBoxId: string;
  status: PickupStatus;
  quantity: number;
  totalAmount: number;
  pickupCode: string;
}

