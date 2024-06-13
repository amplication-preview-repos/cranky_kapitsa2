import { StudentWallet as TStudentWallet } from "../api/studentWallet/StudentWallet";

export const STUDENTWALLET_TITLE_FIELD = "uniqueIdentifier";

export const StudentWalletTitle = (record: TStudentWallet): string => {
  return record.uniqueIdentifier?.toString() || String(record.id);
};
