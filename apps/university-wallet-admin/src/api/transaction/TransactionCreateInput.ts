import { StudentWalletWhereUniqueInput } from "../studentWallet/StudentWalletWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  createdDate?: Date | null;
  status?: "Option1" | null;
  studentWallet?: StudentWalletWhereUniqueInput | null;
  transactionType?: "Option1" | null;
};
