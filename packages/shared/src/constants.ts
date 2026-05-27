export const CATEGORIES = [
  "bakery",
  "lunchbox",
  "side_dish",
  "local_mart",
  "butcher",
  "fruit",
  "cafe",
] as const;

export const PICKUP_STATUS = {
  pendingPayment: "pending_payment",
  paid: "paid",
  readyForPickup: "ready_for_pickup",
  pickedUp: "picked_up",
  canceled: "canceled",
  noShow: "no_show",
} as const;

export const DEFAULT_PLATFORM_FEE_RATE = 0.1;

