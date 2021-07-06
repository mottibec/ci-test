import { SortOrder } from "../../util/SortOrder";

export type CiRunOrderByInput = {
  createdAt?: SortOrder;
  endedAt?: SortOrder;
  id?: SortOrder;
  startedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
