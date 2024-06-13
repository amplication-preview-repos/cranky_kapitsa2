import { SortOrder } from "../../util/SortOrder";

export type StudentWalletOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locked?: SortOrder;
  uniqueIdentifier?: SortOrder;
  updatedAt?: SortOrder;
};
