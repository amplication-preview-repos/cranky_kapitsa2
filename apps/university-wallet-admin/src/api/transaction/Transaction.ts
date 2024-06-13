import { StudentWallet } from "../studentWallet/StudentWallet";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  createdDate: Date | null;
  id: string;
  status?: "Option1" | null;
  studentWallet?: StudentWallet | null;
  transactionType?: "Option1" | null;
  updatedAt: Date;
};
