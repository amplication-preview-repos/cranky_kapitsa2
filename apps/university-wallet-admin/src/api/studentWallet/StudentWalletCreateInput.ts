import { TransactionCreateNestedManyWithoutStudentWalletsInput } from "./TransactionCreateNestedManyWithoutStudentWalletsInput";

export type StudentWalletCreateInput = {
  balance?: number | null;
  locked?: boolean | null;
  transactions?: TransactionCreateNestedManyWithoutStudentWalletsInput;
  uniqueIdentifier?: string | null;
};
