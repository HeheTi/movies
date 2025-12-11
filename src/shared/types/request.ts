export const REQUEST_STATUS = {
  idle: "idle",
  pending: "pending",
  success: "success",
  failed: "failed",
} as const;

export type TRequestStatus =
  (typeof REQUEST_STATUS)[keyof typeof REQUEST_STATUS];
