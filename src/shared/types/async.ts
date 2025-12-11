import type { TRequestStatus } from "./request";
import type { ApiError } from "./errors";

export type TAsyncState<T> = {
  data: T;
  status: TRequestStatus;
  error: ApiError | null;
};
