import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  createdDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  studentWalletId?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
