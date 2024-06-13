import { Transaction } from "../transaction/Transaction";

export type StudentWallet = {
  balance: number | null;
  createdAt: Date;
  id: string;
  locked: boolean | null;
  transactions?: Array<Transaction>;
  uniqueIdentifier: string | null;
  updatedAt: Date;
};
