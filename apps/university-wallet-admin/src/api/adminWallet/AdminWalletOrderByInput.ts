import { SortOrder } from "../../util/SortOrder";

export type AdminWalletOrderByInput = {
  createdAt?: SortOrder;
  dailyCap?: SortOrder;
  id?: SortOrder;
  monthlyCap?: SortOrder;
  totalBalance?: SortOrder;
  updatedAt?: SortOrder;
};
