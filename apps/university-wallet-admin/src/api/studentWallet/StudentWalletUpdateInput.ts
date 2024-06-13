import { TransactionUpdateManyWithoutStudentWalletsInput } from "./TransactionUpdateManyWithoutStudentWalletsInput";

export type StudentWalletUpdateInput = {
  balance?: number | null;
  locked?: boolean | null;
  transactions?: TransactionUpdateManyWithoutStudentWalletsInput;
  uniqueIdentifier?: string | null;
};
