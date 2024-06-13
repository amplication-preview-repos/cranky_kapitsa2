import { StudentWalletWhereUniqueInput } from "../studentWallet/StudentWalletWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  createdDate?: Date | null;
  status?: "Option1" | null;
  studentWallet?: StudentWalletWhereUniqueInput | null;
  transactionType?: "Option1" | null;
};
